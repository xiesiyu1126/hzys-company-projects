$(document).ready(function(){
	
	$(".btn-choujiang").click(function(){
		$(".mask1,.tips-content1").show();
	});
	$(".close1").click(function(){
		$(".mask1,.tips-content1").hide();
	});
	
	$(".btn-chakan").click(function(){
		$(".mask2,.tips-content2").show();
	});
	$(".close2").click(function(){
		$(".mask2,.tips-content2").hide();
	});
});