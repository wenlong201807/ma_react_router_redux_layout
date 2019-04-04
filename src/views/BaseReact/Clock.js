import React from 'react';
// import PropTypes from 'prop-types';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			now: new Date().toLocaleTimeString(),
			timer: null
		};
	}

	componentDidMount() {
		this.setState({
			timer: setInterval(() => {
				this.setState({
					now: new Date().toLocaleTimeString()
				});
			}, 1000)
		});
	}

	componentWillUnmount() {
		if (this.state.timer) {
			clearInterval(this.state.timer);
		}
	}

	render() {
		return (
			<div>
				<h3>自动计时的始终</h3>
				<p>当前时间是:{this.state.now}</p>
				{/* 只能用在html页面 */}
				<img src="%PUBLIC_URL%/favicon.ico" alt="图片不显示时。我显示" />
				<img src="/favicon.ico" alt="" />
			</div>
		);
	}
}

// Clock.propTypes = {};

export default Clock;
