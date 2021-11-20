module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',

    // vue-cli 配置代理服务器(方式一)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },

    // vue-cli 配置代理服务器(方式二 使用 path: options  多个键值对对象 )
    devServer: {
        proxy: {
            '/api': { //请求前缀
                target: 'http://localhost:5000',
                ws: true, //  用于支持websocked  默认值true
                pathRewrite: { '^/api': '' }, // 所有带有/api的请求 /api 都会被替换为空字符串
                changeOrigin: true,
                // 用于控制请求头的host值 （为false请求地址就是vue的端口号 为true就是 要访问服务器的端口号）默认值true
            },
            '/demo': { //请求前缀
                target: 'http://localhost:5001',
                ws: true, //  用于支持websocked  默认值true
                pathRewrite: { '^/demo': '' }, // 所有带有/demo /demo 都会被替换为空字符串
                changeOrigin: true,
                // 用于控制请求头的host值 （为false请求地址就是vue的端口号 为true就是 要访问服务器的端口号）默认值true
            },
        }
    }
}