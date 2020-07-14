$(function () {
    var linkAry = ["https://creditcardapp.bankcomm.com/loanmall/prod/carSerialList.html?carBrandId=267&brandName=领克",
        "https://creditcardapp.bankcomm.com/loanmall/prod/carSerialList.html?carBrandId=28&brandName=悦达起亚",
        "https://creditcardapp.bankcomm.com/loanmall/prod/carSerialList.html?carBrandId=49&brandName=雪弗兰",
        "https://creditcardapp.bankcomm.com/loanmall/prod/carSerialList.html?carBrandId=34&brandName=吉利"
    ];

    let carAry = $(".car");
    for (var i = 0; i < carAry.length; i++) {
        carAry[i].index = i;
        carAry[i].onclick = function () {
            window.location.href = linkAry[this.index];

        }
    }

    $("#lixiang").click(function () {
        window.location.href = "https://www.lixiang.com/?chjchannelcode=128003";
    })

})