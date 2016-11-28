/**
 * Created by Administrator on 2016/11/28.
 */

//程序的入口文件
require(['mod2'],function (m2) {
    //alert(m2.a*m2.b);
    var span = document.getElementById('span');
    span.innerText = m2.a*m2.b;
});