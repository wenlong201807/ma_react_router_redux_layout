import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './sty/ReactPractise.css';
import React_1 from './BaseReact/React_1';
import ReactLift from './BaseReact/ReactLift';
import Clock from './BaseReact/Clock';
import EventDemo from './BaseReact/EventDemo';
import NewsList from './BaseReact/NewsList';
import FromDemo from './BaseReact/FromDemo';
import FromMulDemo from './BaseReact/FromMulDemo';
import FromSub from './BaseReact/FromSub';
import Greeting from './BaseReact/Greeting';
import stateLifting from './BaseReact/stateLifting';
import Dialog from './BaseReact/Dialog';
import JSXFun from './BaseReact/JSXFun';

class ReactPractise extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	backHomePage = () => {
		this.props.history.push('/');
	};

	render() {
		let { match } = this.props;
		console.log(match);
		return (
			<div>
				<div className="react_practise_menu">
					<h2>基础练习入口</h2>
					<div>
						<Link to={`${match.path}/react_1`}>React_1</Link> <span>&nbsp;&nbsp;</span>
						<Link to={`${match.path}/react_life`}>ReactLift</Link> <span>&nbsp;&nbsp;</span>
						<Link to={`${match.path}/clock`}>Clock</Link> <span>&nbsp;&nbsp;</span>
						<Link to={`${match.path}/eventDemo`}>EventDemo</Link> <span>&nbsp;&nbsp;</span>
						<Link to={`${match.path}/newslist`}>NewsList</Link> <span>&nbsp;&nbsp;</span>
						<Link to={`${match.path}/fromDemo`}>FromDemo</Link> <span>&nbsp;&nbsp;</span>
						<Link to={`${match.path}/fromMulDemo`}>FromMulDemo</Link> <span>&nbsp;&nbsp;</span>
						<Link to={`${match.path}/FromSub`}>FromSub</Link> <span>&nbsp;&nbsp;</span> <hr />
						<Link to={`${match.path}/Greeting`}>Greeting</Link> <span>&nbsp;&nbsp;</span>
						<Link to={`${match.path}/stateLifting`}>stateLifting</Link> <span>&nbsp;&nbsp;</span>
						<Link to={`${match.path}/Dialog`}>Dialog</Link> <span>&nbsp;&nbsp;</span>
						<Link to={`${match.path}/JSXFun`}>JSXFun</Link> <span>&nbsp;&nbsp;</span>
						<hr />
					</div>
				</div>

				<div className="react_practise_contain">
					<Switch>
						<Route path={`${match.path}`} exact render={() => <Redirect to={`${match.path}/react_1`} />} />
						<Route path={`${match.path}/react_1`} component={React_1} />
						<Route path={`${match.path}/react_life`} component={ReactLift} />
						<Route path={`${match.path}/clock`} component={Clock} />
						<Route path={`${match.path}/eventDemo`} component={EventDemo} />
						<Route path={`${match.path}/newslist`} component={NewsList} />
						<Route path={`${match.path}/fromDemo`} component={FromDemo} />
						<Route path={`${match.path}/fromMulDemo`} component={FromMulDemo} />
						<Route path={`${match.path}/FromSub`} component={FromSub} />

						<Route path={`${match.path}/Greeting`} component={Greeting} />
						<Route path={`${match.path}/stateLifting`} component={stateLifting} />
						<Route path={`${match.path}/Dialog`} component={Dialog} />
						<Route path={`${match.path}/JSXFun`} component={JSXFun} />

						<Route
							render={() => {
								return (
									<div className="mygod">
										<h3>没有您所查询的页面。</h3>
										<button onClick={this.backHomePage} className="button is-danger">
											返回首页
										</button>
									</div>
								);
							}}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

ReactPractise.propTypes = {};

export default ReactPractise;
