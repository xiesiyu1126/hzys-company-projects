$(function () {

    console.log(navigator.userAgent);
    var os = function () {
        var ua = navigator.userAgent,
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isChrome = /(?:Chrome|CriOS)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (
                isFireFox &&
                /(?:Tablet)/.test(ua)),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPc = !isPhone && !isAndroid && !isSymbian;
        return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc
        };
    }();
    // 立即申请
    $("#apply-card-id").click(function () {
        if (os.isAndroid || os.isPhone) {
            console.log("手机")
            window.location.href = "https://creditcardapp.bankcomm.com/applynew/front/apply/app/cardInfo.html?trackCode=A082018283242&cardId=264";
        } else {
            console.log("PC")
            window.location.href = "https://creditcardapp.bankcomm.com/applynew/front/apply/new/identity.html?&cardId=264";
        }
    });

    // 雪花预约
    $("#xuehua-id").click(function () {
        if (os.isAndroid || os.isPhone) {
            console.log("手机")
            window.location.href = "https://creditcardapp.bankcomm.com/applynew/front/apply/app/cardInfo.html?trackCode=A082018283242&cardId=263";
        } else {
            console.log("PC")
            window.location.href = "yuyue.html";
        }
    });

})