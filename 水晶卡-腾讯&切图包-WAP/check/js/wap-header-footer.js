
$(function(){
  var indexLink = 'https://creditcard.bankcomm.com/content/index.html';
  var searchLink = 'https://creditcard.bankcomm.com/content/search.html';
  var headMenu = [{
    'link': 'https://creditcardapp.bankcomm.com/idm/sso/login.html',
    'menu': '登录',
    'code': '00'
  },{
    'link': indexLink,
    'menu': '首页',
    'code': '01'
  },{
    'link': 'https://creditcard.bankcomm.com/content/cards.html',
    'menu': '缤纷卡片',
    'code': '02'
  },{
    'link': 'https://creditcard.bankcomm.com/content/promotions.html',
    'menu': '热门活动',
    'code': '03'
  },{
    'link': 'https://creditcard.bankcomm.com/content/dam/phone/new/fqxd/instalment.html',
    'menu': '分期信贷',
    'code': '04'
  },{
    'link': 'https://creditcard.bankcomm.com/content/dam/phone/new/xyksq/applycard.html',
    'menu': '信用卡申请',
    'code': '05'
  },{
    'link': 'https://creditcard.bankcomm.com/content/dam/phone/new/khfw/service.html',
    'menu': '客户服务',
    'code': '06'
  }
  ];
  var logo = '<a class="logo" href="'+indexLink+'" alt="交通银行信用卡官网"></a>';
  var navContent = '<div class="nav-content">'+
                    '<ul>'+
                      '<li class="searc" title="搜索">'+
                        '<a href="'+searchLink+'" title="搜索"><img src="images/search.png" alt="搜索"></a>'+
                      '</li>'+
                      '<li class="menu" title="栏目"><img src="images/menu.png" alt="栏目"></li>'+
                    '</ul>'+
                  '</div>';
  var navMenu = '<div class="nav-menu"><ul>';
  var headerHTML = '';
  for(var i=0;i<headMenu.length;i++){
  navMenu += '<li'+ (menuCode=== headMenu[i].code ? ' class="active"' : '')+ '><a href="'+headMenu[i].link+'" title="'+headMenu[i].menu+'">'+headMenu[i].menu+'</a></li>'
  }
  navMenu += '</ul></div>';
  headerHTML = logo + navContent + navMenu;
  $('header').append(headerHTML);

  var talkLink = 'https://creditcard.bankcomm.com/webchat/talk.do?channelType=51';
  var mapLink = 'https://creditcard.bankcomm.com/content/dam/phone/new/wzdt/map.html';
  var footerHTML = '<p class="copy">'+
                      '<a href="'+talkLink+'" class="service" title="在线客服">在线客服</a>'+
                      '<a href="'+mapLink+'" class="map" title="网站地图">网站地图</a>'+
                    '</p>'+
                    '<p class="icp">沪ICP备05036189 ©2013-2014交通银行版权所有 未经许可不得转载</p>'+
                    '<p class="tel"><span>服务热线：400-800-9888</span><span>服务监督热线：021-28283999</span></p>';
  $('footer').append(footerHTML);

  //百度统计代码
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?306b3090e899a49ea9482d7593d84367";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();

  //买单吧中header隐藏
  if((navigator.userAgent.indexOf("com.bankcomm.maidanba")==-1) && (navigator.userAgent.indexOf("MobileBank") == -1)) {
      $("header").show();
      $(".top-title").show();
      $("footer").show();
  }else{
      $("header").hide();
      $(".top-title").hide();
      $("footer").hide();
  }
  
});
