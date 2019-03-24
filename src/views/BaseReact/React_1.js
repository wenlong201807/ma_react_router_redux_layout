import React from 'react';
import ClassDefine from './class_define';
import JSXDemo from './JSXDemos';
import PropsDemo from './PropsDemo';
import ReactLift from './ReactLift';

class React_1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowLife: true
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState(
				(preState) => {
					console.log(preState);
					return {
						// isShowLife: !preState.isShowLife
						isShowLife: true
					};
				},
				() => {
					console.log(this.state.isShowLife);
				}
			);
		}, 1000);
	}

	render() {
		return (
			<div>
				{/* 函数组件 */}
				<ClassDefine name="朱文龙666" />
				{/* 类组件 */}
				<JSXDemo />
				<PropsDemo kk="父组件传给子组件的属性，只能使用不能更改" />
				<p>
					this.state.isShowLife:`${this.state.isShowLife}`===={this.state.isShowLife ? 'true' : 'false'}
				</p>

				{this.state.isShowLife && <ReactLift reactlife="父组件传给子组件的this.state.isShowLife为真时我才显示" />}
			</div>
		);
	}
}

React_1.propTypes = {};

export default React_1;
