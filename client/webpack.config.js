const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// * TODO: Add and configure workbox plugins for a service worker and manifest file.
// * Add CSS loaders and babel to webpack.

module.exports = () => {
	return {
		mode: 'development',
		entry: {
			main: './src/js/index.js',
			install: './src/js/install.js',
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			// Plugin to generate the HTML file for the app
			new HtmlWebpackPlugin({
				template: './index.html',
			}),
			new WebpackPwaManifest({
				// Plugin to generate the PWA manifest file
				name: 'JATE',
				short_name: 'JATE',
				description: 'Just Another Text Editor',
				display: 'standalone',
				background_color: '#1e1e1e',
				theme_color: '#1e1e1e',
				start_url: '/',
				publicPath: '/',
				fingerprints: false,
				inject: true,
				icons: [
					{
						src: path.resolve('src/images/logo.png'),
						sizes: [96, 128, 192, 256, 384, 512],
						destination: path.join('assets', 'icons'),
					},
				],
			}),
			// Plugin to inject the service worker into the bundle
			new InjectManifest({
				swSrc: './src-sw.js',
				swDest: 'service-worker.js',
			}),
		],

		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: [
								'@babel/plugin-proposal-object-rest-spread',
								'@babel/transform-runtime',
							],
						},
					},
				},
			],
		},
	};
};