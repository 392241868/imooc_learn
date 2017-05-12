var path=require('path');

module.exports={
	entry:"./app/main.js",
	output:{
		path:path.resolve('./public/'),
		filename:'bundle.js'
	},
	 devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
    } ,
    
	//output:{
		//path:path.resolve('./public/'),
		//filename:'bundle.js'
	//}
}