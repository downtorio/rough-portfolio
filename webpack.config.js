var path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		app: "./app/scripts/app.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/temp-scripts"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				query: {
					/*presets: ['es2015']		/* update this part!! this is from outdated babel preset-env */
					'presets': [
						[
							"@babel/preset-env",
							{
								"useBuiltIns": "entry"
							}
						]
					]
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
};