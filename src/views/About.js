import React from 'react';
import { Redirect } from 'react-router-dom';

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: true
		};
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<h3 className="about">我是About组件</h3>
				<input
					onClick={() => {
						return this.setState({ login: false });
					}}
					type="button"
					id=""
					name=""
					value="登出，跳转到首页"
					placeholder=""
				/>
				{!this.state.login && <Redirect to="/" />}
				<p>this.props.location.pathname => {this.props.location.pathname}</p>
			</div>
		);
	}
}

export default About;
