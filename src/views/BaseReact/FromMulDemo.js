import React from 'react';
// import PropTypes from 'prop-types';

class FromMulDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			isAdmin: true,
			isRember: true
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
		});
	};
	render() {
		return (
			<div>
				<h3>多表单公用</h3>
				<p>用户名:{this.state.name}</p>
				<p>邮箱: {this.state.email}</p>
				<p>是否是管理员: {this.state.isAdmin ? 'true' : 'false'}</p>
				<p>是否记住密码: {this.state.isRember ? 'true' : 'false'}</p>
				<hr />

				<p>
					<label htmlFor="texName">用户名:</label>
					<input onChange={this.handleChange} value={this.state.name} type="text" id="texName" name="name" />
				</p>
				<p>
					<label htmlFor="texEmail">邮箱:</label>
					<input
						onChange={this.handleChange}
						value={this.state.email}
						type="text"
						id="texEmail"
						name="email"
					/>
				</p>
				<p>
					<label htmlFor="texName">是否是管理员:</label>
					<input
						onChange={this.handleChange}
						value={this.state.isAdmin}
						defaultChecked={this.state.isAdmin}
						type="checkbox"
						id="texName"
						name="isAdmin"
					/>
				</p>
				<p>
					<label htmlFor="texRember">是否记住密码:</label>
					<input
						onChange={this.handleChange}
						value={this.state.isRember}
						defaultChecked={this.state.isRember}
						type="checkbox"
						id="texRember"
						name="isRember"
					/>
				</p>
			</div>
		);
	}
}

FromMulDemo.propTypes = {};

export default FromMulDemo;
