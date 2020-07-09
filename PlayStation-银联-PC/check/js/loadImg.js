document.addEventListener('DOMContentLoaded', function() {
	$.fakeLoader({
		bgColor: '#2ecc71',
		spinner: "spinner1"
	});
})

let imgAry = document.getElementsByTagName("img");
for (let i = 0; i < imgAry.length; i++) {
	$(imgAry[i]).css({
	"display": "block"
	});
}
$("#video-div").css({
	"display": "block"
});
$("#bottom-lb").css({
	"display": "block"
});

$("#change-face").css({
	"display": "block"
});

$(function() {

	//图片懒加载处理
	var interval;
	var imgAryLenght = imgAry.length;
	var myTimer = function(callback) {
		var height = 10;
		var flag = true;
		interval = setInterval(function() {
			let imgCount = 0;
			let imgFlag = true;
			for (let i = 0; i < imgAry.length; i++) {
				imgFlag = imgAry[i].complete; //判断图片是否加载完毕
				if (!imgFlag) {

				}
				imgCount++;
			}
			callback(imgCount);
		}, 200);
	};

	myTimer(function(val) {
		if (val == imgAryLenght) {
			clearInterval(interval);
			$(".fakeLoader").fadeOut();
		}
	});
})
