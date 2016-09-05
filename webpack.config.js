//获取webpack
var webpack=require("webpack");
//获取插件,提取css
var ExtractTextPlugin=require("extract-text-webpack-plugin");
//生出主页面
var HTMLWebpackPlugin=require("html-webpack-plugin");
//配置文件
module.exports={
	plugins:[
		new ExtractTextPlugin("bundle.css"),
		new HTMLWebpackPlugin({
			template:"./index.html"
		})
	],
	entry:{
		index:"./main.js"
	},
	output:{
		path:"dist",
		filename:"all.js"
	},
	module:{
		loaders:[
			{
				test : /\.css/,
				loader : ExtractTextPlugin.extract(["css"])
			},
			{
				test : /\.(jpg|png)/,
				loader : "file?name=imgs/[name].[ext]"
			},
			{
				test : /\.(ttf|wof)/,
				loader : "file?name=fonts/[name].[ext]"
			},
			{
				test: /\.html/,
				loader : "html"
			}
		]
	}
}
