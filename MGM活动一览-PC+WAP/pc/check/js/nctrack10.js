var _$MAuthor;
var _SCountIframe;
var _SLoadTime;
var _$MPageType;
var _$MPagePic;
var _$MPageId;
var _$Mformlist = '';
var _$Mformdetails = {};
var _$Mformfielddetails = {};
var _$Mwebsite;
var _$Mpartner_website;
var _Spartner_website_id;
var _Schannel_website_id;
var _Schannel_webshop_id;
var _pageformjs = false;
var _Sorder_encode_url;
var _$Mdocument = window.document;
var _$Mdocumentcookie = window.document;
var _$Mdocumentbody = _$Mdocument.getElementsByTagName('body')[0];
var _$Mprotocol = _$Mdocument.location.protocol;
var _$MstayTime = 86400000;
var _$MpageClose = 0;

// 2017-01-13，增加城市
var _trackCityNo = _trackCityNo || "";
var _$Mcity = _trackCityNo || "";

var _$MsessionId;

//1.增加cookie读写url变量及设置代码,2016-6-16 18:35:24
var _$MckSet = ''; // 拼接跨域写入cookie内容
var _$Mck = _$Mck || '';
var _$MckSetSrc = '';
var _$MckGetSrc = '';
if ("https:" == document.location.protocol) {
	_$MckSetSrc = 'https://track.bankcomm.com:8443/nctrack/setCk.jsp';
	_$MckGetSrc = 'https://track.bankcomm.com:8443/nctrack/getCk.jsp';
} else {
	_$MckSetSrc = 'http://track.bankcomm.com:8080/nctrack/setCk.jsp';
	_$MckGetSrc = 'http://track.bankcomm.com:8080/nctrack/getCk.jsp';
}
// 2.增加_$Mck变量
var _$Mck = 'NOCOOKIE';
// 3.增加getCk的script设置
var getCk = document.createElement('script');
getCk.src = _$MckGetSrc;// ?r=" + Math.random();
getCk.type = 'text/javascript';
getCk.charset = 'utf-8';
getCk.async = false;
document.getElementsByTagName("html")[0].appendChild(getCk);

var _trackDataType;
var _trackData = _trackData || [];
if (_SCountIframe === true) {
	try {_$Mdocument = top.window.document;} catch(e) {}
	try {_$Mdocument = window.parent.document;} catch(e) {}
}
var _$Miserror = 0;
var _$Mflashid = 'tck_Nru';
var _$Mcounturl;
var _$Mmediumsource = _$Mmediumsourcetype = _$Mmediumsourcefirst = _$Mmediumchannel = _$Mkeywordsource = _$Medmemail = _$Mfriendlink = _$MfriendlinkN = _$Mkeywordkey = '';
var _$Mstarttime = _$Mtimestart = _$Mloadtime = _$Mdowntime = _$Mgettime = (new Date()).getTime();
var _$Mrandomid = (parseInt(_$Mstarttime/1000)+'').substr(4,8);

window.onerror = _$Merr;

(function() {
	var CHARS = '01234567891357924680'.split('');
	Math.uuid = function (len, radix) 
	{
		var chars = CHARS, uuid = [], i;
		radix = radix || chars.length;

		if (len)
		{
			for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random()*radix)];
		}
		return uuid.join('');
	};
})();

var _$Museragent = navigator.userAgent.toLowerCase();
//var _$Mtelphone = /(nokia|sony|ericsson|moto|samsung|htc|sgh|lg|sharp|philips|panasonic|alcatel|lenovo|iphone|ipod|ipad|blackberry|meizu|android|netfront|symbian|ucweb|windowsce|palm|operamini|openwave|nexusone|playstation|nintendo|symbianos|dangerhiptop|dopod|midp)/.exec(_$Museragent);
var _$Mtelphone = /\b(nokia|sony|ericsson|moto|samsung|htc|sgh|lg|sharp|philips|panasonic|alcatel|lenovo|iphone|ipod|ipad|blackberry|meizu|netfront|symbian|ucweb|windowsce|palm|operamini|openwave|nexus|playstation|nintendo|symbianos|dangerhiptop|dopod|midp|pad|coolpad|huawei|gt-|sm-)([\w\d]*)\b/.exec(_$Museragent);
_$Mtelphone = _$Mtelphone === null ? '' : _$Mtelphone[0];
if(_$Mtelphone == '' && _$Museragent.indexOf('android')>-1) {
	_$Mtelphone = 'android';
}
var _$Mflashok = _$Mflash_cookie();
var _$Mphpstat_flash_object;

var _$Misdownloadflash = 0;
if(_$Mflashok.v >= 88 && _$Mdocument.location.hash.toString().indexOf('clickmapcode') <= -1 
		&& typeof(_$Mdocumentbody) !== 'undefined' && _$Mtelphone === '' 
		&& _$Mreadmapcookie('NCtrackMap') === '') {
	_$Misdownloadflash = 1;
}
if(_$Misdownloadflash === 1) {
	_$Mdownloadflash();
}
var _$Mclienturl = new Array();

var _$Mthehostname = _$Mdocument.location.hostname;
var _$Mgetclienthost;
for (_$Mgetclienthost in _$Mclienturl) {
  if (_$Mgetclienthost == _$Mthehostname) {
      _$Mcounturl = _$Mclienturl[_$Mgetclienthost];
      break;
  }
}
var doTrackCnt=1;
doTrack();
// 进行页面数据采集
function doTrack() {
	//console.log("doTrack()--->" + doTrackCnt++);
	// 判断getCk.jsp是否加载完毕
	if (_$Mck == 'NOCOOKIE') {
		// 未加载完毕则50ms后重新判断
		setTimeout("doTrack()", 50);
	} else {
		// 2017-01-13，解决访客首个访问页SID为空问题
		if(_$Mck=='' || _$Mck.search('JSESSIONID')<0) {
			if(_$Mck!='') {
				_$Mck += ",";
			}
			_$Mck += 'JSESSIONID=SID'+_$Mgettime+Math.uuid(16,16);
		}
		// 读写cookie完毕，开始数据采集
		if( _$Mprotocol.toString().toLowerCase().indexOf('http') > -1 ) {
			if(_$Misdownloadflash === 0) {
				_$Mphpstat('HttpCookie');
			}
		}
	}
}


// 方法，start
function _$Merr()
{
	_$Miserror = 1;
	return true;
}
function _$Municode(s){
   var len=s.length;
   var rs="";
   for(var i=0;i<len;i++){
          rs+= s.charCodeAt(i)%10;
   }
   return rs;
}
function _$Mreadmapcookie(name)
{
	var cV = end = '';
	var v = name + '=';
	if (_$Mdocument.cookie) 
	{
		var p = _$Mdocument.cookie.indexOf(v);
		if (p > -1) {
			p += v.length;
			end = _$Mdocument.cookie.indexOf(";", p);
			if (end == -1) {end = _$Mdocument.cookie.length;};
			cV = _$Mdocument.cookie.substring(p, end);
		}
		return cV;
	}
}

function _$Mflash_cookie()
{
	var f=0;
	var v=0;
	var swf;
	var ie = _$Museragent.match(/msie ([\d.]+)/);
	if(ie)
	{
		try {
		swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
		if(swf) 
		{
			f=1;
			var vs=swf.GetVariable("$version");
			v=parseInt(vs.split(" ")[1].split(",")[0]);
		}
		}
		catch (e) {
        }
	}
	else
	{
		if (navigator.plugins && navigator.plugins.length > 0)
		{
			swf=navigator.plugins["Shockwave Flash"];
			if (swf)
			{
				f=1;
				var ws = swf.description.split(" ");
				for (var i = 0; i < ws.length; ++i)
				{
					if (isNaN(parseInt(ws[i]))) continue;
					v = parseInt(ws[i]);
				}
			}
		}
	}
	return {f:f,v:v};
}


function _$Mdownloadflash(){
}

