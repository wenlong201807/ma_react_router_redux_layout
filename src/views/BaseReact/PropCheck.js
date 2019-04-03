import React from 'react';
import PropTypes from 'prop-types';

class PropCheck extends React.Component {
	static propTypes = {
		kname: PropTypes.string,
		tid: PropTypes.number,
		children: PropTypes.element.isRequired
	};
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h3>我是PropCheck函数</h3>
				<p>父组件的this.props.kname内容：{this.props.kname}</p>
				<p>父组件的this.props.tid内容：{this.props.tid}</p>
				<p>父组件的this.props.children内容：{this.props.children}</p>
			</div>
		);
	}
}

// PropCheck.propTypes = {
// 	kname: PropTypes.string,
// 	tid: PropTypes.number,
// 	children: PropTypes.element.isRequired
// };

export default PropCheck;
