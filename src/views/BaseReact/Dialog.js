import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class Dialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Link to="/app/reactpractise/stateLifting">我的内容封装到了 stateLifting </Link>
				<h2>封装对话框</h2>
				<div className="dialog">
					<div className="dialog-hd">{this.props.title}</div>
					<div className="dialog-bd">{this.props.children}</div>
					<div className="dialog-footer">{this.props.footer}</div>
				</div>
			</div>
		);
	}
}

Dialog.propTypes = {};

export default Dialog;
