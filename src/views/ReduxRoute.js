import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import ReactTest from './Redux/reduxTest';
import Count from './Redux/Count';
import UserListCURD from './Redux/UserListCURD';
import AppCount from './Redux/AppCount';

class ComponentName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let { match } = this.props;
		return (
			<div>
				<h2>我是redux入口</h2>
				<div>
					<Link to={`${match.path}/ReactTest`}>ReactTest</Link> <span>&nbsp;&nbsp;</span>
					<Link to={`${match.path}/Count`}>Count(加减换)</Link> <span>&nbsp;&nbsp;</span>
					<Link to={`${match.path}/UserListCURD`}>UserListCURD</Link> <span>&nbsp;&nbsp;</span>
					<Link to={`${match.path}/AppCount`}>AppCount</Link> <span>&nbsp;&nbsp;</span>
					<hr />
				</div>
				<div className="react_practise_contain">
					<Switch>
						<Route
							path={`${match.path}`}
							exact
							render={() => <Redirect to={`${match.path}/ReactTest`} />}
						/>
						<Route path={`${match.path}/ReactTest`} component={ReactTest} />
						<Route path={`${match.path}/Count`} component={Count} />
						<Route path={`${match.path}/UserListCURD`} component={UserListCURD} />
						<Route path={`${match.path}/AppCount`} component={AppCount} />

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

ComponentName.propTypes = {};

export default ComponentName;
