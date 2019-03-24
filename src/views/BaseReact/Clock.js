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
			</div>
		);
	}
}

// Clock.propTypes = {};

export default Clock;
