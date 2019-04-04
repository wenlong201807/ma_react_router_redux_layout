import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

class NewsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsList: []
		};

		this.initData = this.initData.bind(this);
		this.delNews = this.delNews.bind(this);
		this.addNews = this.addNews.bind(this);
	}

	componentDidMount() {
		this.initData();
	}

	initData() {
		// "proxy": "http://localhost:3003",
		// https://www.cnblogs.com/crazycode2/p/9757236.html(配置代理)
		// axios.get('http://localhost:3003/news').then((res) => {
		axios.get('/news').then((res) => {
			// http://localhost:3003/news
			this.setState({ newsList: res.data });
		});
	}

	delNews(id) {
		if (window.confirm('您是否真的要删除id为' + id + '的数据')) {
			axios.delete('http://localhost:3003/news/' + id).then(() => {
				this.initData();
			});
		}

		// 页面删除展示效果
		// this.setState((preState) => {
		// 	return {
		// 		newsList: preState.newsList.filter((item) => item.id !== id)
		// 	};
		// });
	}

	addNews() {
		let newId = new Date().getTime();
		alert('您确定要添加id为' + newId + '的数据吗?');
		let params = {
			id: newId,
			title: '我是新添的数据',
			isDel: false
		};
		axios.post('http://localhost:3003/news', params).then(() => {
			this.initData();
		});
	}

	render() {
		return (
			<div>
				<h2>新闻列表案例</h2>
				<button onClick={this.addNews}>添加</button>
				<table>
					<thead>
						<tr>
							<th>编号</th>
							<th>新闻标题</th>
							<th>编辑</th>
						</tr>
					</thead>
					<tbody>
						{this.state.newsList.map((item, index) => {
							return (
								<tr key={index}>
									<td>{item.id}</td>
									<td>{item.title}</td>
									<td>
										<button onClick={() => this.delNews(item.id)}>删除</button>
										&nbsp;
										<button>修改</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

NewsList.propTypes = {};

export default NewsList;
