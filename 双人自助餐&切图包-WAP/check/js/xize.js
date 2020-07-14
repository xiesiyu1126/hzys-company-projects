$(function () {
    // $("#page1").load("wsd-xize.html #content");
    // $("#page2").load("visa-xize.html #content");
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