$(function () {
    //获取缓存值
    var sessionCountName = sessionStorage.getItem("countName")
    if (sessionCountName == null || sessionCountName == 0) {
        $("#tanchuang").hide();
    } else {
        $("#tanchuang").show();
    }


    $("#close").click(function () {
        $("#tanchuang").hide();
        sessionStorage.setItem("countName", 0);

    });
    $("#fenqi").click(function () {
        $("#tanchuang").show();
    });
    $("#left-btn").click(function () {
        //设置缓存值
        window.location.href = "https://creditcardapp.bankcomm.com/crinwyfq/member/enterInstallment.html?traceCode=XF19"
        sessionStorage.setItem("countName", 1);
    });

    $("#right-btn").click(function () {
        //设置缓存值
        window.location.href = "https://creditcardapp.bankcomm.com/crinwyxj/member/enterSignTransAcc.html"
        sessionStorage.setItem("countName", 1);
    });

})