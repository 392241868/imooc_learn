const path=require("path");
const htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
	entry:{
		main:"./src/script/main.js",
		a:"./src/script/a.js",
		b:"./src/script/b.js",
		c:"./src/script/c.js",
	},
	output:{
		path:path.resolve("./dist"),
		filename:"js/[name]-[chunkhash]bundle.js",
		publicPath:'http://stat.skysrt.com'//线上地址
	},
	plugins:[
	   new htmlWebpackPlugin({
	   	filename:"a.html",
	   	template:"index.html",
	   	inject:"body",
	   	title:"this is a html",
	   	chunks:["main",'b']
	   	// minify:{
	   	// 	removeComments:true,
	   	// 	collapseWhitespace:true
	   	// }//压缩代码
	   }),
	   new htmlWebpackPlugin({
	   		filename:"b.html",
	   	template:"index.html",
	   inject:"body",
	   	title:"this is b html",
	   	chunks:["main","b"]
	   }),
	   new htmlWebpackPlugin({
	   		filename:"c.html",
	   	template:"index.html",
	   	inject:"body",
	   	title:"this is c html",
	    	chunks:["main","c"]	
	   })
	]
}
