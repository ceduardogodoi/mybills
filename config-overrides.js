const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
	webpack(config) {
		return {
			...config,
			resolve: {
				...config.resolve,
				plugins: [...config.resolve.plugins, new TsConfigPathsPlugin()]
			}
		}
	}
}
