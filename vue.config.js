module.exports = {
  devServer : {
    proxy:{
      '/article':{
        target:'http://localhost:7001',
        ws:true,// 允许websocket服务
        changeOrigin:true,// 开启虚拟服务器，并且让这个虚拟服务器请求带服务器
      }
    }
  }
}