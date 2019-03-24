import React from 'react';
// import { Prompt, Link, Route, Switch } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Product from './Product';
import Case from './Case';
import About from './About';
import ReactPractise from './ReactPractise';
import './sty/Home.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	logout = () => {
		// 清除sessionStorage里面的用户登录的信息
		sessionStorage.clear();
		this.props.history.push('/login');
	};
	render() {
		let { match } = this.props;
		console.log(this.props);
		return (
			<div className="line-flex-wrap">
				{/* <h3 className="about">
					<div className="child">sdffg</div>
				</h3> */}

				{/* <Prompt message="您是否需要离开Home页面？" /> */}
				{/* <Prompt  content
					message={(location) => {
						console.log('location', location);
						return `您是否要跳转到404页面,您当前地址是:,${this.props.history.location.pathname}`;
					}}
				/> */}

				<nav className="head">
					<Link to="/app">
						<img src={Logo} alt="没图我显示" width="130" title="有利于SEO优化" />
					</Link>
					<Link to="/app">首页</Link> <span>&nbsp;</span>
					<Link to={`${match.path}/product`}>产品</Link> <span>&nbsp;</span>
					<Link to={`${match.path}/case`}>成功案例</Link> <span>&nbsp;</span>
					<Link to={`${match.path}/about`}>关于</Link> <span>&nbsp;</span>
					<Link to={`${match.path}/reactpractise`}>react基础练习</Link>
					<button onClick={this.logout} className="button is-danger">
						登出
					</button>
				</nav>
				<div className="content">
					<div className="content_menu">
						<li>
							<Link to="/app">首页</Link>
						</li>
						<li>
							<Link to={`${match.path}/product`}>产品</Link>
						</li>
						<li>
							<Link to={`${match.path}/case`}>成功案例</Link>
						</li>
						<li>
							<Link to={`${match.path}/about`}>关于</Link>
						</li>
						<li>
							<Link to={`${match.path}/reactpractise`}>react基础练习</Link>
						</li>
					</div>
					<div className="content_main">
						<Switch>
							{/* <Route path={`${match.path}/app`} component={Home} /> */}
							<Route path={`${match.path}/product`} component={Product} />
							<Route path={`${match.path}/case`} component={Case} />
							<Route path={`${match.path}/about`} component={About} />
							<Route path={`${match.path}/reactpractise`} component={ReactPractise} />

							<Route
								render={() => {
									return (
										<div className="mygod">
											<h3>欢迎您的访问,这是朱文龙专属定制页面</h3>
											<p>感谢您的访问</p>
										</div>
									);
								}}
							/>
						</Switch>
					</div>
				</div>
				<div className="foot">朱文龙潜心打造，历经五年之久，横空问世之react-router页面</div>
			</div>
		);
	}
}

export default Home;
