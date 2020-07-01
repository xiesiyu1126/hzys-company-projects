$(function() {
	var getCount = $.cookie("countName");
	$(".haitao").click(clickOne)
	if (getCount == 1) {
		$(".content-qiehuan").hide();
		$(".content-qiehuan1").show();
	} else {
		$(".content-qiehuan").show();
		$(".content-qiehuan1").hide();
	}

	function clickOne() {
		$(".content-qiehuan").show();
		$(".content-qiehuan1").hide();
		$.cookie("countName", 1);
	}

	$(".jingwai").click(clickTwo)

	function clickTwo() {
		$(".content-qiehuan").hide();
		$(".content-qiehuan1").show();
		$.cookie("countName", 0);
	}
})
