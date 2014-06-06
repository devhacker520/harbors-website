seajs.config({
    base:'/script/',
    // 别名配置
    alias: {
        'jquery':'/script/lib/jquery.js'
    },
    // 路径配置
    paths: {
        'lib':'/script/lib',
        'modules':'/script/{dir}'
    },

    map: [
        [ /^(.*?\/script\/(?:src|dist)\/.*?\/.*?\.js$)(?:.*)$/i, '$1?version=0322']
    ],

    // 变量配置,src为源码,dist为压缩码
    vars: {
//        'dir': 'src'
        'dir': 'dist'
    },
    // 调试模式，测试环境开启
    debug: false,
    // 文件编码
    charset: 'utf-8'
});