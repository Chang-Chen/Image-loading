/*
* Created by zhanghen on 2017/7/27.
* */
$(function () {
    $("img[data-scaleImg]").on('load',function () {
        var self = $(this);
        //对其父元素设置相关属性
        self.parent().css({
            'box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            'overflow': 'hidden'
        });

        var _width,_height,_widthBox,_heightBox;
        _width = $(this).width();
        _height = $(this).height();
        _widthBox = $(this).parent().width();
        _heightBox = $(this).parent().height();
        if(_width > _widthBox || _height > _heightBox){
            scaleImage();
        }else {
            normalImage();
        }
        //计算缩放比例
        function scale() {
            var scaleVal;
            if(_width > _height){
                scaleVal =  _height/_heightBox;
            }else {
                scaleVal = _width/_widthBox;
            }
            return scaleVal;
        }
        function scaleImage() {   //不变形的缩放
            if(_width > _height){
                var wid = (_width/scale() - _widthBox)/2;
                self.css({
                    'height':_heightBox,
                    'width':'auto',
                    'margin-left': -wid
                });
            }else {
                var hig = (_height/scale() - _heightBox)/2;
                self.css({
                    'height':'auto',
                    'width':_widthBox,
                    'margin-top': -hig
                });
            }
        }
        //正常加载
        function normalImage() {
            var top;
            if(_width > _height){
                top = (_height -_heightBox)/2;
                self.css({
                    'max-width':'100%',
                    'height':'auto',
                    'margin-top':-top
                });
            }else {
                top = (_heightBox - _height)/2;
                self.css({
                    'width':'auto',
                    'max-height':'100%',
                    'margin-top':top
                });
            }
            console.log(_heightBox , _height);
            self.parent().css({
                'text-align': 'center'
            })
        }

    })
})