import React from 'react';
// import PropTypes from 'prop-types';

class EventDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			simple: '简单按钮事件',
			btnHandMsg: '函数调用方式',
			btnHandMsgBind: 'this绑定延迟方式',
			btnHandMsgBind2: '直接在标签中绑定',
			btnHandMsgBindParams: '点击传参'
		};

		this.btnHanderBind = this.btnHanderBind.bind(this);
	}

	btnHander = (e) => {
		console.log('函数调用方式');
		let newVal = e.target.value;
		console.log(newVal);
		this.setState((preState) => {
			return {
				btnHandMsg: preState.btnHandMsg + ' 666'
			};
		});
	};

	btnHanderBind() {
		console.log('让btnHanderBind 对象指向了一个延迟绑定了当前对象实例的函数');
		this.setState((preState) => {
			return {
				btnHandMsgBind: '绑定this的方式' + preState.btnHandMsgBind
			};
		});
	}

	btnHanderBind2() {
		this.setState((preState) => {
			return {
				btnHandMsgBind2: '看我照样可以，性能没有那么好' + preState.btnHandMsgBind
			};
		});
	}

	btnHanderBindParams(a, b, e) {
		console.log(a, b, e);
		this.setState((preState) => {
			return {
				btnHandMsgBindParams: a + b + preState.btnHandMsgBindParams
			};
		});
	}

	render() {
		return (
			<div>
				<h2>事件案例</h2>
				<button onClick={(e) => this.setState({ simple: 'jsx混搭写法,不利于后期维护' })}>{this.state.simple}</button>{' '}
				<br />
				<button onClick={this.btnHander}>{this.state.btnHandMsg}</button> <br />
				<button onClick={this.btnHanderBind}>{this.state.btnHandMsgBind}</button> <br />
				<button onClick={this.btnHanderBind2.bind(this)}>{this.state.btnHandMsgBind2}</button> <br />
				<button onClick={this.btnHanderBindParams.bind(this, '我是参数1  ', '我是参数2  ')}>
					{this.state.btnHandMsgBindParams}
				</button>
				<br />
			</div>
		);
	}
}

EventDemo.propTypes = {};

export default EventDemo;
