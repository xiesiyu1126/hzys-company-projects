jQuery(function($) {
	if($('.btn-appro').length) {//多卡种，获取对应cardId并替换链接
		for(var i = 0;i < $('.btn-appro').length;i++) {
			var url = window.location.href;
			var cardId = getCardIdRegExp($($('.btn-appro')[i]).attr("href"));
			if(cardId) {
				url += cardId;
			}
			newCardURL(url, $($('.btn-appro')[i]));
		}
	} else {//单一卡种
		newCardURL(window.location.href, $("#newCardURL"));
		cardApplyURL($("#newCardURL").attr("href") ,$("#newCardURL"));
		cardApplyURL($("#holderCardURL").attr("href"), $("#holderCardURL"));
	}
	
	function getQueryStringRegExp(name){
      	var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");
      	var r = window.location.search.substr(1).match(reg);
        if(r !=null) return unescape(r[2]);
        return null;
	}
	
	function getCardIdRegExp(url){
		var param = "";
      	var index = url.indexOf("cardId");
		if(index > -1) {
			param = "&" + url.substring(index);
		}
        return param;
	}

	function cardApplyURL(url,regx){
		var cardId = getQueryStringRegExp("cardId");	    
	  
		if(cardId != null && cardId){
			if(url.match("/front/apply/add/card/index")) {
				url = url + "?cardId="+cardId;	
			} else {
				url = url + "&cardId="+cardId;
			}
			return regx.attr("href",url);
		}
	}

	function newCardURL(url, regx){			
		if(url.match("actUrl=")){
			var actUrl = url.split('actUrl=')[1];
			var matchUrl = new URL(actUrl);
            if (actUrl && typeof(matchUrl) != "undefined" && matchUrl.hostname.indexOf('bankcomm.com') > -1) {	
				url = actUrl;
				return regx.attr("href",url);  		  
			}else{
				url = "https://creditcardapp.bankcomm.com/applynew/front/apply/new/index.html";
				return regx.attr("href",url);
			} 
		}
		
	}
	
});