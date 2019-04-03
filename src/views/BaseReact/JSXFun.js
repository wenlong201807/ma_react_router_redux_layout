import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import PropChild from './PropChild';
import PropCheck from './PropCheck';
import DefaultProp from './DefaultProp';
import RefDemo from './RefDemo';

const MyMsg = function(props) {
	console.log(props);
	return (
		<div>
			<p>我是mymsg子组件</p>
			<div>我是父组件传递过来的内容props.name：{props.name}</div>
		</div>
	);
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
			kk: 'jsxfun',
			objProps: {
				id: 'aicoder',
				name: '朱文龙',
				age: 18
			}
		};
	}

	render() {
		return (
			<div>
				<h2>jsx高级语法</h2>
				<RefDemo />
				<hr /> 我是stateLiftingParent父组件中的内容:{this.props.stateLiftingParent}==== 打印不出来父组件中的内容
				<h2>
					组件里面再嵌套组件，查看 <Link to="/app/reactpractise/stateLifting">页面展示效果</Link>
				</h2>
				{this.state.kk}
				<hr />
				<h3>我是MyMsg组件</h3>
				<MyMsg checked />
				<MyMsg checked="true" {...this.state.objProps} />
				<MyMsg checked={true} />
				<p
					onClick={() => {
						console.log(22);
					}}>
					点我查看控制台为22
				</p>
				<hr />
				<h3>我是Component.Msg组件</h3>
				<Component.Msg />
				<hr />
				<h3>我是Component.Dialog组件</h3>
				<Component.Dialog yy={this.state.kk} />
				<h3 {...this.state.objProps}>我是h3标签中的内容，自定义添加了好多个属性在标签中</h3>
				<PropChild>
					<Component.Msg />
					阿斯蒂芬
					<MyMsg checked="true" {...this.state.objProps} />
				</PropChild>
				<hr />
				<PropCheck tid={66} kname="朱文龙">
					<span>必须要有一个子代元素</span>
				</PropCheck>
				<DefaultProp />
			</div>
		);
	}
}

JSXFun.propTypes = {};

export default JSXFun;
