import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import store from '../Redux/store';
import { UserListActionCreators } from '../Redux/actions/UserListAction';
import { Popconfirm, message, Button } from 'antd';

class UserListCURD extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			UserList: store.getState().UserList,
			unsubscribe: store.subscribe(() => {
				this.setState(() => {
					return {
						UserList: store.getState().UserList
					};
				});
			})
		};
	}

	componentWillUnmount() {
		this.state.unsubscribe();
	}

	componentDidMount() {
		axios.get('/news').then((res) => {
			store.dispatch(UserListActionCreators.LoadUserListAction(res.data));
		});
	}

	delUser = (id) => {
		console.log(id);
		// axios.delete('/news/' + id).then((res) => {
		// 	console.log(res);
		// 	store.dispatch(UserListActionCreators.RemoveUserListAction(id));
		// });

		store
			.dispatch(UserListActionCreators.RemoveUserListAsyncAction(id))
			.then((res) => {
				console.log(res);
				message.success('成功删除数据');
			})
			.catch((e) => {
				console.log(e);
				message.success('删除失败，请重试');
			});
	};
	updateUser = (id, title, isDel) => {
		console.log(id, title, isDel);
	};

	cancel = (e) => {
		console.log(e);
		message.error('取消删除数据');
	};

	render() {
		return (
			<div>
				<h2>用户列表crue__redux</h2>
				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>title</th>
							<th>isDel</th>
							<th>remark</th>
							<th />
							<th />
						</tr>
					</thead>
					<tbody>
						{this.state.UserList.map((item, index) => {
							return (
								<tr key={index}>
									<td>{item.id}</td>
									<td>{item.title}</td>
									<td>{item.isDel ? '是' : '否'}</td>
									<td>{index}</td>
									<td>
										{/* <button
											onClick={() => {
												this.updateUser(item.id, item.title, item.isDel);
											}}>
											修改
										</button> */}
										<Button
											onClick={() => {
												this.updateUser(item.id, item.title, item.isDel);
											}}
											type="primary">
											修改
										</Button>
									</td>
									<td>
										{/* <button
											onClick={() => {
												this.delUser(item.id);
											}}>
											删除
										</button> */}
										<Popconfirm
											title="您确认要删除这条数据吗？"
											// onConfirm={this.confirm}
											onConfirm={() => {
												this.delUser(item.id);
											}}
											onCancel={this.cancel}
											okText="确定"
											cancelText="取消">
											<Button type="danger">删除</Button>
										</Popconfirm>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

UserListCURD.propTypes = {};

export default UserListCURD;
