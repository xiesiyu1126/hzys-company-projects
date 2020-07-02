
var bkswiper = null;
function update_footer(){
    if ($(window).height() > $('body').height())
    {
        $("footer").css({'width':'100%','position':'absolute','bottom':0,'left':0});
    }else{
        $("footer").css({'width':'100%','position':'relative'});
    }

}
(function(document, window, $) {
    
    var _H = $(window).height(),
        wrapH = $('#wrapper').height(),
        headerH = $('header').height(),
        footerH = $('footer').height();

    remInit();

    $(function() {
        setTimeout(function(){
            init();
        },10)
        //公用tab切换事件
        $('.tab-sel li').on('click', function() {
            tabMod($(this))
            
        });
        $('.sub-tab-sel li').on('click', function() {
            tabMod($(this))
        });
        
        if ($('.guize .tab-sel').length > 0)
        {
            bkswiper= new Swiper('.guize .tab-sel', {
              slidesPerView: 'auto',
              spaceBetween: 0,
            });
        }

        if ($('.banka .tab-sel').length > 0)
        {
            bkswiper= new Swiper('.banka .tab-sel', {
              slidesPerView: 'auto',
              spaceBetween: 0,
            });
        }

        $(".rollicon li").click(function(){
            var item = $(this).parent().parent().parent();  
            var i = $(this).index();
            item.find(".artical").addClass("hide");
            item.find(".artical").eq(i).removeClass("hide");
            item.find(".rollicon li").removeClass("active");
            $(this).addClass("active");
        });
        
        $('.select-cl').on('click', function() {
            $('.select-box').hide();
            if($(this).hasClass('active')){
                $('.select-cl').removeClass('active');
            }else{
                $('.select-cl').removeClass('active');
                $(this).addClass('active').next().show();
                selectMod($(this).parent());
            }
        });
        
        $('header .menu').on('click', function() {
            var has = $('.nav-menu').hasClass('active');
            if(has){
                $('.nav-menu').removeClass('active').fadeOut(200);
                return;
            }
            $('.nav-menu').addClass('active').fadeIn(200);
        });
          
        
    });

    function remInit() { //rem计算方法
        var docEl = document.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                var clientHeight = docEl.clientHeight;
                if (!clientWidth) return;
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            };
        if (!document.addEventListener) return;
        window.addEventListener(resizeEvt, recalc, false);
        document.addEventListener('DOMContentLoaded', recalc, false);
    }

    function init(){
        kvSwiper();
        tabInit();
    }

    function kvSwiper() { //公用轮播切换方法
        if($('.swiper-container').hasClass('kv')){

            if ($('.swiper-container.kv .swiper-slide').length > 1)
            {
                $('.swiper-pagination').css('display','block');
                loop = true;
            }else{
                $('.swiper-pagination').css('display','none');
                loop = false;
            }
            var kvSlide = new Swiper('.swiper-container.kv', {
                loop: loop,
                followFinger: false,
                nested: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                watchSlidesProgress: true,
                watchActiveIndex: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.kv .swiper-pagination'
                },
                on: {
                    slideChangeTransitionStart: function(e) {
                        var idx = this.realIndex + 1;
                        var img = $('.swiper-slide').eq(this.realIndex).find('img').attr('src');
                        $('.kv .mask-bg').css({
                            'background': 'url("'+img+'") 50% 50%/300% no-repeat',
                            'opacity': '0.3'    
                        });
                    }
                }
            });
            var img = $('.swiper-slide').eq(0).find('img').attr('src');
                        $('.kv .mask-bg').css({
                            'background': 'url("'+img+'") 50% 50%/300% no-repeat',
                            'opacity': '0.3'
                                
                        });
        }

        if($('.swiper-container').hasClass('hm-kv')){
            window.hmSwiper = new Swiper('.swiper-container.hm-kv', {
                loop: true,
                followFinger: false,
                nested: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                watchSlidesProgress: true,
                watchActiveIndex: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    slideChangeTransitionStart: function(e) {
                        var _this = $('.swiper-slide').eq(this.realIndex).find('a');
                        var tl = _this.attr('title');
                        var tx = _this.data('tx');
                        $('.hm-kv .hm-title h3').text(tl);
                        $('.hm-kv .hm-title p').text(tx);
                    }
                }
            });
        }
    }

    function tabInit(){
        $('.tab-sel li.active').each(function() {
            tabMod($(this));
        });
    }

    

    function selectMod(name){
        var idx = name.index();
        name.find('p').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parent().delay(300).fadeOut(200);
            $(this).parent().attr('data-val',$(this).attr('data-attr'));
            $(this).parent().prev().text($(this).text()).removeClass('active');           
            $(this).off();
        });
    }

})(document, window, jQuery);


function GPC(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
function tabMod(name) { //公用tab切换方法
        var idx = name.index();
        name.addClass('active').siblings().removeClass('active');
        var itme = name.parents('.tab-sel').next('.tab-con').children('div.item');
        itme.hide().eq(idx).show();
        if(name.hasClass('selmod')){
            $('.first-search .common,.first-search .city-con').addClass('hide');
            if(name.hasClass('common-sel')){
                $('.first-search .common').removeClass('hide');
            }else if(name.hasClass('city-sel')){
                $('.first-search .city-con').removeClass('hide');
            }
            $('.first-search').show();
        }else{
            $('.first-search').hide();
        }
        //console.log(itme.eq(idx).find('.rollicon'))
        if (itme.eq(idx).find('.rollicon'))
        {
            var swiper = new Swiper(itme.eq(idx).find('.rollicon'), {
              slidesPerView: 3,
              spaceBetween: 0,
                  navigation: {
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                  },
            });
            itme.eq(idx).find('.rollicon').find(".swiper-slide").removeClass("active");
            itme.eq(idx).find('.rollicon').find(".swiper-slide").eq(0).addClass("active");
            
            itme.eq(idx).find('.artical').addClass("hide");
            itme.eq(idx).find('.artical').eq(0).removeClass("hide");
        }
        update_footer();
    }