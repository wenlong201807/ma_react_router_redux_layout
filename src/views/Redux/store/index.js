import { createStore } from 'redux';

export const ActionTypes = {
	ADD_NUM: 'ADD_NUM',
	MINUS_NUM: 'MINUS_NUM',
	REPLACE_NUM: 'REPLACE_NUM'
};

export const ActionCreators = {
	AddActionCreator(payload) {
		return {
			type: ActionTypes.ADD_NUM,
			payload
		};
	},
	MinusActionCreator(payload) {
		return {
			type: ActionTypes.MINUS_NUM,
			payload
		};
	},
	ReplaceActionCreator(payload) {
		return {
			type: ActionTypes.REPLACE_NUM,
			payload
		};
	}
};

function rootReducer(preState = 0, action) {
	switch (action.type) {
		case ActionTypes.ADD_NUM:
			return preState + action.payload;
		case ActionTypes.MINUS_NUM:
			return preState - action.payload;
		case ActionTypes.REPLACE_NUM:
			return action.payload;
		default:
			return preState;
	}
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// store.dispatch({ type: '', payload });

export default store;
