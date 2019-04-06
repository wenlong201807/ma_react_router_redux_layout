import React, { Component, Fragment } from 'react';
import { Popconfirm, message, Button } from 'antd';

class UserRow extends Component {
	state = {
		isEdit: false,
		EditUser: { ...this.props.User }
		// [e.target.name]: [ e.target.value ]
	};

	handerChange = (e) => {
		return this.setState(
			{
				EditUser: {
					...this.state.EditUser,
					[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
				}
			}
			// (preState) => {
			// 	return {
			// 		EditUser: {
			// 			...preState.EditUser,
			// 			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
			// 		}
			// 	};
			// }
		);
	};
	render() {
		let { User } = this.props;
		let { EditUser } = this.state;
		return (
			<tr>
				{this.state.isEdit ? (
					<Fragment>
						<td>{User.id}</td>
						<td>
							<input type="text" name="title" onChange={this.handerChange} value={EditUser.title} />
						</td>
						<td>
							是否删除:
							<input type="checkbox" name="isDel" onChange={this.handerChange} checked={EditUser.isDel} />
						</td>
						<td>
							<Button
								onClick={() => {
									return this.props
										.updateUser(EditUser)
										.then(() => {
											// console.log(res);
											message.success('修改成功');
											this.setState({ isEdit: false });
										})
										.catch(() => {
											message.success('修改失败，请重试');
										});
									// console.log(User.id);
									// this.updateUser(User.id, User.title, User.isDel);
								}}
								type="primary">
								保存
							</Button>
							&nbsp;
							<Button
								onClick={() => {
									this.setState({ isEdit: false });
								}}
								type="danger">
								取消
							</Button>
						</td>
					</Fragment>
				) : (
					<Fragment>
						<td>{User.id}</td>
						<td>{User.title}</td>
						<td>{User.isDel ? '是' : '否'}</td>
						<td>
							<Button
								onClick={() => {
									console.log(this.state.EditUser);
									this.setState({ isEdit: true });
								}}
								type="primary">
								编辑
							</Button>
							<Popconfirm
								title="您确认要删除这条数据吗？"
								onConfirm={() => {
									this.props.delUser(User.id);
								}}
								onCancel={() => {
									console.log(66);
								}}
								okText="确定"
								cancelText="取消">
								<Button type="danger">删除</Button>
							</Popconfirm>
						</td>
					</Fragment>
				)}
			</tr>
		);
	}
}

export default UserRow;
