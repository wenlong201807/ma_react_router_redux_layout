import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Switch, NavLink } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Product from './views/Product';
import Empty from './views/Empty';

// const getConfirmation = (message, callback) => {
// 	console.log('!!!');
// 	const allowTransition = window.confirm(message);
// 	callback(allowTransition);
// };

class App extends Component {
	render() {
		return (
			<div className="App">
				<h2>朱文龙_路由练习</h2>
				<hr />

				<hr />
				{/* <Router basename="wenlong" getUserConfirmation={getConfirmation}> */}
				{/* <Router hashType="hashbang" basename="wenlong"> */}
				<Router hashType="noslash" basename="wenlong">
					<div>
						<Link to="/">首页</Link> <span>***</span>
						<Link to="/about">关于</Link> <span>***</span>
						<Link to="/product">产品</Link> <span>***</span>
						<NavLink to="/product" activeClassName="selected">
							产品NavLink
						</NavLink>
						<span>***</span>
						<Link
							to={{
								pathname: '/product',
								search: '?key/wenlong',
								hash: '#userHeader',
								state: { loginName: 'aicoder.com' }
							}}>
							产品666
						</Link>
						<span>***</span>
						<hr />
						<Switch>
							<Route path="/" exact component={Home} />
							{/* 第一种的渲染方式 */}
							{/* <Route path="/about" component={About} /> */}
							{/* 第二种的渲染方式 */}
							<Route
								path="/about"
								render={(props) => {
									return <About {...props} />;
								}}
							/>
							{/* <Route path="/product" component={Product} /> */}
							{/* 第三种的渲染方式 */}
							<Route
								path="/product"
								children={(props) => {
									console.log(props);
									// return props.match ? <Product {...props} /> : <p>没有Product组件匹配</p>;
									return props.match ? <Product {...props} /> : null;
								}}
							/>
							<Route component={Empty} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
