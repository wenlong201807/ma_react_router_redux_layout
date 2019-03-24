import React from 'react';
// import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Empty from './views/Empty';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	checkUserState = () => {
		console.log('66', sessionStorage.getItem('APP_LOGIN_USER'));
		// 判断用户是否已经登录
		if (sessionStorage.getItem('APP_LOGIN_USER')) {
			console.log('登录成功之后');
			return true;
		}
		console.log('5555');
		return false;
	};

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact render={() => <Redirect to="/app" />} />
					<Route path="/login" component={Login} />
					<Route
						path="/app"
						render={(props) => {
							// 校验用户是否已经登录
							if (this.checkUserState()) {
								return <Home {...props} />;
							}
							sessionStorage.setItem('APP_LAST_URL', JSON.stringify(props.location));
							return <Redirect to="/login" />;
						}}
					/>
					<Route
						render={(props) => {
							// 校验用户是否已经登录
							if (this.checkUserState()) {
								return <Empty {...props} />;
							}
							sessionStorage.setItem('APP_LAST_URL', JSON.stringify(props.location));
							return <Redirect to="/login" />;
						}}
					/>
				</Switch>
			</Router>
		);
	}
}

// App.propTypes = {};

export default App;
