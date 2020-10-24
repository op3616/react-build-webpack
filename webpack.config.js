const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const VENDOR_LISTS = ['antd', 'react', 'react-dom'];

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LISTS,
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 5000,
		open: true,
		proxy: {
			'/api': 'http://localhost:5000',
			'/es': {
				target: 'http://localhost:5000',
				pathRewrite: { '^/es': '' },
			},
		},
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: '/node_modules/',
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/i,
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack - ReactJS',
			template: './public/index.html',
		}),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				'entry-bundle': {
					test: /.../, // <-- use the test property to specify which deps go here
					chunks: 'all',
					name: 'entry-bundle',
					/** Ignore minimum size, minimum chunks and maximum requests and always create chunks for this cache group */
					enforce: true,
				},
			},
		},
	},
	devtool: 'inline-source-map', // Kiểm tra chính xác dòng bị xảy ra lỗi
};
