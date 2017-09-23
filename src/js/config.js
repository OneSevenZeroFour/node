//模块化开发配置文件
require.config({
    paths:{
        'jquery':'/lib/jquery-3.2.1',
        'jqueryui':'/lib/jquery-ui-1.12.1/jquery-ui',
        'common':'./common',
        'base':'./base'
    },
    shim:{
        //设置插件之间的依赖
        jqueryui:['jquery'],
        base:['common']
    }
})