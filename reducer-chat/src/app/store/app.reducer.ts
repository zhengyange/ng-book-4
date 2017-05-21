import { Reducer, combineReducers } from 'redux';
import { UsersState, UsersReducer } from '../user/user.reducer';
import { ThreadsState, ThreadsReducer } from '../thread/thread.reducer';

export * from '../thread/thread.reducer';
export * from '../user/user.reducer';

export interface AppState {
	users: UsersState,
	threads: ThreadsState
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
	users: UsersReducer,
	threads: ThreadsReducer
})