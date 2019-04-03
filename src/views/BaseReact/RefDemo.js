import React from 'react';
// import PropTypes from 'prop-types';

class DefaultProp extends React.Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();

		this.state = {};
	}

	focusInput = (e) => {
		console.log(this.textInput.current);
		this.textInput.current.focus();
	};

	render() {
		return (
			<div>
				<h3>我的木的，父组件获取子组件中的dom</h3>
				<input
					type="text"
					ref={this.textInput}
					value=""
					onChange={() => {
						alert(22);
					}}
				/>
				<button onClick={this.focusInput}>获取文本框中的内容</button>
			</div>
		);
	}
}

export default DefaultProp;
