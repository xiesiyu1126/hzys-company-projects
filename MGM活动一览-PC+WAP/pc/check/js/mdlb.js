$(function () {
    loadarea();
    $(".seltxt a").toggle(function () {
        $('#areawarp').addClass('dropdown');
        $(this).find("img").attr("src", "images/arrow_up.jpg");
    }, function () {
        $('#areawarp').removeClass('dropdown');
        $(this).find("img").attr("src", "images/arrow_down.jpg");
    });


    $('#areawarp').click(function (event) { event.stopPropagation(); });

    $(document).click(function () {
        if ($('#areawarp').hasClass("dropdown")) {
            $(".seltxt a").click();
        }
    });

    $("#xytabs a").click(function () {
        $("#xytabs li").removeClass('curtab');
        $("#xytabs li img").attr("src", "images/normaltab.png");
        $(this).parent().addClass("curtab");
        $(this).parent().find("img").attr("src", "images/focustab.png");

        //        loadarea();
        loadtable();

    });

    loadtable();
})

function tabdisplay() {
    var cid = $('.seltxt span').attr('val');
    if (cid == '0') {
        $('#xytabs li').show();
    } else {
        $('#xytabs li').removeClass('curtab');
        $('#xytabs li').each(function () {
            var tempdata = store_data[$(this).attr("tabindex")];
            if (tempdata == undefined) {
                return;
            }
            $(this).hide();
            for (var i = 0; i < tempdata.length; i++) {
                if (tempdata[i].cid == cid) {
                    $(this).show();
                    if ($('#xytabs li.curtab')[0] == undefined) {
                        $(this).find("a").click();
                    }
                    break;
                }
            }
        });
    }
}

function loadarea() {
    //    var cid = $('.seltxt span').attr('val');
    //    var tabindex = $('#xytabs .curtab').attr("tabindex");
    //    if (tabindex == undefined || tabindex == '') {
    //        tabindex = 0;
    //    }
    var cur_province = province_data;
    var cur_city = city_data;

    var temp = '<li value="0"><a href="javascript:;" onclick="selchange(this)">全部</a></li>';
    for (var i = 0; i < cur_province.length; i++) {
        temp += '<li value="' + cur_province[i].pid + '"><a href="javascript:;">' + cur_province[i].pname + '</a></li>';
    }
    $('#selProvince ul').html(temp);
    $('#selCity ul').html("");

    //    $(".seltxt span").text("全部");
    //    $(".seltxt span").attr("val", "0");


    $('#selProvince li').click(function () {
        $('#selProvince li').removeClass('selected');
        $(this).addClass('selected');
        var temp = "";
        for (var j = 0; j < cur_city.length; j++) {
            if ($(this).attr("value") == cur_city[j].pid) {
                temp += '<li value="' + cur_city[j].cid + '"><a href="javascript:;" onclick="selchange(this)">' + cur_city[j].cname + '</a></li>';
            }
        }
        $('#selCity ul').html(temp);
    });

    $('#selProvince').mCustomScrollbar();
    $('#selCity').mCustomScrollbar();
}

function selchange(obj) {
    $('#selCity li').removeClass('selected');
    $(obj).parent().addClass('selected');
    $(".seltxt span").text($(obj).text());
    $(".seltxt span").attr("val", $(obj).parent().attr("value"));
    $(".seltxt a").click();

    tabdisplay();
    loadtable();

}


function loadtable() {

    var cid = $('.seltxt span').attr('val');
    var tabindex = $('#xytabs .curtab').attr("tabindex");
    if (tabindex == undefined || tabindex == '') {
        tabindex = 0;
    }

    var curdata = store_data[tabindex];

    $("#md_body").html("");

    var results = new Array();
    if (cid == '0') {
        results = curdata;
    } else if (curdata != undefined) {
        for (var i = 0; i < curdata.length; i++) {
            if (cid == curdata[i].cid) {
                results.push(curdata[i]);
            }
        }
    }

    var curcid = 0;
    var curpid = 0;
    var cnum = 1;
    var pnum = 1;
    var tbodyhtml = "";
    var ptemp = "";
    var ctemp = "";

    for (var i = 0; i < results.length; i++) {

        if (curcid != results[i].cid) {//城市更换
            if (ctemp != "") {
                if (ptemp != "") {
                    ptemp += "<tr><td rowspan='" + cnum + "' class='tdcity'>" + results[i - 1].cname + "</td>" + ctemp;
                } else {
                    ptemp += "<td rowspan='" + cnum + "' class='tdcity'>" + results[i - 1].cname + "</td>" + ctemp;
                }
            }
            ctemp = "<td>" + results[i].storename + "</td><td>" + results[i].address + "</td></tr>";
            cnum = 1;
            curcid = results[i].cid;
        } else {//城市不变
            cnum++;
            ctemp += "<tr><td>" + results[i].storename + "</td><td>" + results[i].address + "</td></tr>";
        }

        if (curpid != results[i].pid) {//省份更换
            if (ptemp != "") {
                tbodyhtml += "<tr><td rowspan='" + pnum + "' class='tdprovince'>" + results[i - 1].pname + "</td>" + ptemp;
                pnum = 1;
                ptemp = "";
            }
            curpid = results[i].pid;
        } else {
            pnum++;
        }

        if (i == results.length - 1) {

            if (ptemp != "") {
                ptemp += "<tr><td rowspan='" + cnum + "' class='tdcity'>" + results[i].cname + "</td>" + ctemp;
            } else {
                ptemp += "<td rowspan='" + cnum + "' class='tdcity'>" + results[i].cname + "</td>" + ctemp;
            }
            tbodyhtml += "<tr><td rowspan='" + pnum + "' class='tdprovince'>" + results[i].pname + "</td>" + ptemp;
        }
    }
    $("#md_body").html(tbodyhtml);

    $("#md_body tr:odd").addClass("trbgcolor");

    $("#md_body tr").find("td:last").addClass("last");
    $("#md_body tr").find("td:last").prev().css("width", "172px");
}
