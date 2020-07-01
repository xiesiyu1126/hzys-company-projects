$(function(){
    var currentPage=1;
    var pagesize=12;
    checkPageNo();
    var total=+$('#totaltemp').val();
    /*
	if ($(".container .defaultbtn").length == 2)
	{
		$(".container .defaultbtn").eq(0).addClass("pull-left");
		$(".container .defaultbtn").eq(1).addClass("pull-right");
	}else if ($(".container .defaultbtn").length == 1)
	{
		$(".container .defaultbtn").eq(0).addClass("centerbtn"); 
	}
	*/
     var p = $(".event-btn").find(".defaultbtn");
	var l = p.length;
	
	var p2 = $(".event-btn").find(".defaultbtn2");
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
    
    
    $('.pageNum').on('keypress',function(e){
        var  val = $(this).val(); 
    	return e.keyCode>=48 && e.keyCode<=57 ;
    })   
   

 /*类别筛选条件处理*/
    $("#categroy").on("change",function(){
        var val = $(this).val();
        $(this).attr('data-val',val);
        if(val != -1){
         currentPage=1;       
        }
        ajax_get_content();
    });
    /*
    var cateopt = $("#categroy option");
    for(var i = 1;i < cateopt.length; i++){ 
        if(cateopt[i].selected==true){
        	$("#categroy").attr('data-val',cateopt[i].value);
            currentPage=1;
        	ajax_get_content(); 
            break;
        }
        
    }
	*/
    handleBack($("#categroy option"),$("#categroy"));
	
    /*时间筛选条件处理*/
    $("#dateLimit").on("change",function(){
        var val = $(this).val();
        $(this).attr('data-val',val);
        currentPage=1;
        ajax_get_content();
    });
    handleBack($("#dateLimit option"),$("#dateLimit"));

    /*地区筛选条件处理*/
    $("#province").on("change",function(){
        var val = $(this).val();
        $(this).attr('data-val',val);
        currentPage=1;
        ajax_get_content(); 
    });
    handleBack($("#province option"),$("#province"));
    
    $("#jump").on('click',function(){
        var limit=+$('#totaltemp').val();
       currentPage = +$("input[name=pageNum]").val();
       if(currentPage > 0 && currentPage <= limit){
        ajax_get_content();
       }
    });
    
     $("#prepage").on('click',function(){
         if(currentPage>1){
       currentPage=currentPage-1;     
        ajax_get_content();
         }
    });
    
     $("#nextpage").on('click',function(){
          var limit=+$('#totaltemp').val();
         if(currentPage<limit){
     currentPage++;    
     ajax_get_content();
         }
    });
    
    function checkPageNo(){        
     $('.pageNum').val(currentPage);   
	}
    
    
    function ajax_get_content(){  
        var province;
       // var area;
        var temp=$('#province').attr('data-val');
        if(temp!="0" && temp!="2" && temp!="1" && temp!="-1"){
          province=temp;
        }
        var typeId=$('#categroy').attr('data-val');
            if(+typeId<1){
            typeId=null;
            }
        var dateLimit=$('#dateLimit').attr('data-val');
            if(dateLimit==""){
            dateLimit=null;
            }
        $.ajax({
            url : "/content/pccc-biz/discount/data.activitypages.json",
            type : "get",
            dataType : "json",
            async : false,
            timeout : 6000,
            data : {
                province:province,
                typeId:typeId,
                dateLimit:dateLimit
                },
                success : function(data) {
                     $('.eventlist ul').empty();               
                var acts=data['pages'];
                    if(acts.length<1){
                    $('#total').html("共0页");
                        $('#totaltemp').val(0);
                    }else{
                        //清空当前列表                  
                        var total= Math.ceil(acts.length/pagesize);
                        $('#total').html("共"+total+"页");
                        $('#totaltemp').val(total);
                        var start=pagesize*currentPage-pagesize;
                        var end=pagesize*currentPage-1;
                    for(var i=0;i<acts.length;i++){
                        if(i<start || i > end){
                        continue;
                        }
                        var title=acts[i].title;
                        var actpath=acts[i].path.substring(0,acts[i].path.indexOf("/jcr:content"));
                        actpath+=".show.html";
                        var img=acts[i].listimageforpc;
                        var imgpath="/content/pccc-biz/discount/data/";
                        imgpath+=img.substring(img.indexOf("discount/data/")+14,img.indexOf("/jcr:content"));
                        imgpath+="/_jcr_content/listimageforpc.img.jpg"; 
                        var li;
                        if(i%2==0){
                          li = "<li class='mgr'><div class='imgDiv'><a href='"; 
                           }else{
                       li = "<li><div class='imgDiv'><a href='";
                           }
                        li+=actpath;
                        li+="' title='"
                        li+=title;
                        li+="' td-event='2998003005,"+title+"'><img src='";
                        li+=imgpath;
                        li+="'/></a></div></li>"
                    $('.eventlist ul').append(li);   
                    }
                    }
                    checkPageNo();
                },
                error : function() {
                	alert("系统繁忙，请稍后再试！");
                }
            });
		}
	
      function handleBack(params,selector){
    	var cateopt = params;
    	for(var i = 1;i < cateopt.length; i++){ 
            if(cateopt[i].selected==true){
                selector.attr('data-val',cateopt[i].value);
                currentPage=1;
                ajax_get_content(); 
                break;
            }
        }
    }

});



