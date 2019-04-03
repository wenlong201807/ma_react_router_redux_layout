import React from 'react';
// import PropTypes from 'prop-types';

class ComponentName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h3>子组件</h3>
				<input
					ref={this.props.parentRefFun}
					type="text"
					value="我是默认值"
					id=""
					name=""
					placeholder=""
					onChange={() => {}}
				/>
			</div>
		);
	}
}

ComponentName.propTypes = {};

export default ComponentName;
