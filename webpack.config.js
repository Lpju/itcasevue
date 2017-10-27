var htmlwp = require('html-webpack-plugin');
module.exports={
    entry:"./src/main.js",
    output:{
        path:__dirname+"/dist",
        filename:"bulid.js"
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(png|jpg|gif|ttf)/,
                loader:'url-loader?limit=20000'
            },
            // 现在webpack已升级到2.0和3.0版本支持es6语法了现在就不需要这个配置了
            // {
            //     test: /\.js$/,  // 将.js文件中的es6语法转成es5语法
            //     loader:'babel-loader',
            //     exclude:/node_modules/ // 排除node_modules文件夹下的js文件不用被转换
            // },
            {
                test: /.vue$/,  // 解析 .vue 组件页面文件
                loader:'vue-loader' 
            }
        ]
    },
    // 现在webpack已升级到2.0和3.0版本支持es6语法了现在就不需要这个配置了
    //  babel:{
    //         presets:['es2015'],  // 配置将es6语法转换成es5语法
    //         plugins:['transform-runtime'] // 用来解析vue文件
    // },
    plugins:[
        new htmlwp({
            title: '首页',  //生成的页面标题
            filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            template: 'index1.html' //根据index1.html这个模板来生成(这个文件请程序员自己生成)
        })
    ]
}
