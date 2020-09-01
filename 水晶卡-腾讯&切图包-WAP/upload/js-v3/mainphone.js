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

		var swiper = new Swiper('.jointly .tab-sel', {
		  slidesPerView: 4.5,
		  spaceBetween: 0,
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
            var kvSlide = new Swiper('.swiper-container.kv', {
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
                pagination: {
                    el: '.kv .swiper-pagination'
                },
                on: {
                    slideChangeTransitionStart: function(e) {
                        var idx = this.realIndex + 1;
                        var img = $('.swiper-slide').eq(this.realIndex).find('img').attr('src');
                        $('.kv .mask-bg').css({
                            'background': 'url("'+img+'") 50% 50%/100% no-repeat',
								
                        });
                    }
                }
            });
        }

        if($('.swiper-container').hasClass('hm-kv')){
            var hmSwiper = new Swiper('.swiper-container.hm-kv', {
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
    }

    function selectMod(name){
        var idx = name.index();
        name.find('p').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parent().delay(300).fadeOut(200);
            $(this).parent().prev().text($(this).text()).removeClass('active');
            $(this).off();
        });
    }

})(document, window, jQuery);