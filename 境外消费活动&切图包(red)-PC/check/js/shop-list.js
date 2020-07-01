$(document).ready(function(){
	$(".content-shop").click(function(){
		$(".mask1,.tips-content1").show();
		$("body").css({overflow:"hidden"});  //唤起弹窗时，body页面禁止滚动
	});
	$(".close").click(function(){
		$(".mask1,.tips-content1").hide();
		$("body").css({overflow:"scroll"}); //关闭弹窗时，body页面允许滚动
	});

})

