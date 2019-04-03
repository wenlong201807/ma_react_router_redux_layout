import React from 'react';
// import PropTypes from 'prop-types';
import '../sty/DomVsJSX.css';
import '../sty/DomVsJSX.scss';

class DomVsJSX extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: true
		};
	}
	handle = (e) => {
		console.log(e.target.value);
		this.setState(
			(preState) => {
				return {
					isChecked: !preState.isChecked
				};
			},
			() => {
				console.log(this.state.isChecked);
			}
		);
	};

	render() {
		return (
			<div>
				<h2 className="aa">对比dom和jsx之间的差异性</h2>
				<input type="checkbox" checked={this.state.isChecked} onChange={this.handle} />
				<p className={`zhuwenlong ${this.state.isChecked ? 'checked' : ''}`}>切换选中状态，显示不同颜色，选中时为红色</p>
				<label htmlFor="demo">点击我同样可以使文本框获取焦点</label>
				<input type="text" id="demo" />
				<p style={{ color: 'red', fontSize: '20px', backgroundColor: 'blue' }}>我是样式处理效果展示</p>
			</div>
		);
	}
}

DomVsJSX.propTypes = {};

export default DomVsJSX;
