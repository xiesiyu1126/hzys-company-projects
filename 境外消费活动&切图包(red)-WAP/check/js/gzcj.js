// -- nctrack Start
var _trackData = _trackData || [];
// 主站点编号:10
var _$Mwebsite = '10';
// 子站点编号:官网1001,积分乐园1002,网关支付1003,跨行收单1004
var _Schannel_website_id = '1001';
// 生产环境地址:
// var _$Mcounturl = 'https://track.bankcomm.com:8443/nctrack/logcount.jsp';
// var _$Mcounturl = 'http://track.bankcomm.com:8080/nctrack/logcount.jsp';
var _$Mcounturl = '';
if ("https:" == document.location.protocol) {
	_$Mcounturl = 'https://track.bankcomm.com:8443/nctrack/logcount.jsp';
} else {
	_$Mcounturl = 'http://track.bankcomm.com:8080/nctrack/logcount.jsp';
}
(function() {
	var nctrack_js = document.createElement('script');
	nctrack_js.type = 'text/javascript';
	nctrack_js.charset = 'utf-8';
	nctrack_js.id = 'nctrack_async_js_id_10';
	// js使用异步加载
	if (typeof (nctrack_js.async) != 'undefined') {
		nctrack_js.async = true;
	} else {
		nctrack_js.defer = "defer";
	}
	// nctrack_js.async = true;
	if ("https:" == document.location.protocol) {
		nctrack_js.src = 'https://track.bankcomm.com:8443/nctrack/js/nctrack10.js';
	} else {
		nctrack_js.src = 'http://track.bankcomm.com:8080/nctrack/js/nctrack10.js';
	}
	var nctrack_cjs = document.getElementsByTagName("script")[0];
	nctrack_cjs.parentNode.appendChild(nctrack_js);
})();

// -- nctrack End
// TD Track
(function() {
  // avoid repeated including
  if(typeof(TDAPP) != "undefined") {
	return;
  }
  var tdjs = document.createElement('script');
  tdjs.type = 'text/javascript';
  //tdjs.charset = 'utf-8';
  
  var isMobile = false;
  var keywords = ['Android', 'iPhone', 'iPad', 'iPod', 'Windows Phone'];
  var userAgent = navigator.userAgent;
  for (var i=0; i<keywords.length; i++) {
	  if (userAgent.indexOf(keywords[i]) > 0) {
		  isMobile = true;
		  break;
	  }
  }
  // PAT
  if (document.location.hostname.indexOf('creditcard') > -1) {
	if(isMobile) {
		tdjs.src = 'https://creditcard.bankcomm.com/tdsdk/js/td-h5-hybrid-sdk-event.js';
	} else {
		tdjs.src = 'https://track.bankcomm.com:8443/tdsdk/js/td-web-hybrid-sdk-event.js';
	}    
  } 
  // UAT
  else {
	var sdkType = isMobile ? 'h5' : 'web';
    tdjs.src = 'https://paymenttest.bankcomm.com/sdk/conf/js/td-'+sdkType+'-hybrid-sdk-event.js';
  }
  var jstag = document.getElementsByTagName("script")[0];
  jstag.parentNode.appendChild(tdjs);
})();