function _$Mphpstat(cookietype) {
	var _$Mdoimgerr_1 = 1;
    var _$Mreferrer = _$Mdocument.referrer;
    var _$Mtitle = _$Mdocument.title;
    var _$Mlanguage = (navigator.systemLanguage ? navigator.systemLanguage : navigator.language);
    var _$Mcolor = screen.colorDepth;
    var _$Mclientwidth = _$Mdocument.documentElement.clientWidth;
    var _$Mclientheight = _$Mdocument.documentElement.clientHeight;
    var _$Mclientwidth = _$Mdocument.documentElement.clientWidth;
    var _$Mclientheight = _$Mdocument.documentElement.clientHeight;
	var _$Mscrollheight = _$Mdocument.documentElement.scrollHeight;
    var _$Mscreensize = screen.width + '*' + screen.height;
    var _$Mlastmodify = new Date(_$Mdocument.lastModified).getTime();
    var _$Mcookie = navigator.cookieEnabled ? 1 : 0;
    var _$Msearchkey = ['baidu','baidu','google','yahoo','sogou','bing','youdao','soso','phpstat','haosou','sm'];var _$Mkeyword = ['wd','word','q','p','query','q','q','w','keywords','q','q'];var _$Msearchtype = ['default','default','default','default','default','default','default','default','customer','default','default'];var _$Mkeywordrelated = ['bs','bs','','','','','lq','bs','','',''];;
    var _$Mhostname = _$Mdocument.location.hostname + (_$Mdocument.location.port.length > 0 ? (":"+_$Mdocument.location.port) : '');
    var _$Mcounturl_logcount = _$Mcounturl;
    var _$Mfirsttime;
    var _$Mlasttime;
    var _$Mreturncount;
    var _$Musercookie;
    var _$Mlusercookie;
    var _$Musername;
    var _$Muserid;
    var _$Muserregtime;
    var _$Muserage;
    var _$Musersex;
	var _$Mdomain='track.bankcomm.com';
	var _$MdomainTop = '.bankcomm.com';
	var _$Mrefid = new Array();
	_$Mrefid['p_recom_id'] = '';
	// 修改原因,cookie全部设置在track.bankcomm.com下
	//_$Mgd(_$Mhostname);
	_$MAuthor	= _$Mtypeof(_$MAuthor);
	_$MPageType	= _$Mtypeof(_$MPageType);
	_$MPagePic	= _$Mtypeof(_$MPagePic);
	_$MPageId	= _$Mtypeof(_$MPageId);
	// 增加访问量,有效访问客户标识
	var _$Mpageview = _$Mreadflashcookie('tck_pv');
	if(_$Mpageview == '') {
		_$Mpageview = 0;
	}
	_$Msetflashcookie('tck_pv', ++_$Mpageview, '0.5', _$Mdomain);
	if(_$Mpageview>1) {
		_$Msetflashcookie('tck_ef', 1, 7, _$Mdomain);
	}
	var _$MeffectiveVisitor = _$Mreadflashcookie('tck_ef');
    if (typeof(_SLoadTime) == 'undefined') {
        _$Mdowntime = 0
    } else {
        _$Mstarttime = parseInt(_SLoadTime);
        _$Mdowntime = _$Mdowntime - parseInt(_SLoadTime)
    }
    _$Mfirsttime = _$Mreadflashcookie('tck_fsttm');
    if (_$Mfirsttime === '') {
        _$Mfirsttime = _$Mgettime;
        _$Msetflashcookie('tck_fsttm', _$Mfirsttime, 3650, _$Mdomain)
    } 
    _$Mreturncount = _$Mreadflashcookie('tck_rc');
    _$Mreturncount = _$Mreturncount === '' ? 0 : _$Mreturncount; 
    _$Musername = _$Mreadflashcookie('username') ? _$Mreadflashcookie('username') : (_$Mreadflashcookie('tck_Set_User_Name')?_$Mreadflashcookie('tck_Set_User_Name'):_$Mreadflashcookie('tck_Set_User_Id'));	
//    _$Muserid = _$Mreadflashcookie('NCTRACKNULLCOOKIE') ? _$Mreadflashcookie('NCTRACKNULLCOOKIE') : (_$Mreadflashcookie('tck_Set_User_Id')?_$Mreadflashcookie('tck_Set_User_Id'):_$Mreadflashcookie('tck_Set_User_Name'));	
    // 修改原因:获取cookie修改
    _$Muserid = _$MreadcookieCur("_tcs");
    _$Muserage = _$Mreadflashcookie('NCTRACKNULLCOOKIE') ? _$Mreadflashcookie('NCTRACKNULLCOOKIE') : _$Mreadflashcookie('tck_Set_User_Age');
    _$Muserregtime = _$Mreadflashcookie('userregtime') ? _$Mreadflashcookie('userregtime') : _$Mreadflashcookie('tck_Set_User_Regtime');	
    _$Musersex = _$Mreadflashcookie('NCTRACKNULLCOOKIE') ? _$Mreadflashcookie('NCTRACKNULLCOOKIE') : _$Mreadflashcookie('tck_Set_User_Sex');
    /*_$Musercookie = _$Mreadflashcookie('tck_Set_User_Id')?_$Mreadflashcookie('tck_Set_User_Id'):_$Mreadflashcookie('tck_Cookie_Global_User_Id');*/
    // 获取cookie中的sessionid
    _$MsessionId = _$Mreadflashcookie('tck_sid');
    if(_$MsessionId=='') {
    	// 过期后重新设置sessionid
    	_$MsessionId = _$Mreadflashcookie('JSESSIONID');
    }
    // 设置28分钟过期，每次访问页面都更新过期时间
    _$Msetcookie('tck_sid', _$MsessionId, 0.02, _$Mdomain);
    
    _$Musercookie = _$Mreadflashcookie('t0');
	_$Mlusercookie = _$Mreadflashcookie('t0');
	if (_$Musercookie === '') {
        _$Mlusercookie = _$Musercookie = _$Munique();
        _$MsetcookieCur('t0', _$Musercookie, 3650, _$MdomainTop);
    }
	if( _$Musercookie !== _$Mlusercookie ){
		_$MsetcookieCur('t0', '', 3650, _$MdomainTop);
	}
    if (_$Mtypeof(_$Musercookie) === '') {
        _$Musercookie = _$Munique();
    }

    _$Mlasttime = _$Mreadflashcookie('tck_rct');
    if (_$Mlasttime === '') {
        _$Mlasttime = _$Mgettime;
        _$Msetflashcookie('tck_rct', _$Mlasttime, 3650, _$Mdomain)
    }
    if (_$Mgettime - _$Mlasttime >= 43200000) {
        _$Msetflashcookie('tck_rc', ++_$Mreturncount, 3650, _$Mdomain);
        _$Msetflashcookie('tck_rct', _$Mgettime, 3650, _$Mdomain)
    } else {
        _$Mreturncount = _$Mreturncount
    }
	function _$Mgd(d)
	{
		if( _$Mdomain.length <= 0 )
		{
			var s = d.split('.');
			if( s.length >= 3 )
			{
				// ip,域名
				//s[0] = '';
				_$Mdomain = s.join('.');
			}
			else
			{
				_$Mdomain = '.'+d;
			}
		}
	}
	function _$Mgt() {
		return (new Date()).getTime();
	}
	function _$Mencode(s){
		return (typeof(encodeURIComponent)=="function")?encodeURIComponent(s):escape(s);
	}
	function _$Mdecode(s){
		return (typeof(decodeURIComponent)=="function")?decodeURIComponent(s):unescape(s);
	} 
	function _$Mid(id)
	{
		return _$Mdocument.getElementById(id);
	}
	function _$Mname(name)
	{
		return _$Mdocument.getElementsByName(name);
	}
    function _$Munique() {
		var T = new Date();
        var Y = T.getYear();
        var M = T.getMonth()+1;
        var D = T.getDate();
        var H = T.getHours();
        var I = T.getMinutes();
        var S = T.getSeconds();
        var MS = T.getMilliseconds();
		Y = Y < 1900 ? Y + 1900 : Y;
		Y = (Y - 2000) <= 0 ? '10' : (Y - 2000);
		M = M < 10 ? '0'+''+M : M;
		D = D < 10 ? '0'+''+D : D;
		H = H < 10 ? '0'+''+H : H;
		I = I < 10 ? '0'+''+I : I;
		S = S < 10 ? '0'+''+S : S;
		MS = (MS + 999)+'';
		return '_ck'+Y+''+M+''+D+''+H+''+I+''+S+''+MS.substr(0,3)+''+Math.uuid(14,14);
    }
	function _$MgetYMD()
	{
		var T = new Date();
        var Y = T.getYear();
        var M = T.getMonth()+1;
        var D = T.getDate();
		Y = Y < 1900 ? Y + 1900 : Y;
		M = M < 10 ? '0'+''+M : M;
		D = D < 10 ? '0'+''+D : D;
		return Y+'-'+M+'-'+D;
	}
    function _$Mreadflashcookie(name) 
	{
		var cV = fcV = '';
		if ( !_$Mphpstat_flash_object && !_$Mcookie ) 
		{
			return 'not_support_cookie';
		}
        if (_$Mphpstat_flash_object) 
		{
            fcV = _$Mtypeof(_$Mphpstat_flash_object.get(name));
        }
        if (_$Mcookie) 
		{
			cV = _$Mtypeof(_$Mreadcookie(name));
			if( cV !== fcV && fcV )
			{
				cV = fcV;
				_$Msetcookie(name, fcV, 3650, _$Mdomain);
			}
			if( fcV === '' && cV && _$Mphpstat_flash_object )
			{
				_$Msetflashcookie(name, cV, 3650, _$Mdomain);
			}
        }
        return cV;
    }
    /** 跨域cookie获取,以半角逗号分隔 */
    function _$Mreadcookie(name) {
        var cV = end = '';
        var v = name + '=';
        if(_$Mck != null && _$Mck.length > 0) {
        	var p = _$Mck.indexOf(v);
    		if (p > -1) {
    			p += v.length;
    			end = _$Mck.indexOf(",", p);
    			if (end == -1) {end = _$Mck.length;};
    			cV = _$Mdecode(_$Mck.substring(p, end));
    		}
    		return _$Mtypeof(cV);
        } else {
        	return "";
        }
	}
    /** 非跨域cookie获取 */
	function _$MreadcookieCur(name)
	{
        var cV = end = '';
        var v = name + '=';
		if (_$Mcookie) 
		{
			var p = _$Mdocument.cookie.indexOf(v);
			if (p > -1) {
				p += v.length;
				end = _$Mdocument.cookie.indexOf(";", p);
				if (end == -1) {end = _$Mdocument.cookie.length;};
				cV = _$Mdecode(_$Mdocument.cookie.substring(p, end));
			}
			return _$Mtypeof(cV);
		}
		else
		{
			return 'not_support_cookie';
		}
	}
    function _$Msetflashcookie(name, gv, h, d) 
	{
		if ( !_$Mphpstat_flash_object && !_$Mcookie ) 
		{
			return 'not_support_cookie';
		}
        if (_$Mphpstat_flash_object) {
            _$Mphpstat_flash_object.set(name, gv);
        }
		if (_$Mcookie)
		{
			_$Msetcookie(name, gv, h, d);
		}
    }
    /** 跨域写cookie，参数列表：name,value,时间,domain */
    function _$Msetcookie(name, gv, h, d) {
        var v = '';
    	var exh = parseInt(h);
    	if(exh <=0) {
    		exh = parseFloat(h);
    	}
        //v = new Date(_$Mgt() + exh*24*60*60*1000);
        //v = '; expires=' + v.toGMTString();
        //_$Mdocument.cookie = name + '=' + _$Mencode(gv) + v + ';domain='+d+';path=/;';
        if(_$MckSet != null && _$MckSet.length > 0) {
        	_$MckSet += ';';
        }
        _$MckSet += name + ',' + _$Mencode(gv) + ',' + exh*24;
    }
    /** 非跨域写cookie */
    function _$MsetcookieCur(name, gv, h, d) 
	{
        var v = '';
        if (_$Mcookie) {
        	var exh = parseInt(h);
        	if(exh <=0) {
        		exh = parseFloat(h);
        	}
            v = new Date(_$Mgt() + exh*24*60*60*1000);
            v = '; expires=' + v.toGMTString();
            _$Mdocument.cookie = name + '=' + _$Mencode(gv) + v + ';domain='+d+';path=/;';
        }
		else
		{
			return 'not_support_cookie';
		}
    }
	function _$Mtestnull(r)
	{
		if( typeof(r) === null || r === null )
		{
			return false;
		}
		else if( typeof(r) === 'undefined' || r === 'undefined' )
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	function _$Mteststr(r)
	{
		if( typeof(r) === null || r === null )
		{
			return '';
		}
		else if( typeof(r) === 'undefined' || r === 'undefined' )
		{
			return '';
		}
		else if( r === '' )
		{
			return '';
		}
		else
		{
			return r;
		}
	}
    function _$Mgeturlparam(u) {
        var i = 0,j = 0;
		var h = '',p = '';
        if ((i = u.indexOf("://")) < 0 && u.length > 0) {return {h:u,p:''}};
        u = u.substring(i + 3);
		h = u.substring(0, u.indexOf('/'));
        if ((i = u.indexOf("/")) > -1) {			
			if ((j = u.indexOf('#clickmapcode=')) > -1) 
			{
				p = u.substring(i, j);
			}
			else
			{
				p = u.substring(i);
			}
        };
        return {h:h,p:p}
    }
	function _$Mgeturlkey(u,k)
	{
		var i,j,h='';
		if ((i = u.indexOf('?'+k+'=')) > -1 || (i = u.indexOf('&'+k+'=')) > -1)
		{
			h = u.substring(i+2+k.length);
			j = h.indexOf('&');
			j = j <= 0 ? h.length : j;
			{
				h = h.substring(0,j);
			}
		}
		return h;
	}
    function _$Mgetkeyword(u,b) {
        var v,dv,i, j, h, k, rk, e, ek, f, p = 10;
        u = u.toLowerCase();
        h = _$Mgeturlparam(u).h;
		if( b == '_' ){b = '';}
        for (var ii = 0; ii < _$Msearchkey.length; ii++) {
            if (h.toLowerCase().indexOf('.'+_$Msearchkey[ii].toLowerCase()+'.') > -1) {
                if ((i = u.indexOf('?' + _$Mkeyword[ii] + '=')) > -1 || (i = u.indexOf('&' + _$Mkeyword[ii] + '=')) > -1) {
                    k = u.substring(i + _$Mkeyword[ii].length + 2);
					if(_$Msearchtype[ii]=='default')
					{_$Mkeywordsource = _$Msearchkey[ii]+b+'::'+k;}
					_$Mkeywordkey = k;
                    v = '&KW=' + k + '&WC=' + _$Msearchtype[ii] + '&WP=' + _$Msearchkey[ii]+b;
                    if ((i = k.indexOf('&')) > -1) {
                        k = k.substring(0, i);
						if(_$Msearchtype[ii]=='default')
						{_$Mkeywordsource = _$Msearchkey[ii]+b+'::'+k;}
						_$Mkeywordkey = k;
                        v = '&KW=' + k + '&WC=' + _$Msearchtype[ii] + '&WP=' + _$Msearchkey[ii]+b
                    }
                }
                if ((i = u.indexOf('?' + _$Mkeywordrelated[ii] + '=')) > -1 || (i = u.indexOf('&' + _$Mkeywordrelated[ii] + '=')) > -1) {
                    k = u.substring(i + _$Mkeywordrelated[ii].length + 2);
                    rk = '&RW=' + k;
                    if ((i = k.indexOf('&')) > -1) {
                        k = k.substring(0, i);
                        rk = '&RW=' + k
                    }
                }
            }
        };
		v = v ? v : dv;
        if (_$Mtypeof(v) === '') {return '';}
        else if (rk) {return v + rk;}
        else {return v}
    }
    function _$Mgetmap(u) {
        var c = '';
        var s = new Array();
        if (u.indexOf('#clickmapcode=') > -1) {
            c = u.substring(14);
            s = c.split('|');
			s[2] = s[2] === '' ? _$Mwebsite : s[2];
            _$Msetcookie('NCtrackMap', s[0], 1, _$Mdomain);
            _$Msetcookie('NCtrackMap_Type', s[1], 1, _$Mdomain);
            _$Msetcookie('NCtrackMap_Code', s[2], 1, _$Mdomain);
            _$Msetcookie('NCtrackMap_Site', s[3], 1, _$Mdomain);
            _$Msetcookie('NCtrackMap_Position', s[4], 1, _$Mdomain);
            _$Msetcookie('NCtrackMap_Start_Date', s[5], 1, _$Mdomain);
            _$Msetcookie('NCtrackMap_End_Date', s[6], 1, _$Mdomain);
            _$Msetcookie('NCtrackMap_Server', s[7], 1, _$Mdomain);
            return {
                a: s[0],
                b: s[1],
                c: s[2],
                d: s[3],
                e: s[4],
                f: s[5],
                g: s[6],
                h: s[7]
            }
        } else if (_$Mreadcookie('NCtrackMap') && _$Mreadcookie('NCtrackMap_Code') && _$Mreadcookie('NCtrackMap_Site')) {
            s[0] = _$Mreadcookie('NCtrackMap');
			s[1] = _$Mreadcookie('NCtrackMap_Type');
            s[2] = _$Mreadcookie('NCtrackMap_Code');
            s[3] = _$Mreadcookie('NCtrackMap_Site');
            s[4] = _$Mreadcookie('NCtrackMap_Position');
            s[5] = _$Mreadcookie('NCtrackMap_Start_Date');
            s[6] = _$Mreadcookie('NCtrackMap_End_Date');
            s[7] = _$Mreadcookie('NCtrackMap_Server');
            return {
                a: s[0],
                b: s[1],
                c: s[2],
                d: s[3],
                e: s[4],
                f: s[5],
                g: s[6],
                h: s[7]
            }
        } else {return {
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
            f: '',
            g: '',
            h: ''
        }}
    }
	function _$Mgettag(u) {
        var c = '';
        var s = new Array();
        if (u.indexOf('#tagcontent=') > -1) {
            c = u.substring(12);
            s = c.split('|');
			return {
                a: s[0],
                b: s[1]
            }
		}
		else
		{
			return {
                a: '',
                b: ''
            }
		}
    }
	function _$Mgetpagetag(u) {
        var c = '';
        var s = new Array();
        if (u.indexOf('#pagecontent=') > -1) {
            c = u.substring(13);
            s = c.split('|');
			return {
                a: s[0],
                b: s[1],
                c: s[2]
            }
		}
		else
		{
			return {
                a: '',
                b: '',
                c: ''
            }
		}
    }
    function _$Mjsgif(gs) {
        var gif = new Image();
        gif.onload = function () {
            gif.onload = null;
			_$Mdoimgerr_1 = 1;
        };
        gif.onerror = function () {
            _$Mdoimgerr_1++;
            if(_$Mdoimgerr_1 >= 4) {
            	return;
            }
            _$Mjsgif(gs);
        };
		if( _$Mdoimgerr_1 <= 2 )
		{
			gif.src = gs;
		};
    }
	function _$Mparseurl(u) {
		var p = new Array();
		u = u + '&phpstat';
		var c = u.replace(/^\?/,'').split('&');
		for (var b = 0; b < c.length; b++) {
			var e = c[b].split('=');
			p[e[0]] = e[1];
		}
		return p;
	}
	function _$Mtypeof(tp)
	{
		var rp=tp;
		if( tp === null ){rp = '';}
		else if( typeof(tp) === 'undefined' ){rp = '';}
		else if( typeof(tp) === 'object' ){rp = '';}
		return rp;
	}
	function _$Msetfirst(fvar, nvalue)
	{
		if( _$Mtypeof(fvar) == '' )
		{			
			_$Msetcookie('tck_Msrc_First', nvalue, 30, _$Mdomain);
		}
	}
	var _$Mjava = 0;
    if (navigator.javaEnabled()) {_$Mjava = '1';}
    //var _$Mbrowser = /(firefox|netscape|opera|myie|tencenttraveler|theworld|safari|maxthon|webtv|msn|konqueror|lynx|ucweb|360se|se|sogou|greenbrowser|netcaptor|chrome)/.exec(_$Museragent);
    var _$Mbrowser = /\b(firefox|netscape|opera|myie|tencenttraveler|theworld|safari|maxthon|webtv|msn|konqueror|lynx|ucweb|360se|se|sogou|greenbrowser|netcaptor|chrome|mqq|qq|msie|ucbrowser|rv:11\.0)\b/.exec(_$Museragent);
    if (!_$Mbrowser) {_$Mbrowser = /(msie) ([0-9\.]*)[^;)]/.exec(_$Museragent);}
    _$Mbrowser = _$Mbrowser === null ? 'other' : _$Mbrowser[0];
    //var _$Msystem = /(windows nt|windows|unix|linux|sunos|bsd|redhat|macintosh) ([0-9\.]*)[^;)]/.exec(_$Museragent);
  var _$Msystem = /(windows nt|windows|unix|linux|sunos|bsd|redhat|macintosh|mac os|android) ([\w\d\.]*)\b/.exec(_$Museragent);
	_$Msystem = _$Msystem === null ? 'other' : _$Msystem[0];
  var _$Malexa			= (_$Museragent.indexOf('alexa') !== -1) === false ? '0' : '1';
  var _$MisApp = _$Museragent.indexOf('com.bankcomm.maidanba') == -1 ? '0' : '1';
	var _$Mflash			= _$Mflashok.f;
    var _$Mpathname		= _$Mdocument.location.pathname;
	var _$Mfreferrer		= _$Mgeturlparam(_$Mreferrer);
    var _$Mfreferrerhost = _$Mfreferrer.h;
    var _$Mref			= _$Mencode(_$Mfreferrer.p);
    var _$Mmapcode		= _$Mgetmap(_$Mdocument.location.hash);
    var _$Mtagcode		= _$Mgettag(_$Mdocument.location.hash);
    var _$Mpagecode		= _$Mgetpagetag(_$Mdocument.location.hash);
    var _$Msearch		= _$Mdocument.location.search;
	if( _$Mdocument.location.hash && 0 )
	{
		_$Msearch		= _$Msearch + _$Mdocument.location.hash;
	}
	_$Mpathname			= _$Mencode(_$Mpathname + _$Msearch);
	var _$Mmain_website	= _$Mreadflashcookie('tck_Main_Website');
	_$Mpartner_website	= _$Mreadflashcookie('tck_Partner');
	_$Mmediumsource		= _$Mreadflashcookie('tck_Msrc');
	_$Mmediumchannel		= _$Mreadflashcookie('tck_msch');
	_$Mmediumsourcetype	= _$Mreadflashcookie('tck_Msrc_Type');
	_$Mmediumsourcefirst	= _$Mreadflashcookie('tck_Msrc_First');
	_$Medmemail			= _$Mreadflashcookie('tck_Edm');
	_$Mfriendlink		= _$Mreadcookie('tck_Market_QQ');
	_$MfriendlinkN		= _$Mreadcookie('tck_Market_QQ_Number');
	var _$Mparseurlarr	= _$Mparseurl(_$Msearch);
	var _$Mpmf_key		= _$Mtypeof(_$Mparseurlarr['k']);
	var _$Mpmf_from		= _$Mtypeof(_$Mparseurlarr['f']);
	var _$Mpmf_key_macth = _$Mtypeof(_$Mparseurlarr['m']);
	var _$Mpmf_key_word  = _$Mtypeof(_$Mparseurlarr['w']);
	var _$Mpmf_key_id	= _$Mtypeof(_$Mparseurlarr['kid']);
	var _$Mpmf_key_tid	= _$Mtypeof(_$Mparseurlarr['tid']);
	var _$Mpmf_gclid		= _$Mtypeof(_$Mparseurlarr['gclid']);
	var _$Mpmf_bdclkid	= _$Mtypeof(_$Mparseurlarr['bdclkid']);
    var _$Mpmf_group		= _$Mtypeof(_$Mparseurlarr['pmf_group']);
    var _$Mpmf_medium	= _$Mtypeof(_$Mparseurlarr['pmf_medium']);
    var _$Mpmf_source	= _$Mtypeof(_$Mparseurlarr['pmf_source']);
    var _$Mpmf_match		= _$Mtypeof(_$Mparseurlarr['pmf_match']);
    var _$Mpmf_keyword	= _$Mtypeof(_$Mparseurlarr['pmf_keyword']);
    var _$Mpmf_partner	= _$Mtypeof(_$Mparseurlarr['pmf_partner']);
    var _$Mpmf_email		= _$Mtypeof(_$Mparseurlarr['pmf_email']);
    var _$Mpmf_area		= _$Mtypeof(_$Mparseurlarr['pmf_area']);
    var _$Mpmf_id		= _$Mtypeof(_$Mparseurlarr['pmf_id']);
    var _$Mpmf_tid		= _$Mtypeof(_$Mparseurlarr['pmf_tid']);
	var _$Mpmf_tui_id	= _$Mpmf_tid ? _$Mpmf_tid : _$Mpmf_key_tid;
	if (_$Mpmf_tui_id) {
        _$Msetflashcookie('tck_From_Id', _$Mpmf_tui_id, 3650, _$Mdomain);
    }
	else
	{
		_$Mpmf_tui_id = _$Mreadflashcookie('tck_From_Id');
	}
	if(_$Mpagecode.a && _$Mpagecode.b && _$Mpagecode.c)
	{
		var ac = 'pageab_'+_$Mpagecode.a+'_'+_$Mpagecode.c;
		_$Msetflashcookie('tck_Page_AB_' + _$Mpagecode.a, _$Mpagecode.c, 3650, _$Mdomain);
		_trackData.push(['clk','HTML',ac,'','','','','','','1','1','1','','','','0']);
	}
	
	var _$Mutm_array = new Array();
	var _$Mutm_array_str = new Array();
    _$Mutm_array['utm_source']	= _$Mtypeof(_$Mparseurlarr['utm_source']);
	_$Mutm_array['utm_content']	= _$Mtypeof(_$Mparseurlarr['utm_content']);
	_$Mutm_array['utm_term']		= _$Mtypeof(_$Mparseurlarr['utm_term']);
    _$Mutm_array['utm_medium']	= _$Mtypeof(_$Mparseurlarr['utm_medium']);
    var _$Mutm_id		= _$Mtypeof(_$Mparseurlarr['utm_id']);
	var _$Msid = 0;
	for(var $kk in _$Mutm_array)
	{
		if( _$Mutm_array[$kk] )
		{
			_$Mutm_array_str[_$Msid] = _$Mutm_array[$kk];_$Msid++;
		}
	}
	if( _$Mutm_array['utm_source'] && _$Mpmf_medium === '' )
	_$Mpmf_medium = 'market_type_'+_$Mutm_array['utm_source'];
	if( _$Mutm_array['utm_term'] && _$Mpmf_keyword === '' )
	_$Mpmf_keyword = _$Mutm_array['utm_term'];
	if( _$Mutm_id && _$Mpmf_id === '' )
	_$Mpmf_id = _$Mutm_id;
	_$Mpmf_source = _$Mpmf_source === '' ? _$Mutm_array_str.join("_") : _$Mpmf_source;
	_$Mpmf_source = _$Mpmf_source.substring(0, 128).toLowerCase();
    var _$Mpstac			= _$Mtypeof(_$Mparseurlarr['pstac']);
	if( ( _$Mpmf_medium && _$Mpmf_source ) || ( ( _$Mpmf_gclid || _$Mpmf_bdclkid ) && _$Mpmf_key !== 'ppc' ) )
	{
		_$Mpmf_key = 'ppc';
	}
	var _$Mpmf_channel = _$Mpmf_medium;
	var _$Msearchkeyword  = _$Mgetkeyword(_$Mreferrer,'_'+_$Mpmf_key);
	if (_$Mpmf_medium && _$Mpmf_source) {
        _$Mmediumsource = _$Mpmf_group+'::'+_$Mpmf_medium+'::'+_$Mpmf_source+'::'+_$Mkeywordsource+'::'+_$Mpmf_match+'::'+_$Mpmf_keyword+'::'+_$Mfreferrerhost+'::'+_$Mpmf_id+'::pmf_from_adv';
        _$Msetflashcookie('tck_Msrc', _$Mmediumsource, 3650, _$Mdomain);
        _$Msetflashcookie('tck_Msrc_Type', 'pmf_from_adv', 3650, _$Mdomain);
        _$Msetfirst(_$Mmediumsourcefirst, _$Mmediumsource);
    }
	else if (_$Mpmf_key && _$Mpmf_from && _$Mmediumsourcetype !== 'pmf_from_adv') {
		_$Mpmf_channel = 'market_type_paid_search';
		_$Mmediumsource = _$Mpmf_group+'::market_type_paid_search::::'+_$Mkeywordsource+'::'+_$Mpmf_key_macth+'::'+_$Mpmf_key_word+'::'+_$Mfreferrerhost+'::'+_$Mpmf_key_id+'_'+_$Mpmf_from+'_'+_$Mpmf_key+'::pmf_from_paid_search';
        _$Msetflashcookie('tck_Msrc', _$Mmediumsource, 3650, _$Mdomain);
        _$Msetflashcookie('tck_Msrc_Type', 'pmf_from_paid_search', 3650, _$Mdomain);
        _$Msetfirst(_$Mmediumsourcefirst, _$Mmediumsource);
    }
	else if (_$Mkeywordsource && _$Mmediumsourcetype !== 'pmf_from_paid_search') {
		_$Mpmf_channel = 'market_type_free_search';
		_$Mmediumsource = _$Mpmf_group+'::market_type_free_search::::'+_$Mkeywordsource+'::::::'+_$Mfreferrerhost+'::::pmf_from_free_search';
        _$Msetflashcookie('tck_Msrc', _$Mmediumsource, 3650, _$Mdomain);
        _$Msetflashcookie('tck_Msrc_Type', 'pmf_from_free_search', 3650, _$Mdomain);
        _$Msetfirst(_$Mmediumsourcefirst, _$Mmediumsource);
    }
	if (_$Mpmf_partner) {
        _$Mpartner_website = _$Mpmf_partner;
        _$Msetflashcookie('tck_Partner', _$Mpartner_website, 3650, _$Mdomain)
    }
	if (_$Mpmf_email) {
        _$Medmemail = _$Mpmf_group+'::'+_$Mpmf_medium+'::'+_$Mpmf_source+'::'+_$Mpmf_email+'::'+_$Mpmf_area+'::pmf_from_edm';
        _$Msetflashcookie('tck_Edm', _$Medmemail, 3650, _$Mdomain)
    }
	var _$Mtheday = _$MgetYMD();
	var _$Mthedaysvae = false;
	if( _$Mpmf_channel == '' )
	{
		if( _$Mfreferrerhost )
		{
			_$Mpmf_channel = 'market_type_other';
		}
		else
		{
			_$Mpmf_channel = 'market_type_direct_input';
		}
	}
	if( _$Mpmf_channel && _$Mmediumchannel.indexOf(_$Mtheday) <= -1 )
	{
		if( _$Mmediumchannel )
		{
			_$Mmediumchannel = _$Mpmf_channel+"|"+_$Mtheday;
		}
		else
		{
			_$Mmediumchannel = _$Mpmf_channel+"|"+_$Mtheday;
		}
		_$Mthedaysvae = true;
	}
	if (_$Mmediumchannel && _$Mthedaysvae) {
		var _$Mkkd = 0;
		var _$Mmediumchannel_new_array = new Array();
		var _$Mmediumchannel_array = _$Mmediumchannel.split("::");
		// 修改原因:数组循环有问题,最后一个kk是remove ,值是一个方法
		var arrLen = _$Mmediumchannel_array.length;
		var i = 1;
		for( var $kk in _$Mmediumchannel_array ) {
			if(i>arrLen)break;
			var _$Moneday = _$Mmediumchannel_array[$kk].split("|");
			var _$Monedaytime = new Date(_$Moneday['1']);
			if( _$Monedaytime > ( _$Mgettime - 86400000 * 3 ) ) {
				_$Mmediumchannel_new_array[(_$Mkkd++)] = _$Mmediumchannel_array[$kk];
			}
			i++;
		}
		_$Mmediumchannel = _$Mmediumchannel_new_array.join("::");
        _$Msetflashcookie('tck_msch', _$Mmediumchannel, 3650, _$Mdomain)
    }
	var _$Mmain_website_str = _$Musercookie+'|'+_$Mwebsite+'|'+_$Mteststr(_$Mpartner_website)
		+'|'+_$Mteststr(_Schannel_website_id)+'|'+_$Mteststr(_Schannel_webshop_id);

	if( _$Mmain_website === '' || _$Mmain_website !== _$Mmain_website_str )
	{
		//_$Msetflashcookie('tck_Main_Website_'+ _$Mwebsite, _$Mmain_website_str, 3650, _$Mdomain);
	}
	_$Mmediumsourcefirst = _$Mmediumsourcefirst == _$Mmediumsource ? 'same' : _$Mmediumsource;
    //var _$Mcourl = _$Mcounturl_logcount + '?WS=' + _$Mwebsite + '&SWS='+_$Mteststr(_$Mpartner_website)+'&SWSID='+_$Mteststr(_Schannel_website_id)+'&SWSPID='+_$Mteststr(_Schannel_webshop_id)+'&AP='+_$MisApp+'&RD=common&TDT='+_$Mteststr(_trackDataType)+'&UC=' + _$Musercookie + '&LUC=' + (_$Mlusercookie==_$Musercookie?'same':_$Mlusercookie) + '&USAG=' + _$Mencode(_$Museragent) + '&FS=' + _$Mfreferrerhost + '&RF=' + _$Mref + '&PS=' + _$Mhostname + '&PU=' + _$Mpathname + _$Msearchkeyword + '&PT=' + _$MPageType + '&PER=' + _$Miserror + '&PC=' + _$Mencode(_$MPagePic) + '&PI=' + _$MPageId + '&LM=' + _$Mlastmodify + '&LG=' + _$Mlanguage + '&CL=' + _$Mcolor + '&CK=' + _$Mcookie + '&SS=' + _$Mscreensize + '&SCW=' + _$Mclientwidth + '&SCH=' + _$Mclientheight + '&SSH=' + _$Mscrollheight + '&FT=' + _$Mfirsttime + '&LT=' + _$Mlasttime + '&DL=' + _$Mdowntime + '&FL='+_$Mflash+'&CKT='+cookietype+'&JV='+_$Mjava+'&AL=' + _$Malexa + '&SY=' + _$Mencode(_$Msystem) + '&BR=' + _$Mencode(_$Mbrowser) + '&TZ=' + (new Date()).getTimezoneOffset() / 60 + '&AU=' + _$MAuthor + '&UN=' + _$Mencode(_$Musername) + '&UID=' + _$Mencode(_$Muserid) + '&URT=' + _$Mencode(_$Muserregtime) + '&UA=' + _$Mencode(_$Muserage) + '&US=' + _$Mencode(_$Musersex) + '&TID=' + _$Mencode(_$Mpmf_tui_id) + '&MT=' + _$Mtelphone + '&FMSRC='+_$Mencode(_$Mmediumsourcefirst)+'&MSRC='+_$Mencode(_$Mmediumsource)+'&MSCH='+_$Mencode(_$Mmediumchannel)+'&EDM='+_$Mencode(_$Medmemail)+'&RC=' + _$Mreturncount + '&SHPIC=&MID=' + _$Mrandomid + '&TT=' + _$Mencode(_$Mtitle) + '&random='+Math.random();
    var _$Mcourl = _$Mcounturl_logcount + '?WS=' + _$Mwebsite + '&SWSID='+_$Mteststr(_Schannel_website_id)+'&RD=common&AP='+_$MisApp+'&UC=' + _$Musercookie + '&SID=' + _$MsessionId + '&RC=' + _$Mreturncount +'&EF='+_$MeffectiveVisitor+ '&UID=' + _$Mencode(_$Muserid) + '&UN=' + _$Mencode(_$Musername) + '&MT=' + _$Mtelphone + '&SY=' + _$Mencode(_$Msystem) + '&BR=' + _$Mencode(_$Mbrowser) +"&CT="+_$Mencode(_$Mcity) + _$Msearchkeyword + '&FT=' + _$Mfirsttime + '&LT=' + _$Mlasttime + '&PS=' + _$Mhostname + '&PU=' + _$Mpathname + '&FS=' + _$Mfreferrerhost + '&MSCH='+_$Mencode(_$Mmediumchannel)+'&TID=' + _$Mencode(_$Mpmf_tui_id) + '&MSRC='+_$Mencode(_$Mmediumsource)+'&USAG=' + _$Mencode(_$Museragent) + '&RF=' + _$Mref + '&LG=' + _$Mlanguage + '&TZ=' + (new Date()).getTimezoneOffset() / 60 + '&LUC=' + (_$Mlusercookie==_$Musercookie?'same':_$Mlusercookie) + '&CKT='+cookietype+'&FMSRC='+_$Mencode(_$Mmediumsourcefirst)+'&EDM='+_$Mencode(_$Medmemail)+'&CL=' + _$Mcolor + '&CK=' + _$Mcookie + '&SS=' + _$Mscreensize + '&SCW=' + _$Mclientwidth + '&SCH=' + _$Mclientheight + '&SSH=' + _$Mscrollheight + '&TT=' + _$Mencode(_$Mtitle) + '&SWS='+_$Mteststr(_$Mpartner_website)+'&SWSPID='+_$Mteststr(_Schannel_webshop_id)+'&TDT='+_$Mteststr(_trackDataType)+'&PT=' + _$MPageType + '&PER=' + _$Miserror + '&PC=' + _$Mencode(_$MPagePic) + '&PI=' + _$MPageId + '&LM=' + _$Mlastmodify + '&DL=' + _$Mdowntime + '&FL='+_$Mflash+'&JV='+_$Mjava+'&AL=' + _$Malexa + '&AU=' + _$MAuthor + '&URT=' + _$Mencode(_$Muserregtime) + '&UA=' + _$Mencode(_$Muserage) + '&US=' + _$Mencode(_$Musersex) + '&SHPIC=&MID=' + _$Mrandomid + '&random='+Math.random();
    var _$Mclickhotokstr = true;
	var _$Mformhiddenloop = 1;	
var _$Mclickhot;
var _$Mdoimgerr_2 = 1;
var _$Mclickhotok = 0;
var _$Mmessageid = '';
var _$Mformhidden = 0||0;
var _$Mclickarray = new Array();
var _$Mcf_f = 1||0;
var _$Mcfre_f = 1||0;
_$Mclickarray[0]='clickhotall';;
var _$Mclickreg = '';
if (_$Mclickarray[0] == 'clickhotall') {
    _$Mclickhotok = 1
}
function _$Mdotest(r)
{
	r = r+'';
	r = r.replace(/\\/g, '\\/');
	r = r.replace(/\//g, '\\/');
	r = r.replace(/\*/g, '(.*)');
	return r;
}
if (_$Mclickhot !== 'clickhot' && _$Mclickarray[0] !== 'clickhotall') {
    for (var ci = 0; ci < _$Mclickarray.length; ci++) {
        if (_$Mclickarray[ci].lastIndexOf('*') > - 1) {
            _$Mclickarray[ci] = _$Mdotest(_$Mclickarray[ci]);
            if (_$Mclickarray[ci].indexOf('/') === 0) {
                _$Mclickarray[ci] = _$Mclickarray[ci].substring(1)
            }
            _$Mclickreg = eval('/' + _$Mclickarray[ci] + '/ig');
            if (_$Mclickreg.test(_$Mpathname)) {
                _$Mclickhotok = 1;
                break
            }
        } else {
            if (_$Mclickarray[ci].indexOf('/') !== 0) {
                _$Mclickarray[ci] = '/' + _$Mclickarray[ci]
            }
            if (_$Mclickarray[ci] == _$Mpathname) {
                _$Mclickhotok = 1;
                break
            }
        }
    }
}
var _$Mclienturlstr = '';
var _$Mposarr = new Array();

function _$Mtimelong(ini) {
    var tl = _$Mgt() - _$Mstarttime;
    if (tl >= _$MstayTime) {
        tl = 1000
    }
    if (ini) {
        tl = _$Mgt() - _$Mtimestart;
        _$Mtimestart = _$Mgt()
    }
    tl <= 0 ? 0 : tl;
    return tl
}
function _$Msetformfield(a,b)
{
	if( typeof( _$Mformfielddetails[a][b] ) == null || typeof( _$Mformfielddetails[a][b] ) == 'undefined' )
	{
		_$Mformfielddetails[a][b] = {change:0,onkey:0,times:0,focus:0,errors:0,submits:0,inputinfo:0};
	}
}
function _$Minitevent(init) {
	var _$Mfn;
	var _$Mfc;
	// safari
	if(typeof(window.onpagehide) != 'undefined' 
			&& (_$Mtelphone||_$Museragent.indexOf('pad')>-1)) {
		window.onpagehide = _$Mpagehide;
	}
	// 修改原因:记录网页关闭动作
    _$Maddlistener(window, 'unload', _$Mwinclose);
    _$Maddlistener(window, 'blur', _$Munload);
	
	if( _$Mcf_f )
	{
		for (var a = 0; a < _$Mdocument.forms.length; a++) {
			_$Mfn = _$Mdocument.forms.item(a);
			_$Mfc = _$Mfn.name || _$Mfn.id;
			if( _$Mfc && _$Mcfre_f )
			{
				_$Mformlist = _$Mformlist + _$Mfc + "::" + _$Mfn.action + "||";
				_$Mformdetails[_$Mfc] = {change:0,onkey:0,times:0,focus:0,submits:0,errors:0,inputinfo:0};
				_$Mformfielddetails[_$Mfc] = {};
			}
			_$Minitform(_$Mfn);
		}
		_$Mgetelementby(['form'], ['submit'], _$Msubmit);
		_$Mgetelementby(['select', 'input', 'textarea'], ['change'], _$Mchangeselect);
		_$Mgetelementby(['select', 'input', 'textarea','button','iframe','object'], ['blur'], _$Mfocus);
		// 修改原因:点击select,input,textarea,button,iframe会生成两条点击记录,因为点击document时也绑定了click事件
		//_$Mgetelementby(['select', 'input', 'textarea','button','iframe','object'], ['click'], _$Mclick);
		// 仍有一问题,当点击视频,音频类标签时,获取不到点击数据
		_$Mgetelementby(['object'], ['click'], _$Mclick);
	}

     if (init && 1) {
        _$Maddlistener(_$Mdocument, 'click', _$Mclick);
        _$Maddlistener(_$Mdocument, 'mousemove', _$Mmousemove)
    }
    if (init && _$Mcf_f) {
		//_$Maddlistener(_$Mdocument, 'keydown', _$Mkeydown);
		_$Maddlistener(_$Mdocument, 'keyup', _$Mkeyup);
    }
}
function _$Mrecord(a) {
    var s = '';
    if (parseInt(Math.random() * 100) < 0*10 && a.a === 'msmv') return;
    switch (a.a) {
    case 'msmv':
        s = '||' + a.a + '::' + a.t + '::' + a.x + '::' + a.y;
        _$Mcountdourl(s);
        break;
    case 'clk':
    case 'fus':
    case 'link':
    case 'chn':
    case 'down':
    case 'onkey':
    case 'clkout':
    case 'submit':
        s = '||' + a.a + '::' + _$Mencode(a.tn) + '::' + _$Mencode(a.i) + '::' + _$Mencode(a.n) + '::' + a.tp + '::' + _$Mencode(a.v) + '::' + _$Mencode(a.h) + '::' + _$Mencode(a.u) + '::' + a.t + '::' + a.x + '::' + a.y + '::' + a.p + '::' + _$Mencode(a.fn) + '::' + _$Mencode(a.fa) + '::' + a.e + '::' + a.ef + '::' + _$Mencode(a.msg) + '::' + _$Mencode(a.ak);
        _$Mcountdourl(s);
        break;
    default:
        _$Mcountdourl(a.a);
        break
    }
}
function _$Munload() {
	_$Mloadgif(_$Mclienturlstr);
	_$Mclienturlstr = ''
}
// 回调函数-unload,页面关闭动作采集
function _$Mpagehide() {
	_$MpageClose++;
	_trackData.push(['uld',_$Mtimelong(0)]);
	_$Munload();
}
function _$Mwinclose() {
	if(_$MpageClose>0) {
		// 判断是否已经记录uld动作,已记录则跳出
		return;
	}
	_$MpageClose = 0;
	// 增加页面关闭动作
	_trackData.push(['uld',_$Mtimelong(0)]);
	_$Munload();
}
function _$Mcountdourl(s) {
    _$Mclienturlstr += s;
    if (_$Mclienturlstr.length > 1024 && s) {
        _$Mloadgif(_$Mclienturlstr);
        _$Mclienturlstr = ''
    }
}
function _$Mdownload(p) {
    var ckda = new Array();
    ckda[0]='.doc';ckda[1]='.csv';ckda[2]='.xls';ckda[3]='.pdf';ckda[4]='.rar';ckda[5]='.zip';ckda[6]='.jpg';;
    var _pin = p.toLowerCase();
    for (var ckdi = 0; ckdi < ckda.length; ckdi++) {
        if (_pin.indexOf(ckda[ckdi]) > - 1) {
            return 1
        }
    }
    return 0
}
function _$Mclickout(h) {
    var ckoa = new Array();
    ckoa[0]='(*)';;
    var hi = h.toLowerCase();
    for (var ci = 0; ci < ckoa.length; ci++) {
            ckoa[ci] = _$Mdotest(ckoa[ci]);
    }
	var reg = eval('/'+ckoa.join('|')+'/ig');
	return (!reg.test(hi));
}
function _$Mtrackevent()
{
	var s = '';
	var rs = '';
	var td = window._trackData;
	if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
	{
		s = _trackEvent.trackActionUrl;
		_trackEvent.trackActionUrl = '';
	}
	else if( td && td.length )
	{
		for(var k in td)
		{
			if( !isNaN(k) )
			{
				for(var kk in td[k])
				{
					if( td[k]['0'] == 'viewgoods' )
					{
						for(var rd in _$Mrefid)
						{
							rs = _$Mtypeof(_$Mparseurlarr[rd]);
							if( rs )
							{
								td[k]['9'] = rs;
							}
						}
					}
					if( td[k]['0'] == 'userset' && td[k]['1'] == 'userid' && td[k]['2'].length )
					{					
						_$Msetflashcookie('tck_Set_User_Id', td[k]['2'], 3650, _$Mdomain);
					}
					if( td[k]['0'] == 'userset' && td[k]['1'] == 'username' && td[k]['2'].length )
					{					
						_$Msetflashcookie('tck_Set_User_Name', td[k]['2'], 3650, _$Mdomain);
					}
					if( td[k]['0'] == 'userset' && td[k]['1'] == 'age' && td[k]['2'].length )
					{					
						_$Msetflashcookie('tck_Set_User_Age', td[k]['2'], 3650, _$Mdomain);
					}
					if( td[k]['0'] == 'userset' && td[k]['1'] == 'sex' && td[k]['2'].length )
					{					
						_$Msetflashcookie('tck_Set_User_Sex', td[k]['2'], 3650, _$Mdomain);
					}
					if( td[k]['0'] == 'userregtime' && td[k]['1'] == 'regtime' && td[k]['2'].length )
					{					
						_$Msetflashcookie('tck_Set_User_Regtime', td[k]['2'], 3650, _$Mdomain);
					}
					if( _$Mtestnull(_Sorder_encode_url) === false )
					td[k][kk] = _$Mencode(td[k][kk]);
				}
				if( td[k].length == 1 )
				{
					s += '||'+td[k]['0'];
				}
				else
				{
					s += '||'+(td[k].join('::'));
				}
			}
		}
		window._trackData = [];
	}
	return s;
}
function _$Mdirecttrackevent()
{
	if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
	{
		_$Mloadgif('');
	}
	else if( window._trackData && window._trackData.length )
	{
		_$Mloadgif('');
	}
}
function _$Mloadgif(gs) {
    var gif = new Image();
	var clestr = gs + _$Mtrackevent();
	if( clestr.length <= 0 ) {return;}
    gif.onload = function () {
        gif.onload = null;
		_$Mdoimgerr_2 = 1;
    };
    gif.onerror = function () {
       _$Mdoimgerr_2++;
       if(_$Mdoimgerr_2 >= 4) {
       	return;
      }
      _$Mloadgif(gs);
    };
	if( _$Mdoimgerr_2 <= 2 )
	{
		// 增加PI参数,增加SID参数（sessionid）
		//gif.src = _$Mcounturl_logcount + '?WS=' + _$Mwebsite + '&SWS='+_$Mteststr(_$Mpartner_website)+'&SWSID='+_$Mteststr(_Schannel_website_id)+'&SWSPID='+_$Mteststr(_Schannel_webshop_id)+'&AP='+_$MisApp+'&RD=record&TDT='+_$Mteststr(_trackDataType)+'&UC=' + _$Musercookie + '&LUC=' + _$Mlusercookie + '&UN=' + _$Mencode(_$Musername) + '&UID=' + _$Mencode(_$Muserid) + '&RC=' + _$Mreturncount + '&PS=' + _$Mhostname + '&PU=' + _$Mpathname + '&PI=' + _$MPageId + '&FS=' + _$Mfreferrerhost + '&RF=' + _$Mref + '&SW=' + _$Mscreenwidth() + '&SCW=' + _$Mclientwidth + '&SCH=' + _$Mclientheight + '&SSH=' + _$Mscrollheight + '&BR=' + _$Mencode(_$Mbrowser) + '&LTL=' + Math.ceil(_$Mtimelong(1) / 1000) + '&MSRC='+_$Mencode(_$Mmediumsource)+'&EDM='+_$Mencode(_$Medmemail)+'&CLE=' + clestr + '&MID=' + _$Mrandomid+'&random='+Math.random();
		gif.src = _$Mcounturl_logcount + '?WS=' + _$Mwebsite + '&SWSID='+_$Mteststr(_Schannel_website_id)+'&RD=record&AP='+_$MisApp+'&UC=' + _$Musercookie + '&SID=' + _$MsessionId + '&RC=' + _$Mreturncount +'&EF='+_$MeffectiveVisitor+ '&UID=' + _$Mencode(_$Muserid) + '&UN=' + _$Mencode(_$Musername) + '&BR=' + _$Mencode(_$Mbrowser) + '&PS=' + _$Mhostname + '&PU=' + _$Mpathname + '&FS=' + _$Mfreferrerhost + '&CLE=' + clestr + '&MSRC='+_$Mencode(_$Mmediumsource)+'&LTL=' + Math.ceil(_$Mtimelong(1) / 1000) + '&RF=' + _$Mref + '&LUC=' + _$Mlusercookie + '&EDM='+_$Mencode(_$Medmemail)+'&SWS='+_$Mteststr(_$Mpartner_website)+'&SWSPID='+_$Mteststr(_Schannel_webshop_id)+'&TDT='+_$Mteststr(_trackDataType)+'&PI=' + _$MPageId + '&SW=' + _$Mscreenwidth() + '&SCW=' + _$Mclientwidth + '&SCH=' + _$Mclientheight + '&SSH=' + _$Mscrollheight + '&MID=' + _$Mrandomid+'&random='+Math.random();

	}
	if( _$Mpstac.toLowerCase() == 'debug' )
	_$Mmessage(gif.src);
}
function _$Maddlistener(a, b, c) {
    /*if(a==window && b=="unload") {
    	window.onunload = c;
    	return;
    } else if(a==window && b=="blur") {
    	window.onblur = c;
    	return;
    }*/
    var flg = false;
    if(a==document && b=="click") {
    	flg = true;
    }
    if (a.addEventListener) {
        a.addEventListener(b, c, flg)
    } else {
        if (a.attachEvent) {
            a.attachEvent('on' + b, c)
        }
    }
}
function _$Mclick(ev) {
    _$Mcountimg(ev);
    var b = ev.srcElement || ev.target;
    // 修改原因:单选复选按钮已经绑定onchange事件,form表单已经绑定submit事件,不必再在click事件中判断添加
    /*
    if (b && /input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
        _$Mchange(b, b.checked)
    }
	if (b && /button|img|input/i.test(b.tagName) && /submit|button/i.test(b.type)) {
        _$Msubmit_button(b, ev)
    }*/
}
function _$Mrecodeelement(ele,eleev,eleslt,type,host,url,eff,fname)
{
	var $v = $e = $x = $y = $fn = $fa = $gfn = $typekey = $p = '';
	$x = _$Mposition(ele).x;
	$y = _$Mposition(ele).y;
	$p = ele.type;
	if(type == 'fus')
	{
		$v = _$Mgetvalue(ele);
	}
	if((type == 'clk' || type == 'down' || type == 'clkout')&&ele.tagName=='A')
	{
		$v = _$Mencode(ele.innerHTML.replace(/<[^>].*?>/g, '') || '');
		$x = _$Mcltxy(eleev).x;
		$y = _$Mcltxy(eleev).y;
		$e = _$Mencode(ele.getAttribute('phpstatevent') || '');
	}
	if(type == 'clk' && ele.tagName!=='A')
	{
		$v = _$Mgetvalue(ele);
		$x = _$Mcltxy(eleev).x;
		$y = _$Mcltxy(eleev).y;
	}
	if(type == 'chn')
	{
		$e = (eleslt === true ? 1 : (eleslt === false ? 0 : eleslt));
		$v = _$Mgetvalue(ele);
	}
	if(type == 'onkey')
	{
		if((eff>=48 && eff<=57)
				|| (eff>=65 && eff<=90)
				|| (eff>=97 && eff<=122)) {
			// 0-9,a-z,A-Z
			$v = '*';
			eff = '*';
		} else {
			$v = eff;
		}
		$typekey = eleslt;
	}
	if(type == 'msmv')
	{
		$x = _$Mcltxy(eleev).x;
		$y = _$Mcltxy(eleev).y;
	}
	if((/input|textarea|select|button/i.test(ele.tagName)) || (/img/i.test(ele.tagName) && /submit|button/i.test(ele.type)))
	{		
		$gfn = _$Mgetformname(ele);
		$fn = $gfn.n;
		$fa = $gfn.a;
	}
	if(type == 'submit')
	{
		$gfn	= _$Mgetformname(ele);
		$fn		= $gfn.n;
		$fa		= $gfn.a;
	}	
	if( fname !== '' )
	{
		$fn = fname;
	}
	if( $p === 'password' && $v )
	{
		$v = '********';
	}
	$fa = '';
	var $ig={pose:'',tagid:''};
	if(type !== 'msmv')
	{
		$ig = _$Minindeof(ele);
	}
	var $fmsg = '';
	if( $fn && window._trackFormMsg && window._trackFormMsg.length > 0 )
	{
		$fmsg = window._trackFormMsg;
	}
	window._trackFormMsg = '';
	
	if( $fn && $fa && _$Mcfre_f )
	{
		var $eln_id = ele.name || ele.id;
		$eln_id = $eln_id || 'unname';
		_$Msetformfield($fn,$eln_id);
		if( $eln_id != 'unname' )
		{
			if(type == 'chn')
			{
				_$Mformdetails[$fn].change++;
				_$Mformfielddetails[$fn][$eln_id].change++;
				_$Mformdetails[$fn].inputinfo = $v;
				_$Mformfielddetails[$fn][$eln_id].inputinfo = $v;
			}
			if(type == 'onkey')
			{
				_$Mformdetails[$fn].onkey++;
				_$Mformfielddetails[$fn][$eln_id].onkey++;
			}
			if(type == 'fus')
			{
				_$Mformdetails[$fn].focus++;
				_$Mformfielddetails[$fn][$eln_id].focus++;
			}
			if(type == 'submit')
			{
				_$Mformdetails[$fn].submits++;
				_$Mformfielddetails[$fn][$eln_id].submits++;
			}
			if( $fmsg && $fmsg.indexOf('==failed') )
			{			
				_$Mformdetails[$fn].errors++;
				_$Mformfielddetails[$fn][$eln_id].errors++;
			}
			_$Mformdetails[$fn].times = _$Mtimelong(0);
			_$Mformfielddetails[$fn][$eln_id].times = _$Mtimelong(0);
		}
	}
	// 不采集value值
	if($v) {
		$v = '***';
	}
	_$Mrecord({
            a:  type,
            ak:  $typekey,
            p:  $ig.pose,
			h:  host,
            u:  url,
            t:  _$Mtimelong(0),
            n:  (_$Mtestobject(ele.name) || ''),
            i:  ($ig.tagid || _$Mtestobject(ele.id)),
            v:  $v,
            x:  $x,
            y:  $y,
            e:  $e,
            tp: (_$Mtestobject(ele.type) || ''),
            tn: (_$Mtestobject(ele.tagName) || ''),
			fn: $fn,
			fa: $fa,
            ef: eff,
			msg:$fmsg
        });
}
function _$Mfocus(ev) {
    if (!ev) {
        var ev = event
    }
    var b = ev.srcElement || ev.target;
    if (b && /input|textarea|select/i.test(b.tagName)) {
		_$Mrecodeelement(b,ev,'','fus','','',0,'');
    }
}
function _$Monkey(ev,vc) {
    if (!ev) {
        var ev = event
    }
    var b = ev.srcElement || ev.target;
	var c = ev.keyCode || ev.charCode;
    if (/input|textarea|select/i.test(b.tagName)) {
		_$Mrecodeelement(b,ev,vc,'onkey','','',c,'');
    }
}
function _$Mkeydown(ev)
{
	_$Monkey(ev,'k_d');
}
function _$Mkeyup(ev)
{
	_$Monkey(ev,'k_u');
}
function _$Mkeypress(ev)
{
	_$Monkey(ev,'k_p');
}
function _$Mcountimg(ev) {
    if (!ev) {
        var ev = event
    }
    var b = ev.srcElement || ev.target;
    var c = b;
    while (b && (!b.href || /img/i.test(b.tagName))) {
        b = b.parentNode
    }
    var gettype = 'clk';
    var chu = clkhost = clkurl = '';
    if (b) {
		chu = _$Mgeturlparam(b.href);
        clkhost = chu.h;
        clkurl = chu.p;
		_$Mrecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
        if (_$Mdownload(b.href)) {
            gettype = 'down';
			_$Mrecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
        }
        if (_$Mclickout(clkhost)) {
            gettype = 'clkout';			
			_$Mrecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
        }
    }
    if (c&&b!=c) {
        var eff = 0;var effid = 'id';
        if ((/img|input|textarea|select|a/i.test(c.tagName))) {
            eff = 1
        }
		if ((/img/i.test(c.tagName)) && chu) {
			effid = c.id || '';
		}
		if( effid == 'id' || effid )
		{
			_$Mrecodeelement(c,ev,'','clk','','',eff,'');
		}
    }
}
function _$Mscreenwidth() {
    return _$Mdocument.documentElement.scrollWidth
}
function _$Mtestnull(r)
{
	if( typeof(r) === null )
	{
		return false;
	}
	else if( typeof(r) === 'undefined' )
	{
		return false;
	}
	else
	{
		return true;
	}
}
function _$Mtestobject(r)
{
	if( typeof(r) === 'object' )
	{
		return '';
	}
	else
	{
		return r;
	}
}
function _$Minindeof(c) {
    while (c && !c.tagName) {
        c = c.parentNode
    }
    var i = 0;
    var b = c;
	var phptag = '';
	var fetchtag = 'nctag_';
    var parentnodes = new Array();
    var resultarray = new Array();
    var resultarraystr = new Array();
    while (b && b !== _$Mdocument.body && b !== _$Mdocument.documentElement) {
        var ch = 1;
        var g = new Array();
		if(!_$Mtestnull(b.parentNode)||!b.parentNode) break;
        g = b.parentNode.childNodes;
        for (var e = 0; e < g.length; e++) {
            if (g[e].tagName && g[e].tagName !== '!' && g[e].tagName !== 'SCRIPT') {
                if (g[e] == b) {
                    break
                }
                ch++
            }
        }
        parentnodes[i] = ch;
		phptag = phptag == '' ? (b.getAttribute('nctag')?b.getAttribute('nctag'):b.id) : phptag;
		if( fetchtag.length > 0 && phptag.indexOf(fetchtag) <= -1 )
		{
			phptag = '';
		}
        b = b.parentNode;
        i++
    }
    resultarray = parentnodes.reverse();
    resultarraystr = resultarray.join('-');
    return {pose:resultarraystr,tagid:phptag}
}
function _$Mgetformname(c)
{
	while (c && !c.tagName) {
        c = c.parentNode
    }
	var b = c;
	if(/input|textarea|select|img|button/i.test(c.tagName))
	{
		var i = 0;
		while ( b && b.tagName !== 'FORM' ) 
		{
			if( b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}
	}
	if( b && b.tagName == 'FORM' )
	{
		return {
			n: ((b.getAttribute('name') || b.getAttribute('id')) || ''),
			a: (b.getAttribute('action') || _$Mpathname)
		}
	}
	else
	{
		return {
			n: '',
			a: ''
		}
	}
}
function _$Mposition(b) {
    var a = {
        x: 0,
        y: 0
    };
    while (b.offsetParent) {
        a.x += parseInt(b.offsetLeft);
        a.y += parseInt(b.offsetTop);
        b = b.offsetParent
    }
    a.x += parseInt(b.offsetLeft);
    a.y += parseInt(b.offsetTop);
    return a
}
function _$Mgetxy() {
    var x = 0;
    var y = 0;
    if (_$Mdocument.body.scrollTop) {
        x = parseInt(_$Mdocument.body.scrollLeft);
        y = parseInt(_$Mdocument.body.scrollTop);
    } else {
        x = parseInt(_$Mdocument.documentElement.scrollLeft);
        y = parseInt(_$Mdocument.documentElement.scrollTop);
    };
    return {
        x: x,
        y: y
    }
}

function _$Mistable(a) {
    return (a.tagName == 'TBODY' || a.tagName == 'TR')
}
function _$Mchangeselect(c) {
    var b = c.srcElement || c.target;
    if (/input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
        _$Mchange(b, b.checked)
    } else if (/input/i.test(b.tagName) && /text/i.test(b.type)) {
        _$Mchange(b, b.value.length)
    } else if (/textarea/i.test(b.tagName)) {
        _$Mchange(b, _$Mtxt_len(b.value))
    } else if (/select/i.test(b.tagName)) {
        _$Mchange(b, b.selectedIndex)
    }
}
function _$Mchange(b, a) {
    if (b.lastvalue && b.lastvalue == a
    		&& !(/input/i.test(b.tagName) && /checkbox|radio/i.test(b.type))) {
    	// 单选复选按钮不做此判断
        return;
    };
	_$Mhiddenele(b,b);
	_$Mgetby_idname(b);
	_$Mrecodeelement(b,'',a,'chn','','',0,'');
    b.lastvalue = a;
}
function _$Mchange_com(b, a) {
    if (b.lastvalue && b.lastvalue == a) {
        return
    };
    b.lastvalue = a;
}
function _$Minitform(b) 
{
	for (var a = 0; a < b.elements.length; a++) {
		var c = b.elements[a];
		if (/input/i.test(c.tagName) && /checkbox|radio/i.test(c.type)) 
		{
			_$Mchange_com(c, c.checked);
		} 
		else
		{
			if (/input/i.test(c.tagName) && /text/i.test(c.type)) 
			{
				_$Mchange_com(c, c.value.length);
			} 
			else 
			{
				if (/textarea/i.test(c.tagName)) 
				{
					_$Mchange_com(c, _$Mtxt_len(c.value));
				} 
				else 
				{
					if (/select/i.test(c.tagName)) 
					{
						_$Mchange_com(c, c.selectedIndex);
					}
				}
			}
		}
	}
}
function _$Mtxt_len(a) {
    return a.length - (a.split("\r").length - 1)
}
function _$Mcltxy(ev) {
    if (!ev) {
        var ev = event
    }
    var y = parseInt(ev.clientY) + parseInt(_$Mgetxy().y) - parseInt(_$Mdocument.getElementsByTagName('body')[0].offsetTop);
    var x = parseInt(ev.clientX) + parseInt(_$Mgetxy().x) - parseInt(_$Mdocument.getElementsByTagName('body')[0].offsetLeft);
    if (x > 3000 || x < 0) {
        x = 0
    }
    if (y > 20000 || y < 0) {
        y = 0
    }
    return {
        x: x,
        y: y
    }
}
function _$Mmousemove(ev) {
    var t = _$Mgt();
    if ((t - _$Mloadtime) > (parseInt(0) + 1) * 500) {_$Mrecodeelement('',ev,0,'msmv','','','','');}
    _$Mloadtime = t
}

function _$Mgetvalue(a) {
    var rv = '';
    if (a.tagName == 'SELECT') {
        rv = a.options[a.selectedIndex].text || ''
    } else {
        rv = a.value || ''
    }
    rv = _$Mteststr(_$Mencode(rv.replace(/\s/g, '')));
    return rv.substring(0, 512)
}
function _$Msubmit(ev) {
    if (!ev) {
        var ev = event
    }
    var b = ev.srcElement || ev.currentTarget;
	if( b )
	{
		_$Mrecodeelement(b,ev,'','submit','','',0,'');
	}
}
function _$Mhiddenele(f,t)
{
	var loop = 1;
	while ( f && f.tagName !== 'FORM' && loop <= 10 ) 
	{
		if( f && f.tagName === 'BODY' )break;
		f = f.parentNode;
		t = f;
		loop++;
	}
	if( f && f.tagName === 'FORM' && _$Mformhiddenloop <= 10 ) 
	{
		var b = t.childNodes;
		for (var i = 0; i < b.length; i++) 
		{
			if(b[i] && b[i].tagName === 'INPUT' && (b[i].type === 'hidden'||b[i].style.display==='none')) 
			{
				var b_lastvalue = _$Mteststr(_$Mgetvalue(b[i]));
				b[i].lastvalue = _$Mteststr(b[i].lastvalue);
				if( b_lastvalue && b[i].lastvalue !== b_lastvalue )
				{
					_$Mrecodeelement(b[i],'','','chn','','',0,'');
					b[i].lastvalue = b_lastvalue;
				}
			}
			else
			{
				_$Mhiddenele(f,b[i]);
				_$Mformhiddenloop++;
			}
		}
	}
}
function _$Msubmit_button(b,ev) {
	var i = 0;
	while ( b && b.tagName !== 'FORM' && i <= 10 ) 
	{
		if( b && b.tagName == 'BODY' )break;
		b = b.parentNode;
		i++;
	}
	if( b && b.tagName == 'FORM' )
	{
		_$Mhiddenele(b,b);
		_$Mgetby_idname(b);
		_$Mrecodeelement(b,ev,'','submit','','',0,'');
	}
}
function _$Mgetby_idname(b)
{
	var i = 0;
	while ( b && b.tagName !== 'FORM' && i <= 10 ) 
	{
		if( b && b.tagName == 'BODY' )break;
		b = b.parentNode;
		i++;
	}

	if( b && b.tagName === 'FORM' && b.name && _$Mformlist && _$Mformhidden )
	{
		var gh = phpstat_do_hidden_form(b.name);
		for(var ghk in gh)
		{
			var _fidv = _$Mteststr(_$Mid(gh[ghk]['ffield']));
			if( _fidv === '' )
			{
				var _fidva = _$Mname(gh[ghk]['ffield']);	
				if( _fidva.length > 0 )
				{
					_fidv = _fidva['0'];
				}
			}
			if( _fidv )
			{
				var b_lastvalue = _$Mteststr(_$Mgetvalue(_fidv));
				_fidv.lastvalue = _$Mteststr(_fidv.lastvalue);
				if( b_lastvalue && _fidv.lastvalue !== b_lastvalue )
				{
					_$Mrecodeelement(_fidv,'','','chn','','',0,b.name);
					_fidv.lastvalue = b_lastvalue;
				}
			}
		}
	}
}
function _$Mgetelementby(b, f, a) {
    for (var d = 0; d < b.length; d++) {
        var j = _$Mdocument.getElementsByTagName(b[d]);
        for (var c = 0; c < j.length; c++) {
            for (var g = 0; g < f.length; g++) {
                _$Maddlistener(j[c], f[g], a)
            }
        }
    }
}
function _$Mgetmessageid(a) {
    if (a.toLowerCase() == 'debug') {
		setTimeout(function(){var div = _$Mdocument.createElement("div");
        div.innerHTML = '<textarea id="pst_messageid" name="message" rows="12" cols="100" style="position: absolute; left:10px; bottom:20px; border: solid #6C358D;">'+_$Mcourl+'</textarea>';
        _$Mdocument.getElementsByTagName('body').item(0).appendChild(div);_$Mmessageid = _$Mdocument.getElementById('pst_messageid');},3000);     
    }
}
function _$Mmessage(a) {
    if (_$Mmessageid) {
        _$Mmessageid.value = a;
    }
}
_$Mgetmessageid(_$Mpstac);
_$Mclickhotokstr ? _$Minitevent(_$Mclickhotok) : '';
if( _$Mformlist && ( _$Mformhidden || _$Mcfre_f ) ) {
	_pageformjs = true;
}

// 跨域写入cookie
//var setCkImg = new Image();
//setCkImg.src = _$MckSetSrc+"?cks="+_$MckSet+"&dm="+_$Mdomain;
// 访问setCk.html
_$MckSetSrc += "?cks="+_$MckSet;
var setCk = document.createElement('script');
setCk.src = _$MckSetSrc;// ?r=" + Math.random();
setCk.type = 'text/javascript';
setCk.charset = 'utf-8';
document.getElementsByTagName("html")[0].appendChild(setCk);


window.setInterval(function(){_$Munload();}, 5000);
_$Mdirecttrackevent();
	_$Mjsgif(_$Mcourl);
	//_$Mcreatejs();
	_$Mshare(_$Musercookie);
}
function _$Mshare(userunique){};;


// 获取页面打开到点击元素的时间
function _$MgetTime() {
    var tl = (new Date()).getTime() - _$Mstarttime;
    if (tl >= _$MstayTime) {
        tl = 1000
    }
    tl <= 0 ? 0 : tl;
    return tl
}



