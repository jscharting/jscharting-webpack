const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.ts'
	},
	target: 'web',
	devtool: 'none',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					configFile: 'src/tsconfig.json'
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		],

	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new CopyPlugin([
			{from: 'node_modules/jscharting/dist/', to: 'jsc/'}
		])
	],
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist')
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: 'commons',
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
	},
	devServer: {
		compress: false,
		contentBase: [
			path.join(__dirname, './')
		],
		stats: {
			all: false,
			errors: true,
			timings: true,
			warnings: true
		},
		open: false,
		port: 5051,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}
};
