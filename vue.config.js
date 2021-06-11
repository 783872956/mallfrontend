module.exports = {
    devServer: {
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: 8082,
        // 设置代理
        proxy: {
            '/shoppingmall/api': {
                // 目标 API 地址
                target: 'http://localhost:8088',
                changeOrigin: true,
                ws: false,
            }
        }
    }
};