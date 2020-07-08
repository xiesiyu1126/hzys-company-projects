$(function() {
	let h3TagAry = document.getElementsByTagName("h3");

	for (let i = 0; i < h3TagAry.length; i++) {
		h3TagAry[i].index = i;
		h3TagAry[i].onclick = function() {
			//判断当前目录是否显示
			let isHide=$("#page" + this.index).is(':visible') ;
		
			if(!isHide){
				$(".page-div").slideup(2000);
				$("#page" + this.index).slidedown();
				$("#page" + this.index).load("page" + this.index + ".html #content")				
			}else{
				$("#page" + this.index).slideup(2000);
			}

		}
	}
})
