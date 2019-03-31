import React from 'react';
// import PropTypes from 'prop-types';
import Dialog from './Dialog';
import JSXFun from './JSXFun';

function AddMsg(props) {
	return (
		<div>
			<h2>我是添加组件</h2>
			<button
				onClick={() => {
					props.AddNumParent(1);
				}}>
				添加消息+1操作：
			</button>
			{props.NumParent}
		</div>
	);
}

function DelMsg(props) {
	return (
		<div>
			<h2>我是减去组件</h2>
			<button
				onClick={() => {
					props.DelNumParent(1);
				}}>
				减去消息+1操作：
			</button>
			{props.NumParent}
		</div>
	);
}

class stateLifting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Num: 1
		};
	}
	AddNum = (num) => {
		this.setState((preState) => {
			return { Num: preState.Num + num };
		});
	};

	DelNum = (num) => {
		this.setState((preState) => {
			return { Num: preState.Num - num };
		});
	};

	render() {
		return (
			<div>
				<h2>状态提升</h2>
				{/* <button onClick={this.AddNum}>点击添加1</button> */}
				{/* 总消息条数:{this.state.Num} */}
				{/* <hr /> */}
				{/* <button onClick={this.DelNum}>点击减去1</button> */}
				我是父组件中的***** 总消息条数:{this.state.Num}
				<hr />
				<AddMsg NumParent={this.state.Num} AddNumParent={this.AddNum} />
				<DelMsg NumParent={this.state.Num} DelNumParent={this.DelNum} />
				<hr />
				<Dialog title="我是标题" footer="我是脚步">
					<h2>我是子组件中写的内容</h2>
					<p>这里很像vue中的slot插槽</p>
					<JSXFun stateLiftingParent={this.state.Num} />
				</Dialog>
			</div>
		);
	}
}

stateLifting.propTypes = {};

export default stateLifting;
