$(function () {
    $("#left-tc").click(function () {
        $("#tc-div").show();
        $("#choujiang").show();
        $("#tuijian").hide();
    })

    $("#right-tc").click(function () {
        $("#tc-div").show();
        $("#choujiang").hide();
        $("#tuijian").show();
    })

    $("#close").click(function () {
        $("#tc-div").hide();
    })
})