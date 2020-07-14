$(function () {
	$("#visa-img").hide();
    $("#wsd").click(function () {
        $("#page2").hide();
        $("#page1").show();
		$("#wsd-img").show();
		$("#visa-img").hide();
    })
    $("#visa").click(function () {
        $("#page1").hide();
        $("#page2").show();
        $("#wsd-img").hide();
        $("#visa-img").show();
    })

})