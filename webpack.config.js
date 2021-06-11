const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeENV = process.env.NODE_ENV;

module.exports = [
	{
		devtool: false,
		mode: modeENV,
		entry: "./src/index.js",
		output: {
			filename: "main.js",
			path: path.resolve(__dirname, "dist"),
			clean: true,
		},
		module: {
			rules: [{
					test: /\.(jpe?g|png|gif|svg|webp)$/i,
					type: "asset",
					generator: {
						filename: "media/images/[name][ext]"
					},
				},
				{
					test: /\.ttf$/i,
					type: "asset",
					generator: {
						filename: "media/fonts/[name][ext]"
					},
				},
				{
					test: /\.scss$/i,
					use: [
						modeENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader",
					],
				},
				{
					test: /\.pug$/i,
					use: ["html-loader", "pug-html-loader"],
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({ filename: "style.css" }),
			new HtmlWebpackPlugin({
				template: "./src/index.pug",
				filename: "./index.html",
			}),
		],
	},
]