// 2019-07-17
// 删除nctag埋点方式
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
		tdjs.src = 'https://creditcard.bankcomm.com/tdsdk/js/td-web-hybrid-sdk-event.js';
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
