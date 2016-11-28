/**
 * Created by Administrator on 2016/11/28.
 */
//依赖mod1.js,
//前面[]里放入几项，后面function就传入几个参数，一一对应前面模块暴露出来的字典
define(['mod1'],function (m1) {
    var a,b=2,c=3;
    a = c*m1.a;
    return {
        a:a,
        b:b
    }
});