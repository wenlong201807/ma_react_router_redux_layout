import React from 'react';
// import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<h4>产品match.params.id 的详情 {this.props.match.params.id}</h4>
				<h4>产品match.url 的详情 {this.props.match.url}</h4>
				<h4>产品match.path 的详情 {this.props.match.path}</h4>
			</div>
		);
	}
}

// ProductDetail.propTypes = {};

export default ProductDetail;
