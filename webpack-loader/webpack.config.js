const path=require("path");
const htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
	entry:{
		main:"./src/app.js"
	},
	output:{
		path:path.resolve("./dist"),
		filename:"js/[name].bundle.js"
	},
	module:{
     loaders:[{
     	test:/\.js$/,
     	loader:"babel-loader",
     	query:{
     		presets:['env']
     	}
     }]
	},
	plugins:[
	   new htmlWebpackPlugin({
	   	filename:"index.html",
	   	template:"index.html",
	   	inject:"body",
	   	chunks:["main"]
	   })
	]
}
