import React from 'react';
// import PropTypes from 'prop-types';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	loginClick = () => {
		// 直接把用户校验完成之后的信息，加入到sessionStorage里去，然后再跳转首页
		sessionStorage.setItem('APP_LOGIN_USER', JSON.stringify({ Name: '朱文龙', pwd: 123 }));
		let app_last_url = JSON.parse(sessionStorage.getItem('APP_LAST_URL'));
		console.log(typeof app_last_url, app_last_url);
		if (app_last_url) {
			sessionStorage.removeItem('APP_LAST_URL');
			return this.props.history.push(app_last_url);
		}
		this.props.history.push('/app');
		console.log(this.props.history);
	};

	render() {
		return (
			<div>
				<h2>login页面</h2>
				<button className="button is-primary" onClick={this.loginClick}>
					登录
				</button>
			</div>
		);
	}
}

Login.propTypes = {};

export default Login;
