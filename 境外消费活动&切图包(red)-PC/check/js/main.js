var _W,
    _H;
$(function(){
    $(window).resize(function() {
        _W = $(window).width();
        _H = $(window).height();
        setTimeout(function(){
            var ih = $('.kv section img').height();
            if (_W < 1400) {
                if (!Modernizr.csstransforms) {
                    var w = _W < 1200 ? 1200 : _W;
                    $('.home .kv section a').css('left', (w - w * 1.33333333) / 2);
                    if (!Modernizr.borderradius) {
                        $('.home .kv section a').show();
                    }
                }
            } else {
                $('.home .kv section a').css('left', '');
                if (!Modernizr.borderradius) {
                    $('.home .kv section a').hide();
                }
            }
            $('.kv,.kv section').height(ih);

            $('.kv section').each(function(index, el) {
                var imgSrc = $(this).find('img').attr('src');
                $(this).css('background-image','url(' + imgSrc + ')');
            });
        },10)
    });
    $(window).on('load', function() {
        $(window).trigger('resize');
    });
    $(window).trigger('resize');
})