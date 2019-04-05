import React from 'react';
// import store from './store';
import store from './store';
import { NumActionCreators } from './actions/NumAction';
// import PropTypes from 'prop-types';

class Count extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Num: store.getState().Num,
			replaceNum: store.getState().Num
		};

		this.state.unsubscribe = store.subscribe(() => {
			this.setState(() => {
				return {
					Num: store.getState().Num,
					replaceNum: store.getState().Num
				};
			});
		});
	}

	componentWillUnmount() {
		this.state.unsubscribe();
	}

	addNum = () => {
		store.dispatch(NumActionCreators.AddActionCreator(1));
	};
	minusNum = () => {
		store.dispatch(NumActionCreators.MinusActionCreator(1));
	};
	replaceNum = () => {
		store.dispatch(NumActionCreators.ReplaceActionCreator(this.state.replaceNum));
	};
	chengeInput = (e) => {
		console.log(e.target.value);
		this.setState({
			replaceNum: e.target.value
		});
	};

	render() {
		return (
			<div>
				<h2>redux_count</h2>
				<h4>store中的this.state.Num数据是(初始化默认值是0):{this.state.Num}</h4>
				<hr />
				<button onClick={this.addNum}>+1</button>
				<button onClick={this.minusNum}>-1</button>
				<p>
					<input type="Number" onChange={this.chengeInput} />
					<button onClick={this.replaceNum}>替换原有的值为{this.state.replaceNum}</button>
				</p>
			</div>
		);
	}
}

Count.propTypes = {};

export default Count;
