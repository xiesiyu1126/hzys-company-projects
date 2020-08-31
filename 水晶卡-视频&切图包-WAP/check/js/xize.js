$(function () {
    $("#btn1").hide();
    $("#show2").hide();
    $("#change2").click(function () {
        $("#show1").hide();
        $("#show2").show();
        $("#btn1").show();
        $("#btn2").hide();
    })
    $("#change1").click(function () {
        $("#show2").hide();
        $("#show1").show();
        $("#btn1").hide();
        $("#btn2").show();
    })

})