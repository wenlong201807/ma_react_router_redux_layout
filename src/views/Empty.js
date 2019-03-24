import React from 'react';
// import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';

class Empyt extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h4>我是404页面</h4>
				<button
					onClick={() => {
						this.props.history.push('/');
					}}>
					跳转到首页
				</button>
				<p>当前地址是：{this.props.history.location.pathname}</p>
				<Prompt
					when={true}
					message={(location) => {
						// return `您是否要跳转到404页面,您当前地址是:,${this.props.history.location.pathname}`;
						return `您是否要跳转到404页面,您当前地址是:,${location.pathname}`;
					}}
				/>
			</div>
		);
	}
}

// Empyt.propTypes = {};

export default Empyt;
