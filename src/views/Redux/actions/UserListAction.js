import axios from 'axios';

export const UserListActionTypes = {
	LOAD_USERLIST: 'LOAD_USERLIST',
	ADD_USER: 'ADD_USER',
	REMOVE_USER: 'REMOVE_USER',
	UPDATE_USER: 'UPDATE_USER'
};

export const UserListActionCreators = {
	LoadUserListAction(payload) {
		return {
			type: UserListActionTypes.LOAD_USERLIST,
			payload
		};
	},
	AddUserListAction(payload) {
		return {
			type: UserListActionTypes.ADD_USER,
			payload
		};
	},
	RemoveUserListAction(payload) {
		return {
			type: UserListActionTypes.REMOVE_USER,
			payload
		};
	},
	RemoveUserListAsyncAction(payload) {
		console.log(payload);
		return function(dispatch, getState) {
			return axios.delete('/news/' + payload).then((res) => {
				console.log(res);
				dispatch(UserListActionCreators.RemoveUserListAction(payload));
			});
		};
	},
	UpdateUserListAction(payload) {
		return {
			type: UserListActionTypes.UPDATE_USER,
			payload
		};
	}
};
