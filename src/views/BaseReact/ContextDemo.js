import React from 'react';
// import PropTypes from 'prop-types';
import LocalContext from '../Contextes/LocalContext';

const { Provider, Consumer } = LocalContext;

function Container(props) {
	console.log('container组件中的', props);
	return <Title />;
}

function Title(props) {
	console.log('title组件中的', props);
	return (
		<div>
			<h2>我是title组件，属于container的子组件，Contextdemo的孙组件</h2>
			<Consumer>
				{(context) => {
					return (
						<div>
							<h2>我是爷孙组件传值，在孙组件获取爷组件的内容</h2>
							{context.age} === {context.name}
						</div>
					);
				}}
			</Consumer>
		</div>
	);
}

class ContextDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			User: {
				age: 20,
				name: 'zhuwenlong'
			}
		};
	}

	btnHander = (e) => {
		console.log(e);
		this.setState(
			(preState) => {
				return {
					User: { ...preState.User, age: preState.User.age + 1 }
				};
			},
			() => {
				console.log('我是数据变化之后的内容', this.state.User);
			}
		);
	};

	render() {
		return (
			<div>
				<h2>爷孙组件之间直接传值</h2>
				<Provider value={this.state.User}>
					<Container />
				</Provider>
				<hr />
				<input onClick={this.btnHander} type="button" value={this.state.User.name} />
			</div>
		);
	}
}

ContextDemo.propTypes = {};

export default ContextDemo;
