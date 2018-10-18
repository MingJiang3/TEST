console.log('I am index')

//require.ensure(dependencies: String[], callback: function(require), chunkName: String)

//异步加载
require.ensure([],(require)=>{//第一参数为依赖，第二参数为动态加载的模块
	require('./index1.js')	  //第三参数是文件名
},'dynamic')