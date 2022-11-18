module.exports = {
	pages: {
		index: {
			entry: 'src/main.js'
		}
	},
	lintOnSave: false,
	// 方式一
	// devServer: {
	// 	proxy: 'http://localhost:5002'
	// }
	// 方式二devServer: {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:5002',
				pathRewrite: {
					'^/api': ''
				},
				ws: true,
				changeOrigin: true
			},
			'/foo': {
				target: 'http://localhost:5001',
				pathRewrite: {
					'^/foo': ''
				},
				ws: true,
				changeOrigin: true
			}
		}
	}
}
