$(function() {
	
	let pageAry=document.getElementsByClassName("page-div");
	for (let i = 0; i < pageAry.length; i++) {
		$("#page_"+i).load("page"+i+".html #content");			
	}
	let tagAry = document.getElementsByClassName("link-a");

	for (let i = 0; i < tagAry.length; i++) {
		tagAry[i].index = i;
		tagAry[i].onclick = function() {
			var name = "page_" + this.index;
			var cur = document.getElementById(name)
			getPosition(cur);
		}
	}


	function getPosition(e) {
		var t = e.offsetTop;
		var l = e.offsetLeft;
		while (e = e.offsetParent) {
			t += e.offsetTop;
			l += e.offsetLeft;
		}
		$("html,body").animate({
			scrollTop: t
		}, 300);
	}
})
