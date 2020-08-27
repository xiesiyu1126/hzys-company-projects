$(function () {
	$("#btn2").hide();
    $("#change2").click(function () {
        $("#show1").hide();
        $("#show2").show();
		$("#btn2").show();
		$("#btn1").hide();
    })
    $("#change1").click(function () {
        $("#show2").hide();
        $("#show1").show();
        $("#btn2").hide();
        $("#btn1").show();
    })

})