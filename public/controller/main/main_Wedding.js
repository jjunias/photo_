myApp.controller("main_Wedding",function($scope){ //wedding controll 부분
	$(window).resize(function(){
			if($(window).width() > 768){
				$(".weddingImgBox_2").stop().css({"left":"20%"});
				$(".weddingImgBox_3").stop().css({"left":"40%"});
			}
			else{
				$(".weddingImgBox_2 ,.weddingImgBox_3").stop().css({"left":"0%"});
			}
		});
	$scope.mouseover = function(src,index){
		if($(window).width() > 768){
			if(index ==1){
				$("#wdImgBox_1").children("img").attr("src",src);
				$(".weddingImgBox_2").stop().animate({"left":"60%"},500);
				$(".weddingImgBox_3").stop().animate({"left":"80%"},500);
			}
			else if(index == 2){
				$("#wdImgBox_2").children("img").attr("src",src);	
				$(".weddingImgBox_3").stop().animate({"left":"80%"},500);
			}
			else{
				$("#wdImgBox_3").children("img").attr("src",src);
			}
		}
		else{
			if(index ==1){
				$("#wdImgBox_1").children("img").attr("src",src);
			}
			else if(index == 2){
				$("#wdImgBox_2").children("img").attr("src",src);	
			}
			else{
				$("#wdImgBox_3").children("img").attr("src",src);
			}                             
		}
	}
	$scope.mouseout =function(src,index){
		if($(window).width() > 768){
			if(index ==1){
				$("#wdImgBox_1").children("img").attr("src",src);
				$(".weddingImgBox_2").stop().animate({"left":"20%"},500);
				$(".weddingImgBox_3").stop().animate({"left":"40%"},500);
			}
			else if(index == 2){
				$("#wdImgBox_2").children("img").attr("src",src);	
				$(".weddingImgBox_3").stop().animate({"left":"40%"},500);
			}
			else{
				$("#wdImgBox_3").children("img").attr("src",src);
			}
		}
		else{
			if(index ==1){
				$("#wdImgBox_1").children("img").attr("src",src);
			}
			else if(index == 2){
				$("#wdImgBox_2").children("img").attr("src",src);	
			}
			else{
				$("#wdImgBox_3").children("img").attr("src",src);
			}                             
		}
	} 
});