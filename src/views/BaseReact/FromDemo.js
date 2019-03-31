import React from 'react';
// import PropTypes from 'prop-types';

class FromDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			remark: '',
			provice: '北京',
			hobby: '',
			football: 'false'
		};
	}

	handlerNameChange = (e) => {
		console.log(e.target.value);
		// this.setState({ name: e.target.value });
		this.setState({ [e.target.name]: e.target.value });
	};
	handlerEmailChange = (e) => {
		console.log(e.target.value);
		this.setState({ [e.target.name]: e.target.value });
	};
	handlerRemarkChange = (e) => {
		console.log(e.target.value);
		this.setState({ [e.target.name]: e.target.value });
	};
	handlerProviceChange = (e) => {
		console.log(e.target.value);
		this.setState({ [e.target.name]: e.target.value });
	};
	handlerfootballChange = (e) => {
		let aa = e.target.checked ? 'true' : 'false';
		console.log(aa);
		this.setState({ [e.target.name]: aa });
	};

	render() {
		return (
			<div>
				<h3>表单练习</h3>
				<button
					onClick={(e) => {
						return this.setState((preState) => {
							return {
								remark: preState.remark + '+1'
							};
						});
					}}>
					点我之后，备注输入框的内容会+1，自定义实现数据双向绑定
				</button>
				<p>用户名:{this.state.name}</p>
				<p>邮箱: {this.state.email}</p>
				<p>备注: {this.state.remark}</p>
				<p>省份: {this.state.provice}</p>
				<p>足球: {this.state.football}</p>
				{/* <p>
					<label htmlFor="texName">用户名:</label>
					<input onChange={this.handlerNameChange} type="text" id="texName" name="texName" />
				</p> 
			
		    <p>
					<label htmlFor="texEmail">邮箱:</label>
					<input onChange={this.handlerEmailChange} type="text" id="texEmail" name="texEmail" />
				</p> */}

				<p>
					<label htmlFor="texName">用户名:</label>
					<input
						onChange={this.handlerNameChange}
						value={this.state.name}
						type="text"
						id="texName"
						name="name"
					/>
				</p>
				<p>
					<label htmlFor="texEmail">邮箱:</label>
					<input
						onChange={this.handlerEmailChange}
						value={this.state.email}
						type="text"
						id="texEmail"
						name="email"
					/>
				</p>
				<p>
					<label htmlFor="remark">备注:</label>
					<textarea
						onChange={this.handlerRemarkChange}
						value={this.state.remark}
						type="text"
						id="remark"
						name="remark"
					/>
				</p>
				<p>
					<label htmlFor="provice">省份:</label>
					<select name="provice" id="provice" value={this.state.provice} onChange={this.handlerProviceChange}>
						<option value="北京">北京</option>
						<option value="天津">天津</option>
						<option value="深圳">深圳</option>
						<option value="上海">上海</option>
					</select>
				</p>
				<p>
					爱好：
					<label>
						篮球
						<input type="checkbox" name="basketball" id="basketball" value={this.state.basketball} />
					</label>
					<label htmlFor="">
						足球
						<input
							onChange={this.handlerfootballChange}
							type="checkbox"
							name="football"
							id="football"
							value={this.state.football}
						/>
					</label>
				</p>
			</div>
		);
	}
}

FromDemo.propTypes = {};

export default FromDemo;
