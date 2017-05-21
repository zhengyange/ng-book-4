import { Action } from 'redux';
import { createSelector } from 'reselect';
import { Thread } from './thread.model';
import { Message } from '../message/message.model';
import * as ThreadActions from './thread.action';

export interface ThreadsEntities {
	[id: string]: Thread
}

export interface ThreadsState { 
	ids: string[]; 
	entities: ThreadsEntities; 
	currentThreadId?: string; 
};

const initialState: ThreadsState = { 
	ids: [], 
	currentThreadId: null, 
	entities: {} 
};

export const ThreadsReducer = 
	function(state: ThreadsState = initialState, action: Action): ThreadsState {
		switch (action.type) {
			case ThreadActions.ADD_THREAD: {
				const thread = (<ThreadActions.AddThreadAction>action).thread;
				if(state.ids.includes(thread.id)) {
					return state;
				}

				return {
					ids: [...state.ids, thread.id],
					currentThreadId: thread.id,
					entities: Object.assign({}, state.entities, {[thread.id]: thread})
				}
			}
			case ThreadActions.ADD_MESSAGE: {
				const threadm = (<ThreadActions.AddMessageAction>action).thread;
				const message = (<ThreadActions.AddMessageAction>action).message;
				const isRead = message.thread.id === state.currentThreadId ?
												true : message.isRead;

				const newMessage = Object.assign({}, message, { isRead: isRead})
				const oldThread = state.entities[threadm.id];
				const newThread = Object.assign({}, oldThread, {
					messages: [...oldThread.messages, newMessage] 
				});

				return {
					ids: state.ids,
					currentThreadId: state.currentThreadId,
					entities: Object.assign({}, state.entities, {
						[threadm.id]: newThread
					})
				}
			}
			case ThreadActions.SELECT_THREAD: {
				const thread = (<ThreadActions.SelectThreadAction>action).thread; 
				const oldThread = state.entities[thread.id];
				const newMessages = oldThread.messages.map( 
					(message) => Object.assign({}, message, { isRead: true }));
				const newThread = Object.assign({}, oldThread, {
					messages: newMessages });

				return { 
					ids: state.ids, 
					currentThreadId: thread.id, 
					entities: Object.assign({}, state.entities, {
						[thread.id]: newThread }) 
				};
			}
			default:
				return state;
		}
	}

export const getThreadsState = (state): ThreadsState => state.threads;

export const getThreadsEntities = createSelector(
  getThreadsState,
  ( state: ThreadsState ) => state.entities );

export const getAllThreads = createSelector(
  getThreadsEntities,
  ( entities: ThreadsEntities ) => Object.keys(entities)
                        .map((threadId) => entities[threadId]));

export const getUnreadMessagesCount = createSelector(
  getAllThreads,
  ( threads: Thread[] ) => threads.reduce(
      (unreadCount: number, thread: Thread) => {
        thread.messages.forEach((message: Message) => {
          if (!message.isRead) {
            ++unreadCount;
          }
        });
        return unreadCount;
      },
      0));
export const getCurrentThread = createSelector(
  getThreadsEntities,
  getThreadsState,
  ( entities: ThreadsEntities, state: ThreadsState ) =>
    entities[state.currentThreadId] );

export const getAllMessages = createSelector(
  getAllThreads,
  ( threads: Thread[] ) =>
    threads.reduce( // gather all messages
      (messages, thread) => [...messages, ...thread.messages],
      []).sort((m1, m2) => m1.sentAt - m2.sentAt)); // sort them by time