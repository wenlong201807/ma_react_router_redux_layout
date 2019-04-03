import React from 'react';
import PropTypes from 'prop-types';

class DefaultProp extends React.Component {
	static defaultProps = {
		kname: '朱文龙666'
	};

	static propTypes = {
		// kname: PropTypes.number
		kname: PropTypes.string
	};
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h3>我是DefaultProp函数</h3>
				<p>我是默认父组件的this.props.kname值：{this.props.kname}</p>
			</div>
		);
	}
}

export default DefaultProp;
