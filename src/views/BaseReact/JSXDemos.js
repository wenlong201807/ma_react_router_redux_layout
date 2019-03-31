import React from 'react';
// import PropTypes from 'prop-types';

const date = Date.now();
const pId = 'aicoder';
const num = 9;
const standNum = 66;
const dElement = '<p>防止注入方式</p>';
// const arr = [ <div>我是第一个div标签</div>, <div>我是第二个div标签</div>, '<div>我是第三个个div字符串</div>' ];
// const arrCity = [ '北京', '上海', '天津', '新加坡', '深圳', '杭州' ];
const element = (
	<div>
		<span>
			我是来自江西的小伙，是老马大神的忠实粉丝 <a href="https://www.aicoder.com">aicoder.com</a>
		</span>
	</div>
);

class JSXDemo extends React.Component {
	getDay(num) {
		return <div>周 {parseInt(num % 7)}</div>;
	}
	render() {
		return (
			<div>
				<h3 id={pId}>基础语法jsx练习（1、标签内使用）</h3>
				<p>当前时间是:{date}（2、标签中使用）</p>
				<div className="article">{element}</div>
				<p>
					2.1、标签中方法调用：
					{/* {this.getDay(date)} */}
				</p>
				2.2、js语法再标签中{}内使用
				<p>{num > standNum ? `${num}比${standNum}大` : `${num}太小啦，请填写大于${standNum}的数字`}</p>
				3、防止注入方式
				<p>{dElement}</p>
				{/* <p dangerouslySetInnerHTML={dElement} /> */}
				<hr />
				{/* <div>{arr}</div> */}
				<div>
					所有的城市
					{/* {arrCity.map((item, index) => {
						return (
							<ul key={item}>
								<li>{item}</li>
							</ul>
						);
					})} */}
					<ul />
				</div>
			</div>
		);
	}
}

JSXDemo.propTypes = {};

export default JSXDemo;
