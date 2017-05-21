// import {
// 	Action,
// 	Reducer,
// 	Store,
// 	createStore
// } from 'redux';

// interface AppState {
// 	messages: string[];
// }
// interface AddMessageAction extends Action {
// 	message: string;
// }

// interface DeleteMessageAction extends Action {
// 	index: number;
// }

// let initialState: AppState = {messages: []};

// class MessageAction {
// 	static addMessage(message: string): AddMessageAction {
// 		return {
// 			type: 'ADD_MESSAGE',
// 			message: message
// 		}
// 	}

// 	static deleteMessage(index: number): DeleteMessageAction {
// 		return {
// 			type: 'DELETE_MESSAGE',
// 			index: index
// 		}
// 	}
// }

// let reducer: Reducer<AppState> = (state: AppState = initialState, action: Action) => {
// 	switch (action.type) {
// 		case 'ADD_MESSAGE':
// 			return {
// 				// 使用类型断言
// 				messages: state.messages.concat(
// 					(<AddMessageAction>action).message
// 				)
// 			}
// 		case 'DELETE_MESSAGE':
// 			let idx = (<DeleteMessageAction>action).index;
// 			return {messages: [
// 				...state.messages.slice(0, idx),
// 				...state.messages.slice(idx + 1, state.messages.length)
// 			]}
// 		default:
// 			return state;
// 	}
// }

// let store: Store<AppState> = createStore<AppState>(reducer)
// console.log(store.getState())
// store.dispatch(MessageAction.addMessage('mess1111111111'))
// store.dispatch(MessageAction.addMessage('22222222'))
// store.dispatch(MessageAction.addMessage('333333'))
// console.log(store.getState())