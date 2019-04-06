import { UserListActionTypes } from '../actions/UserListAction';

export default function UserListReducer(preState = [], action) {
	switch (action.type) {
		case UserListActionTypes.LOAD_USERLIST:
			return action.payload;
		case UserListActionTypes.ADD_USER:
			console.log(action.payload);
			return [ ...preState, action.payload ];
		case UserListActionTypes.REMOVE_USER:
			console.log('删除reducer', action.payload);
			// preState.filter((item) => item.id !== action.payload);
			// let delIndex = preState.findIndex((item) => item.id === action.payload);
			// preState.splice(delIndex, 1);
			// console.log('删除reducer之后', preState);
			// return preState ;
			return preState.filter((item) => item.id !== action.payload);
		case UserListActionTypes.UPDATE_USER:
			let updateIndex = preState.findIndex((item) => item.id === action.payload.id);
			preState.splice(updateIndex, 1, action.payload);
			return [ ...preState ];
		default:
			return preState;
	}
}
