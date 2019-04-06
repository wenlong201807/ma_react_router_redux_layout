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
	LoadUserListAsyncAction(payload) {
		return (dispatch, getState) => {
			axios.get('/news').then((res) => {
				console.log(res.data);
				dispatch(this.LoadUserListAction(res.data));
			});
		};
	},
	AddUserListAction(payload) {
		return {
			type: UserListActionTypes.ADD_USER,
			payload
		};
	},
	AddUserListAsyncAction(payload) {
		return (dispatch, getState) => {
			console.log(payload);
			return axios.post('/news', payload).then((res) => {
				console.log(res);
				dispatch(UserListActionCreators.AddUserListAction(payload));
			});
		};
	},
	RemoveUserListAction(payload) {
		return {
			type: UserListActionTypes.REMOVE_USER,
			payload
		};
	},
	RemoveUserListAsyncAction(payload) {
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
	},
	UpdateUserListAsyncAction(payload) {
		return function(dispatch, getState) {
			console.log(payload);
			return axios.put('/news/' + payload.id, payload).then((res) => {
				console.log(res);
				dispatch(UserListActionCreators.UpdateUserListAction(res.data));
				// dispatch(this.UpdateUserListAction(res.data)); // 错误的
			});
		};
	}
};
