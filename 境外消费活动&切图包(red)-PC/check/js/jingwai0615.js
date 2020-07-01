$(document).ready(function() {
	var getCount = $.cookie("countName");
	if (getCount == 1) {
		$(".content-show").hide();
		$(".content-show1").show();
		$(".right_hand").addClass("arrowEffect1");
	} else {
		$(".content-show").show();
		$(".content-show1").hide();
		$(".left_hand").addClass("arrowEffect1");
	}

	$(".content-left-title").click(function() {
		$(".content-show").show();
		$(".content-show1").hide();
		$(".left_hand").addClass("arrowEffect1");
		$.cookie("countName", 0);
	});

	$(".content-right-title").click(function() {
		$(".content-show").hide();
		$(".content-show1").show();
		$(".right_hand").addClass("arrowEffect1");
		$.cookie("countName", 1);
	});

});
