/*
$(document).ready(function(){
	$("nav ul.container li").mouseenter(function(){
		$(this).find("div.sub-nav").stop().slideDown("fast");
	})
	$("nav ul.container li").mouseleave(function(){
		$(this).find("div.sub-nav").stop().slideUp("fast");
	})
    $("nav ul.container li").on('click',function(){
    	$(this).addClass('active').siblings('li').removeClass('active');
    })
    $(".sub-nav ul li").on('click',function(){
        var $this = $(this);
        var parentLi = $this.parents('li');
        parentLi.addClass('active').siblings('li').removeClass('active');
    })
    
    var links=$('header .container > li >a');
    var pageurl=window.location.href;
    pageurl=pageurl.substring(pageurl.indexOf('/content'),pageurl.indexOf('.html'));
    var urls={};
    for(var i=0;i<links.length;i++){
    var curlink=$(links[i]).attr('href'); 
     curlink=curlink.substring(curlink.indexOf('/content'),curlink.indexOf('.html')); 
        if(pageurl.indexOf(curlink)>0){
        $(links[i]).parent().addClass('active').siblings('li').removeClass('active');
            break;
        }
    }  
});*/
$(document).ready(function(){
	if($(".swipe-box").length > 0){
		if($(".swipe-box").find("li").size() > 1){
			$(".swipe-box").slide({  mainCell:".bd ul",titCell:".hd ul", effect:"left",autoPage:true,autoPlay:true,vis:"auto" });
		}else{
			$(".swipe-box").slide({  mainCell:".bd ul", effect:"left",autoPage:true,autoPlay:true,vis:"auto" });
		}
		$(".swipe-box").find("li").show();
	}
	
    $(document).on('mouseover',"nav ul.container li",function(){
		$(this).find("div.sub-nav").stop().slideDown("fast");
	})
	$(document).on('mouseout',"nav ul.container li",function(){
		$(this).find("div.sub-nav").stop().slideUp("fast");
	})
    
    
    var links=$('header .container > li >a');
    var pageurl=window.location.href;
    pageurl=pageurl.substring(pageurl.indexOf('/content'),pageurl.indexOf('.html'));
    var urls={};
    for(var i=0;i<links.length;i++){
    	var curlink=$(links[i]).attr('href'); 
     	curlink=curlink.substring(curlink.indexOf('/content'),curlink.indexOf('.html')); 
        if(pageurl.indexOf(curlink)>0){
        $(links[i]).parent().addClass('active').siblings('li').removeClass('active');
            break;
        }
    }  
    
    
});