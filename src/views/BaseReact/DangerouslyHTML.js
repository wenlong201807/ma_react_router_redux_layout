import React from 'react';
// import PropTypes from 'prop-types';

class DangerouslyHTML extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dom: `
      <div>我是模板字符串里面的内容</div>      
      `,
			domDanger: {
				__html: `
        <div>我是模板字符串里面的内容</div>         
        `
			}
		};
	}

	render() {
		return (
			<div>
				<h2>编码标签文本</h2>
				{this.state.dom}
				<hr />
				<p> 小面这一行 ===》 我是经过__html炒作之后的效果</p>
				<p dangerouslySetInnerHTML={this.state.domDanger} />
			</div>
		);
	}
}

DangerouslyHTML.propTypes = {};

export default DangerouslyHTML;
