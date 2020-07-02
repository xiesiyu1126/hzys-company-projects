$(function(){
	$(".one").click(clickOne)

	function clickOne() {
		$(".top img:nth-child(1)").show();
		$(".top img:nth-child(2)").hide();
		        
		$(".bottom .zhuanshu").show();
		$(".bottom .new").hide();
	}
		
	$(".two").click(clickTwo)
		
	function clickTwo() {
		$(".top img:nth-child(1)").hide();
		$(".top img:nth-child(2)").show();

		$(".bottom .zhuanshu").hide();
		$(".bottom .new").show();
	}
})