var issend = false;
var pageIndex =1,pageSize=6;
$(function(){   
	//show_area();
    $(window).scroll(function () {       
		var bot = 150; //bot是底部距离的高度
		if ((bot + $(window).scrollTop()) >= ($(document).height() - $(window).height())) {			
			if(! issend){
				issend = true;
				$(".laresh").html("正在加载中");
					ajax_get_content();		
			}
			
		}
	}); 
	$(document).on("click",".archor-tag ul li",function(){
		var name = $(this).text();
		var top = 0;
		$(".swiper-slide").find("div").each(function(index, element) {
			
            if($(this).text() == name){
				return false;
			}
			top += $(this).height();
            if($(this).attr("class") == 'cellcity') top += 1;
           
        });
		$(".swiper-wrapper").css({"transition-duration":"0ms", "transform":"translate3d(0px, -"+top+"px, 0px)"});
	})
	$(document).on("click",".cellcity",function(){
		var t = $(this).text();
		$("#area").text(t);
         $("#area").attr('data-val',$(this).attr('data-attr'));
            pageIndex=0;
            $(".list-con").empty();
        	hide_area();
            ajax_get_content();
		
	});
    
    
    
    $('.nomal').bind('DOMNodeInserted',function(){
         pageIndex=0;
        $(".list-con").empty();
     ajax_get_content();  
    })
    
    
    /**WAP详情页按钮**/
   var p = $(".btn-con").find(".col2");
	var l = p.length;
	
	var p2 = $(".btn-con").find(".col3");
	var l2 = p2.length;
	
	
	if (l == 1 && l2 == 1){
		p.addClass("pull-left");
		p2.addClass("pull-right");
	}else{
		if (l == 2){
			p.eq(0).addClass("pull-left");
			p.eq(1).addClass("pull-right");
		}else if (l == 1){
			p.eq(0).addClass("centerbtn").css({"float":"none","display":"block"});
		}
	
		if (l2 == 2){
			p2.eq(0).addClass("pull-left");
			p2.eq(1).addClass("pull-right");
		}else if (l2 == 1){
			p2.before("<div class='clear'></div>");
			p2.eq(0).addClass("centerbtn").css({"clear":"both","float":"none","display":"block"});
		}
	}
    
});

function show_area(){
	$(".area-list").show();
	var th = $(".area-list .top-title").outerHeight();
	var wh = $(window).outerHeight();
	$(".area-list .area-sroll").height(wh-th);
	var swiper = new Swiper('.area-list .area-sroll', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });

}
function hide_area(){
	$(".area-list").hide();
	

}

function ajax_get_content(){
    var total=$('#total').val();
    var looked=$('.list-con').find('a').size();
    if(total>0&&looked==total){
    $(".laresh").html("已全部加载");
        return;
    }
	issend = false;
	pageIndex ++;
    var province;
   // var area;
    var temp=$('#area').attr('data-val');
    if(temp!="0" && temp!="2" && temp!="1"){
      province=temp;
    }
    var typeId=$('#categoryId').attr('data-val');
    var dateLimit=$('#dataLimit').attr('data-val');
    $.ajax({
		url : "/content/pccc-biz/discount/data.activitypages.json",
		type : "get",
		dataType : "json",
		async : false,
		timeout : 60000,
		data : {
            province:province,
            typeId:typeId,
            dateLimit:dateLimit
			},
			success : function(data) {
			var acts=data['pages'];
                if(acts.length>0){
                    $('#total').val(acts.length);
                    var start=pageSize*pageIndex-pageSize;
                    var end=pageSize*pageIndex-1;                  
                for(var i=0;i<acts.length;i++){
                    if(i<start || i > end){
                    continue;
                    }
                    var title=acts[i].title;
                    var actpath=acts[i].path.substring(0,acts[i].path.indexOf("/jcr:content"));
                    actpath+=".show.html";
                    var img=acts[i].listimageforwap;
                    var imgpath="/content/pccc-biz/discount/data/";
                    imgpath+=img.substring(img.indexOf("discount/data/")+14,img.indexOf("/jcr:content"));
                    imgpath+="/_jcr_content/listimageforwap.img.jpg";
                    var li = "<a href='"
                    li+=actpath;
                    li+="' alt='"
                    li+=title;
                    li+="'><img src='";
                    li+=imgpath;
                    li+="'/></a>"
				$(".list-con").append(li);     
                }
                }else{
                $(".laresh").html("已全部加载");
                }
			},
			error : function() {
			alert("系统繁忙，请稍后再试！");
			}
			});
}