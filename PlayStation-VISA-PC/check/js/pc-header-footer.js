$(function(){
    var indexLink = 'https://creditcard.bankcomm.com/content/index.html';
    var loginLink = 'https://creditcardapp.bankcomm.com/member/member/main.html';
    var searchLink = 'https://creditcard.bankcomm.com/content/pccc/search.html';
    var headMenu = [{
        'link': indexLink,
        'menulist': {
            'menu': '首页',
            'menuitem': []
        },
        'code': '01'
    },{
        'link': 'https://creditcard.bankcomm.com/content/dam/pc/new/cards/cards.html',
        'menulist': {
            'menu': '缤纷卡片',
            'menuitem': [{
                'href':'https://creditcard.bankcomm.com/content/cards/standard.html',
                'text':'标准信用卡'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/cards/qnk/young.html',
                'text':'青年卡专区'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/cards/xyk/campus.html',
                'text':'校园卡专区'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/cards/yyb/youyi.html',
                'text':'优逸白金专区'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/cards/bjk/platinum.html',
                'text':'白金卡专区'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/cards/hqk/global.html',
                'text':'环球卡专区'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/cards/lmk/jointly.html',
                'text':'联名卡专区'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/cards/gwk/business.html',
                'text':'公务卡专区'
            }]
        },
        'code': '02'
    },{
        'link': 'https://creditcard.bankcomm.com/content/dam/pc/new/activity/promotions.html',
        'menulist': {
            'menu': '热门活动',
            'menuitem': [{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/activity/xhzq/newuser.html',
                'text':'新户专区'
            },{
                'href':'https://creditcardapp.bankcomm.com/applynew/front/apply/track/record.html?trackCode=A022210467005',
                'text':'推荐办卡'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/activity/zhzq/reddest.html',
                'text':'最红专区'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/activity/ydzf/online.html',
                'text':'移动支付活动'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/activity/jifen/scoreplan.html',
                'text':'积分专区'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/activity/jingwai/overseas.html',
                'text':'境外专区'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/activity/food/catering.html',
                'text':'美食专区'
            },{
                'href':'https://creditcard.bankcomm.com/content/promotions/activity.html',
                'text':'活动一览'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/activity/mdbzx/type1.html',
                'text':'买单吧专享活动'
            }]
        },
        'code': '03'
    },{
        'link': 'https://creditcard.bankcomm.com/content/dam/pc/new/fqxd/instalment.html',
        'menulist': {
            'menu': '分期信贷',
            'menuitem': [{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/fqxd/haoxiang.html',
                'text':'好享贷'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/fqxd/haoxian.html',
                'text':'好现贷'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/fqxd/haoshang.html',
                'text':'好商贷'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/fqxd/xiangfen.html',
                'text':'想分就分'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/fqxd/fenqi.html',
                'text':'现金分期'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/fqxd/zhuanzhang.html',
                'text':'现金转账'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/fqxd/xunhuan.html',
                'text':'循环信用'
            }
            ]
        },
        'code': '04'
    },{
        'link': 'https://creditcard.bankcomm.com/content/dam/pc/new/xyksq/applycard.html',
        'menulist': {
            'menu': '信用卡申请',
            'menuitem': [{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/cards/cards.html',
                'text':'我要办卡'
            },{
                'href':'https://creditcard.bankcomm.com/content/pccc/index/hyzx/xykhk.html',
                'text':'办卡进度'
            },{
                'href':'https://creditcard.bankcomm.com/content/pccc/apply/zxsq.html',
                'text':'附属卡申请'
            },{
                'href':'https://creditcard.bankcomm.com/content/pccc/apply/xyksqbj.html',
                'text':'申请补件'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/cards/cards.html',
                'text':'卡种介绍'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/khfw/notice/mustknow.html ',
                'text':'办卡流程'
            }]
        },
        'code': '05'
    },{
        'link': 'https://creditcard.bankcomm.com/content/dam/pc/new/khfw/service.html',
        'menulist': {
            'menu':'客户服务',
            'menuitem': [{
                'href':'https://creditcard.bankcomm.com/content/pccc/index/hyzx/wydl.html',
                'text':'查账'
            },{
                'href':'https://creditcardapp.bankcomm.com/member/member/main.html',
                'text':'还款'
            },{
                'href':'https://creditcardapp.bankcomm.com/member/member/main.html',
                'text':'额度查询'
            },{
                'href':'https://creditcard.bankcomm.com/content/pccc/index/hyzx/zdfq.html',
                'text':'积分查询'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/khfw/zzfw/appreciation.html',
                'text':'增值服务'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/khfw/bxfw/insurance.html',
                'text':'保险服务'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/khfw/notice/mustknow.html',
                'text':'应知重要事项'
            },{
                'href':'https://creditcard.bankcomm.com/webchat/talk.do?channelType=41',
                'text':'在线客服'
            },{
                'href':'https://creditcard.bankcomm.com/content/dam/pc/new/khfw/gonggao/notice.html',
                'text':'公告'
            }]
        },
        'code': '06'
    }];

    var headTopHTML = '<div class="head-top">'+
        '<div class="container">'+
        '<div class="logo">'+
        '<a href="'+indexLink+'" title="交通银行信用卡官网"><img src="images/logo.png" alt="交通银行信用卡官网"></a>'+
        '</div>'+
        '<div class="mdblogo">'+
        '<a href="'+indexLink+'" title="买单吧"><img src="images/mdblogo.png" alt="买单吧"></a>'+
        '</div>'+
        '<div class="box-r">'+
        '<div class="search">'+
        '<form id="nav-search" action="https://creditcard.bankcomm.com/content/pccc/search.html" method="get">'+
        '<input name="q" type="text">'+
        '<button class="btn-mod" nctag="nctag_2998001001" td-event="2998001001">搜索</button>'+
        '</form>'+
        '</div>'+
        '<div class="login btn-mod"><a href="'+loginLink+'" title="登录" nctag="nctag_2998001002" td-event="2998001002">登录</a></div>'+
        '</div>'+
        '<div class="clear"></div>'+
        '</div>'+
        '</div>';
    var navHTML = '<nav><ul class="container">';
    var headerHTML = '';
    var nctagNum = 2998001000;
    var nctagArray = [110,130,150,170,190];
    for(var i=0;i<headMenu.length;i++){
        var l = headMenu[i].menulist.menuitem.length;
        if (l == 0) {
            navHTML += '<li'+ (menuCode=== headMenu[i].code ? ' class="active"' : '')+ '><a href="'+headMenu[i].link+'" title="'+headMenu[i].menulist.menu+'" nctag="nctag_2998001100" td-event="2998001100">'+headMenu[i].menulist.menu+'</a></li>'
        }else{
            navHTML += '<li'+ (menuCode=== headMenu[i].code ? ' class="active"' : '')+ '>'+
                '<a href="'+headMenu[i].link+'" title="'+headMenu[i].menulist.menu+'" nctag="nctag_'+(nctagNum+nctagArray[i-1])+'" td-event="'+(nctagNum+nctagArray[i-1])+'">'+headMenu[i].menulist.menu+'</a>'+
                '<div class="sub-nav">'+
                '<div class="bg1">'+
                '<ul>';
            for(var j=0;j<headMenu[i].menulist.menuitem.length;j++){
                navHTML += '<li><a href="'+headMenu[i].menulist.menuitem[j].href+'" title="'+headMenu[i].menulist.menuitem[j].text+'" nctag="nctag_'+(nctagNum+nctagArray[i-1]+j+1)+'" td-event="'+(nctagNum+nctagArray[i-1]+j+1)+'">'+headMenu[i].menulist.menuitem[j].text+'</a></li>';
            }
            navHTML += '</ul>'+
                '<div class="clear"></div>'+
                '</div>'+
                '<div class="bg2"></div>'+
                '</div>'+
                '</li>';
        }
    }
    headerHTML += headTopHTML + navHTML + '</ul><div class="clear"></div></nav>';
    $('header').append(headerHTML);

    var talkLink = 'https://creditcard.bankcomm.com/webchat/talk.do?channelType=41';
    var mapLink = 'https://creditcard.bankcomm.com/content/dam/pc/new/wzdt/map.html';
    var footerHTML = '<div class="pt-link">'+
        '<a href="'+talkLink+'" class="service" title="在线客服" nctag="nctag_2998001003" td-event="2998001003">在线客服</a>'+
        '<a href="'+mapLink+'" title="网站地图" nctag="nctag_2998001004" td-event="2998001004">网站地图</a>'+
        '</div>'+
        '<div class="pt-copyright"><a href="#">沪ICP备05036189</a><span>©2013-2014交通银行版权所有</span><span>未经许可不得转载</span></div>'+
        '<div class="pt-mob"><span>服务热线：400-800-9888</span><span>服务监督热线：021-28283999</span></div>';
    $('footer').append(footerHTML);

    //百度统计代码
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?bccfa888e611174fd7f66864fc8386d2";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    //footer固定在页面底部
    if ($(window).height() > $('body').height())
    {
        $("footer").css({'width':'100%','position':'absolute','bottom':0,'left':0});
    }else{
        $("footer").css({'width':'100%','position':'relative'});
    }

})