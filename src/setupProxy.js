const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	//如何使用？？
	app.use(proxy('/news', { target: 'http://localhost:3003' }));
};
