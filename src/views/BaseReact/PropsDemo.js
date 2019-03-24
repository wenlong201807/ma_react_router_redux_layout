import React from 'react';
// import PropTypes from 'prop-types';

class ComponentName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0,
			phone: 18479783236
		};
	}

	// 组件渲染到页面之后，每个1s中修改一下页面中的num ++
	componentDidMount() {
		setInterval(() => {
			// 如果是直接修改，那么就用下面的这种方式
			// this.setState({num:1})
			// this.setState({num:1+this.state.num})

			// 如果需要依赖之前的状态做相关计算，需要使用下面这种方式进行修改状态。
			this.setState((preState) => {
				return {
					num: preState.num + 1
				};
			});
		}, 6000);
	}

	// componentWillUpdate() {
	// 	console.log('componentWillUpdate');
	// }

	// componentDidUpdate() {
	// 	console.log('componentDidUpdate');
	// }

	render() {
		return (
			<div>
				<p>当前组件的属性：this.props.kk ----{this.props.kk}</p>
				<p>this.state.num ---{this.state.num}</p>
				<p>this.state.phone ---{this.state.phone}</p>
			</div>
		);
	}
}

ComponentName.propTypes = {};

export default ComponentName;
