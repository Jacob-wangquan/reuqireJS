/**
 * Created by Administrator on 2016/11/22.
 */
//模块层
define(['widget','jquery','jqueryUI'],function (widget,$,$UI) {
    function Window() {
        this.cfg = {
            width:500,
            height:300,
            title:'系统消息',
            content:"",
            handler:null,
            hasCloseBtn:false,
            hasMask:true,
            isDraggable:true,
            dragHandle:null,
            skinClassName:null,
            text4AlertBtn:"确定",
            handler4AlertBtn:null,
            handler4CloseBtn:null
        };
        this.handlers = {};
    }
    Window.prototype =$.extend({},new widget.Widget(),{
        alert:function (cfg) {
            var CFG = $.extend(this.cfg,cfg);
            var boundingBox = $('<div class="window_boundingBox">' +
                '<div class="window_header">'+CFG.title+'</div>'+
                '<div class="window_body">'+CFG.content+'</div>'+
                '<div class="window_footer"><input type="button" class="window_alertBtn" value="'+CFG.text4AlertBtn+'"></div>'+
                '</div>');
            boundingBox.appendTo('body');
            //boundingBox.html(CFG.content);

            var btn = boundingBox.find(".window_footer input");
            mask = null;
            that = this;
            if(CFG.hasMask){
                mask = $('<div class="window_mask"></div>');
                mask.appendTo('body');
            }
            btn.appendTo(boundingBox);
            btn.click(function () {
                // CFG.handler4AlertBtn && CFG.handler4AlertBtn();
                boundingBox.remove();
                mask && mask.remove();
                that.fire("alert");
            });

            boundingBox.css({
                width:CFG.width+'px',
                height:CFG.height+'px',
                left:(CFG.x || (window.innerWidth-CFG.width)/2)+'px',
                top:(CFG.y || (window.innerHeight-CFG.height)/2)+'px'
            });
            if(CFG.hasCloseBtn){
                var closeBtn = $('<span class="window_closeBtn">X</span>');
                closeBtn.appendTo(boundingBox);
                closeBtn.click(function () {
                    //   CFG.handler4CloseBtn && CFG.handler4CloseBtn();
                    boundingBox.remove();
                    mask && mask.remove();
                    that.fire("close");
                });
            }
            if(CFG.skinClassName){
                boundingBox.addClass(CFG.skinClassName);
            }
            if(CFG.isDraggable){
                if(CFG.dragHandle){
                    boundingBox.draggable({handle:CFG.dragHandle});
                }else{
                    boundingBox.draggable();
                }

            }

            if(CFG.handler4AlertBtn){
                this.on("alert",CFG.handler4AlertBtn);
            }
            if(CFG.handler4CloseBtn){
                this.on("close",CFG.handler4CloseBtn);
            }

            return this;
        },
        confirm:function () {

        },
        prompt:function () {

        },


    });

    return {
        Window:Window
    }
});