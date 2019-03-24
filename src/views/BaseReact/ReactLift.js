// import React, { Component, PropTypes } from 'react'
import React, { Component } from 'react';

class ReactLift extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			name: '朱文龙'
		};
	}

	componentWillMount() {
		// 组件将要被挂在到页面上，时间结束之后，执行render
		console.log('componentWillMount');
	}

	componentDidMount() {
		// 组件已经被挂在页面上，此时可以访问页面上的dom元素
		// 此方法用的非常多，一般用于获取后台数据
		console.log('componentDidMount');
	}

	componentWillReceiveProps(nextProps) {
		// 父组件修改当前组件的属性的时候，会触发此方法执行
		console.log('componentWillReceiveProps', nextProps);
	}

	// shouldComponentUpdate(nextProps, nextState) {
	//   // 一般走默认的，不做处理
	// 	console.log('shouldComponentUpdate', nextProps, nextState);
	// 	return true;
	// }

	componentWillUpdate(nextProps, nextState) {
		// 组件将会被更新（更新之前执行）
		console.log('componentWillUpdate', nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		// 组件更新之后执行
		console.log('componentDidUpdate', prevProps, prevState);
	}

	componentWillUnmount() {
		// 销毁组件时执行
		console.log('componentWillUnmount');
	}

	render() {
		return (
			<div>
				<h2>生命周期</h2>
				<p>this.props.reactlife:{this.props.reactlife}</p>
			</div>
		);
	}
}

export default ReactLift;
