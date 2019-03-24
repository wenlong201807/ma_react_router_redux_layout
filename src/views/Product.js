import React from 'react';
import { Link, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log(this.props);
		console.log('this.props.match.path  =>  ', this.props.match.path);
		console.log('this.props.location  =>  ', this.props.location);
		console.log('this.props.location.state  =>  ', this.props.location.state);
		// console.log('this.props.location.state.loginName  =>  ', this.props.location.state.loginName);
		console.log('this.props.location.search  =>  ', this.props.location.search);
		const { match } = this.props;
		console.log(match);
		return (
			<div>
				<h3>我是Product组件</h3>
				<p>this.props.location.pathname => {this.props.location.pathname}</p>
				<h4>产品页面有三个产品子组件</h4>
				{/* <h4>localtion:{this.props.location.state.loginName}</h4> */}
				<hr />
				<Link to="/product/1">产品1</Link> <span>***</span>
				<Link to="/product/2">产品2</Link> <span>***</span>
				<Link to="/product/3">产品3</Link> <span>***</span>
				<Link to={`${this.props.match.path}/4`}>产品4</Link> <span>***</span>
				<Link to={`${match.path}/5`}>产品5</Link> <span>***</span>
				<hr />
				<Route path="/product/:id" component={ProductDetail} />
				<hr />
				<button
					onClick={() => {
						this.props.history.push('/about');
					}}>
					跳转到about页面
				</button>
				<span>***</span>
				<button
					onClick={() => {
						this.props.history.go(-1);
					}}>
					回退到上一个页面
				</button>
			</div>
		);
	}
}

export default Product;
