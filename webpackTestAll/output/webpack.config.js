
const path =require('path');
let base = {
	  index:'./index.js?t=2',
   	  index1:'./index1.js'
};

//webpack2 提供了多种配置方案

module.exports = {
  entry:base,
  output: {
    //导出目录
    path: path.resolve(__dirname, 'uuudist'), //绝对路径
    //异步加载，没有这句异步加载会报错
    publicPath: "/output/uuudist/", // 相对于当前开启服务器下的路径
    //一般公司写成CDN: https://resource.xxxx.com/output/uuudist/

  	//包规范格式
  	libraryTarget:'umd',
  	library: "MyLibrary", 
    //文件名
    chunkFilename:'[chunkhash]_[name].js', //用来异步加载
    //hash位数，一般16位
  	hashDigestLength:3,
    //导出文件 
    //hash ==> webpack编译过程，每编译一次所有编译文件hash值一样
    // chunkhash => webpack对每个文件的hash，用来处理缓存
    filename: '_[name][chunkhash].js'  //name为entry的key
    //也可以不要hashDigestLength，直接写'_[name][chunkhash:3].js'
  }
};
