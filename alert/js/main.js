/**
 * Created by Administrator on 2016/11/22.
 */
//应用层

require.config({
    paths:{
        jquery:'jquery-2.0.3.min',
        jqueryUI:'http://code.jquery.com/ui/1.10.4/jquery-ui'
    }
});

require(['jquery','window'],function ($,w) {
   $('#a').click(function () {
       var win = new w.Window();
       win.alert({
           title:'提示',
           content: 'hello',
           handler: function () {
               alert('click btn');
           },
           width: 300,
           height: 150,
           y: 50,
           hasCloseBtn:true,
           text4AlertBtn:'点击',
           dragHandle:".window_header",
           skinClassName:"window_skin_a",
           handler4AlertBtn:function () {
               alert("click alert btn");
           },
           handler4CloseBtn:function () {
               alert("click close btn");
           }
       }).on("alert",function () {
           alert("the second alert handler");
       }).on("alert",function () {
           alert("the third alert handler");
       });
       win.on("close",function () {
           alert("the second close handler");
       });
   });
});