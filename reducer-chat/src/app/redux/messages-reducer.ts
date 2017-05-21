// interface Action {
// 	type: string;
// 	payload?: any;
// }

// interface Reducer<T> {
// 	(state: T, action: Action): T;
// }

// interface ListenerCallback {
// 	(): void;
// }

// interface UnsubscribeCallback {
// 	(): void;
// }

// interface AppState {
// 	messages: string[];
// }

// // interface Action {
// // 	type: string;
// // }

// interface AddMessageAction extends Action {
// 	message: string;
// }

// interface DeleteMessageAction extends Action {
// 	index: number;
// }

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

// class Store<T> {
// 	private _state: T;
// 	private _listeners: ListenerCallback[] = [];

// 	constructor(private reducer: Reducer<T>, initialState: T) {
// 		this._state = initialState;
// 	}

// 	getState(): T {
// 		return this._state;
// 	}

// 	dispatch(action: Action): void {
// 		this._state = this.reducer(this._state, action);
// 		this._listeners.forEach((listener: ListenerCallback) => listener())
// 	}

// 	subscribe(listener: ListenerCallback): UnsubscribeCallback {
// 		this._listeners.push(listener);
// 		return () => {
// 			this._listeners = this._listeners.filter(l => l !== listener);
// 		}
// 	}
// }

// let reducer: Reducer<AppState> = (state: AppState, action: Action) => {
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


// let store = new Store<AppState>(reducer, {messages: []});
// console.log(store.getState())
// store.dispatch(MessageAction.addMessage('mess1111111111'))
// store.dispatch(MessageAction.addMessage('22222222'))
// store.dispatch(MessageAction.addMessage('333333'))
// console.log(store.getState())