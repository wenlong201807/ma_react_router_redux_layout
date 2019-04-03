import React from 'react';
// import PropTypes from 'prop-types';

class PropChild extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h3>我是子函数</h3>
				<button
					onClick={() => {
						console.log(this.props.children);
					}}>
					获取孩子的内容
				</button>
				获取孩子中第一个组件中的state中的this.props.children[0]._self.state.kk内容： {this.props.children[0]._self.state.kk}
				<hr /> 获取孩子中第一个组件中的state中的this.props.children[1]内容： {this.props.children[1]}
				<h3>以下内容是不会被显示的,分别是 true 、false 、null 、undefined</h3>
				{true}
				{false}
				{null}
				{undefined}
			</div>
		);
	}
}

PropChild.propTypes = {};

export default PropChild;
