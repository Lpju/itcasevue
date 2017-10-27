// 1.0 导入vue核心包
// 凡是使用npm安装的包 引入的时候都不需要写相对路径 只需要写包名即可
import Vue from "vue";
// 2.0 导入App.vue的vue对象
import App from "./App.vue";
//3.0.1   导入vue-router
import vueRouter  from "vue-router";
//3.0.2. 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);
//3.0.3 导入路由规则对应的组件对象
import login from "./components/account/login.vue";
import register   from "./components/account/register.vue"
//3.0.4定义路由规则
var router1=new vueRouter({
    routes:[
       { path:"/login",component:login},
       { path:"/register",component:register}
    ]
});
//4.0.1在项目入口文件main.js中配置mint-ui
//4.0.2导入mint-ui
import mint from "mint-ui";
//4.0.3将mint对象绑定到Vue对象上
Vue.use(mint);
//4.0.4使用csscomponents
//- 在main.js中导入css样式
import "../node_modules/mint-ui/lib/style.min.css";
//5.导入mui.css样式css
import "../statics/mui/css/mui.css"
// 6.0 利用Vue对象进行解析渲染
 new Vue({
     el:"#app",
     router:router1,
     render:function(create){return create(App)}
 })


