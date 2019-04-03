import React from 'react';
// import PropTypes from 'prop-types';
import CustomInput from './CustomInput';

class RefTrans extends React.Component {
	constructor(props) {
		super(props);
		this.textInput = null;
		this.state = {};
	}

	btnHandle = (e) => {
		console.log(e.target.value);
		this.textInput.focus();
	};

	render() {
		return (
			<div>
				<h3>父组件中的按钮控制子组件的元素</h3>
				<button onClick={this.btnHandle}>让子组件的文本框获得焦点</button>
				<CustomInput parentRefFun={(element) => (this.textInput = element)} />
			</div>
		);
	}
}

RefTrans.propTypes = {};

export default RefTrans;
