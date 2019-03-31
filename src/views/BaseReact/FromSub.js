import React from 'react';
// import PropTypes from 'prop-types';

class FromSub extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'zhuwenlong',
			Validate: {
				name: {
					required: true,
					minLen: 6,
					maxLen: 10,
					validate: true,
					msg: '标题内容不能为空'
				}
			}
		};
	}

	handerChange = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value
			},
			() => {
				this.validateInput();
			}
		);
	};

	handerSubmit = (e) => {
		e.preventDefault(); // 阻止表单默认提交操作
		this.validateInput(); // 做表单的校验
		// ajax请求  少了这一步骤
	};

	validateInput = (e) => {
		let { name, Validate } = this.state;
		let tempValidate = false;
		const len = name.length;
		const max = Validate.name.maxLen;
		const mix = Validate.name.mixLen;

		if (len >= mix && len <= max) {
			tempValidate = true;
		}

		this.setState((preState) => {
			// 自定义格式校验有问题
			return Object.assign({}, preState, {
				Validate: {
					name: Object.assign({}, preState.Validate.name, {
						validate: tempValidate
					})
				}
			});
		});
	};

	render() {
		return (
			<div>
				<h2>表单提交操作</h2>
				<p>用户名:{this.state.name}</p>
				<hr />
				<form action="" onSubmit={this.handerSubmit}>
					<p>
						<label htmlFor="texName">用户名:</label>
						<input
							onChange={this.handerChange}
							value={this.state.name}
							type="text"
							id="texName"
							name="name"
						/>
						{!this.state.Validate.name.validate && (
							<span style={{ color: 'red' }}>{this.state.Validate.name.msg}</span>
						)}
					</p>
					<input type="submit" value="提交" />
				</form>
			</div>
		);
	}
}

FromSub.propTypes = {};

export default FromSub;
