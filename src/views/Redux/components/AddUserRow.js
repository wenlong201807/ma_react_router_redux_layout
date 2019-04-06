import React, { Component, Fragment } from 'react';
import { Modal, message, Button } from 'antd';

class AddUserRow extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			isAdd: false,
			title: '',
			isDel: false
		};
	}

	addChangeHander = (e) => {
		console.log(e.target.type === 'checkbox' ? e.target.checked : e.target.value);
		// this.setState(
		// 	(preState) => {
		// 		return {
		// 			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
		// 		};
		// 	},
		// 	() => {
		// 		console.log(this.state.title);
		// 	}
		// );

		this.setState({
			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
		});
	};

	getAddUser = (e) => {
		console.log();
		return {
			// [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
			title: this.state.title,
			isDel: this.state.isDel,
			id: Date.now()
		};
	};

	handleOk = () => {
		// console.log(e);
		// this.setState({
		// 	isAdd: false
		// });
		this.props
			.addUser(this.getAddUser())
			.then(() => {
				message.success('数据添加成功');
				this.setState({ isAdd: false });
			})
			.catch(() => {
				message.error('数据添加失败，请重试');
			});
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			isAdd: false
		});
	};
	render() {
		return (
			<div>
				<Button
					onClick={() => {
						this.setState({ isAdd: true });
					}}
					type="primary">
					添加
				</Button>
				{this.state.isAdd && (
					<Fragment>
						<Modal
							title="添加用户数据"
							visible={this.state.isAdd}
							onOk={this.handleOk}
							onCancel={this.handleCancel}>
							<p>
								<span>标题</span>
								<input
									type="text"
									value={this.state.title}
									name="title"
									onChange={this.addChangeHander}
								/>
							</p>
							<p>
								<span>是否删除</span>
								<input
									type="checkbox"
									checked={this.state.isDel}
									name="isDel"
									onChange={this.addChangeHander}
								/>
							</p>
						</Modal>
					</Fragment>
				)}
			</div>
		);
	}
}

export default AddUserRow;
