$(function() {
	$(".btn-back").click(function(){
		document.referrer === '' ? location.href = "https://creditcard.bankcomm.com/content/index.html" : window.history.back();return false;
	});
});