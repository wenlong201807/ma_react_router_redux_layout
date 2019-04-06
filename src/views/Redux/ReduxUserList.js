import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListActionCreators } from './actions/UserListAction';
import UserRow from './components/UserRow';
import AddUserRow from './components/AddUserRow';

function mapStateToProps(state) {
	return {
		UserList: state.UserList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadUserList: () => dispatch(UserListActionCreators.LoadUserListAsyncAction()),
		delUser: (id) => dispatch(UserListActionCreators.RemoveUserListAsyncAction(id)),
		updateUser: (user) => dispatch(UserListActionCreators.UpdateUserListAsyncAction(user)),
		addUser: (user) => dispatch(UserListActionCreators.AddUserListAsyncAction(user))
	};
}

class ReduxUserList extends Component {
	constructor(props) {
		super(props);
		console.log(props);

		this.props.loadUserList();
	}
	render() {
		return (
			<div>
				<h2>redux_crud</h2>

				<AddUserRow addUser={this.props.addUser} />
				<table>
					<thead>
						<tr>
							<th>id__编号 &nbsp;&nbsp;</th>
							<th>title__标题 &nbsp;&nbsp;</th>
							<th>isDel__能否删除 &nbsp;&nbsp;</th>
							<th>remark__备注 &nbsp;&nbsp;</th>
							<th />
							<th />
						</tr>
					</thead>
					<tbody>
						{this.props.UserList.map((item, index) => {
							return (
								<UserRow
									updateUser={this.props.updateUser}
									delUser={() => this.props.delUser(item.id)}
									key={index}
									User={item}
								/>
								// <tr key={index}>
								// 	<td>{item.id}</td>
								// 	<td>{item.title}</td>
								// 	<td>{item.isDel ? '是' : '否'}</td>
								// 	<td>{index}</td>
								// 	<td>
								// 		<button
								// 			onClick={() => {
								// 				console.log(item.id);
								// 				// this.updateUser(item.id, item.title, item.isDel);
								// 			}}>
								// 			修改
								// 		</button>
								// 	</td>
								// </tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxUserList);
