import React from 'react';
// import PropTypes from 'prop-types';

function UserGreeting(props) {
	return (
		<div>
			<p>欢迎:{props.UserName}</p>
		</div>
	);
}

function GuestGreeting(props) {
	return (
		<div>
			<p>请登录！</p>
		</div>
	);
}

class Greeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false
		};
	}

	changeCom = (e) => {
		this.setState((preState) => {
			return {
				isLogin: !preState.isLogin
			};
		});
	};

	render() {
		let greeting = <GuestGreeting />;
		if (this.state.isLogin) {
			greeting = <UserGreeting UserName="aicoder.com" />;
		}
		return (
			<div>
				<button onClick={this.changeCom}>切换组件渲染</button>

				<h3>条件渲染机制</h3>
				<hr />

				{greeting}
				<hr />
				<h3>通过三元运算符实现条件渲染，动态切换不同组件</h3>
				{this.state.isLogin ? <UserGreeting UserName="aicoder.com" /> : <GuestGreeting />}

				<hr />
				<h3>通过短路运算符，动态切换不同组件</h3>
				{this.state.isLogin && <UserGreeting UserName="aicoder.com" />}
				{this.state.isLogin || <GuestGreeting />}
			</div>
		);
	}
}

// Greeting.propTypes = {};

export default Greeting;
