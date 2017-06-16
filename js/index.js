$(function(){
	var client_h = document.documentElement.clientHeight*0.8;//获取浏览器的高度*0.8

	$(window).scroll(function(){

		TOP = $(document).scrollTop() + client_h;
		if (TOP > $(".item03").offset().top) {
			if ($(".item03").attr("data-onOff") == "true") {
				$(".item03 .dt").css("opacity",1).find("p").css({
					"padding-top": 0,
					"padding-bottom": "20px"
				});
				$(".item03").attr("data-onOff","false");
			}
		}

		if (TOP > $(".item04").offset().top) {
			if ($(".item04").attr("data-onOff") == "true") {
				$(".item04")
					.find("img")
					.css("margin-left",0)
					.end()
					.find(".fr")
					.css("opacity",1)
					.find(".fr-title")
					.css({
						"padding-top": 0,
						"padding-bottom": "20px"
					})
					;
				$(".item04").attr("data-onOff","false");
			}			
		}

		if (TOP > $(".item05").offset().top) {
			if ($(".item05").attr("data-onOff") == "true") {
				$(".item05")
					.find("img")
					.css("margin-left",0)
					.end()
					.find(".fl")
					.css("opacity",1)
					.find(".fl-title")
					.css({
						"padding-top": 0,
						"padding-bottom": "20px"
					})
					;
				$(".item05").attr("data-onOff","false");
			}			
		}

		if (TOP > $(".item06").offset().top) {
			if ($(".item06").attr("data-onOff") == "true") {
				$(".item06")
					.find("img")
					.css("margin-left",0)
					.end()
					.find(".fr")
					.css("opacity",1)
					.find(".fr-title")
					.css({
						"padding-top": 0,
						"padding-bottom": "20px"
					})
					;
				$(".item06").attr("data-onOff","false");
			}			
		}

		if (TOP > $(".item07").offset().top) {
			if ($(".item07").attr("data-onOff") == "true") {
				$(".item07")
					.find("img")
					.css("margin-left",0)
					.end()
					.find(".fl")
					.css("opacity",1)
					.find(".fl-title")
					.css({
						"padding-top": 0,
						"padding-bottom": "20px"
					})
					;
				$(".item07").attr("data-onOff","false");
			}			
		}

		if (TOP > $(".item08").offset().top) {
			if ($(".item08").attr("data-onOff") == "true") {
				$(".item08 .dt").css("opacity",1).find("p").css({
					"padding-top": 0,
					"padding-bottom": "20px"
				});

				setTimeout(function(){
					var num = 0;
					var timer = null;
					timer = setInterval(function(){
						$(".item08").find(".item08-li").eq(num).css("opacity",1);		
						num++;
						if (num >= $(".item08").find(".item08-li").length) {
							timer = null;
						}
					},200);					
				},250);

				$(".item08").attr("data-onOff","false");
			}
		}

		if (TOP > $(".item09").offset().top) {
			if ($(".item09").attr("data-onOff") == "true") {
				$(".item09 .dt").css("opacity",1).find("p").css({
					"padding-top": 0,
					"padding-bottom": "20px"
				});

				$(".item09").attr("data-onOff","false");
			}
		}

		if (TOP > $(".item10").offset().top) {
			if ($(".item10").attr("data-onOff") == "true") {
				$(".item10 .dt").css("opacity",1).find("p").css({
					"padding-top": 0,
					"padding-bottom": "20px"
				});

				$(".item10").attr("data-onOff","false");
			}
		}

		if (TOP > $(".item11").offset().top) {
			if ($(".item11").attr("data-onOff") == "true") {
				$(".item11 .item11-inner").css("opacity",1).find("p").css({
					"padding-top": "5rem",
					"padding-bottom": "1rem"
				});

				$(".item11").attr("data-onOff","false");
			}
		}

		if (TOP > $(".item12").offset().top ) {
			setTimeout(function(){
				if ($(".item12").attr("data-onOff") == "true") {
					$(".item12 .dt span").show(800);

					$(".item12").attr("data-onOff","false");
				}
			},150);
		}

		if (TOP > $(".item13").offset().top) {
			setTimeout(function(){
				if ($(".item13").attr("data-onOff") == "true") {
					$(".item13 .dt span").show(800);

					$(".item13").attr("data-onOff","false");
				}
			},150);
		}

	});

	/* 轮播图左右按钮滑动方法 */	
	// var num = 0;
	// var carousel_timer = null;

	// carousel_timer = setInterval(function(){
	// 	carousel_fn();
	// },2500);

	// $(".item09").find(".arrow-l").on("click",function(){
	// 	num--;
	// 	if (num < 0) {
	// 		num = 5;
	// 	}
	// 	$("#carousel").stop().animate({
	// 		"margin-left": -32.5*num + "%"
	// 	},500);

	// });
	// $(".item09").find(".arrow-r").on("click",function(){
	// 	carousel_fn();

	// });

	// $(".item09 .dd").on({
	// 	"mouseenter":function(){
	// 		clearInterval(carousel_timer);
	// 	},
	// 	"mouseleave":function(){
	// 		carousel_timer = setInterval(function(){
	// 			carousel_fn();
	// 		},2500);			
	// 	}
	// });

	// function carousel_fn (){
	// 	num++;
	// 	$("#carousel").stop().animate({
	// 		"margin-left": -32.5*num + "%"
	// 	},500);
	// 	if (num >= 5) {
	// 		num = -1;
	// 	}
	// }

	var wrap = document.querySelector(".item09").children[1];
	var scroll = document.querySelector("#carousel");
	var startPoinl = 0;
	var startEl = 0;
	var maxLeft =  parseInt((wrap.clientWidth - scroll.offsetWidth)*0.54);
	console.log(maxLeft);
	wrap.addEventListener(
		"touchstart",
		function(e) {
			var touch = e.changedTouches[0];
			startPoinl = touch.pageX;
			startEl = scroll.offsetLeft;
		}
	);
	wrap.addEventListener(
		"touchmove",
		function(e) {
			var touch = e.changedTouches[0];
			var nowPoinl = touch.pageX;
			var dis = nowPoinl - startPoinl;
			var left = startEl + dis;
			if(left > 0) {
				left = 0;
			}
			if(left < maxLeft) {
				left = maxLeft;
			}
			scroll.style.left =  left +"px";
		}
	);
});
