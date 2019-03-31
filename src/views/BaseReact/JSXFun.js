import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const MyMsg = function(props) {
	return <p>我是mymsg子组件</p>;
};

const Component = {
	Msg: MyMsg,
	Dialog: function(props) {
		return <div>我是Dialog子组件****{props.yy}</div>;
	}
};

class JSXFun extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			kk: 'jsxfun'
		};
	}

	render() {
		return (
			<div>
				<h2>jsx高级语法</h2>
				我是stateLiftingParent父组件中的内容:{this.props.stateLiftingParent}==== 打印不出来父组件中的内容
				<h2>
					组件里面再嵌套组件，查看 <Link to="/app/reactpractise/stateLifting">页面展示效果</Link>
				</h2>
				{this.state.kk}
				<hr />
				<h3>我是MyMsg组件</h3>
				<MyMsg />
				<hr />
				<h3>我是Component.Msg组件</h3>
				<Component.Msg />
				<hr />
				<h3>我是Component.Dialog组件</h3>
				<Component.Dialog yy={this.state.kk} />
			</div>
		);
	}
}

JSXFun.propTypes = {};

export default JSXFun;
