myApp.controller("dim",function($scope){
	$scope.dim = function(){
		$(".dim").hide();
		$(".response_Menu").css('left','-70%');
		$(".view_Img").hide();
	}
	angular.element(window).resize(function() {
		if($(window).width() > 992){
			$(".dim").hide();
			$(".response_Menu").css('left','-70%');
			$(".view_Img").hide();
		}
	});
});
myApp.controller("catalog",function($scope){
	 $scope.catal_View = function(){
	 	if($(".response_Menu").attr("view") == 'false'){
	 		$(".response_Menu").attr("view","true");
	 		$(".response_Menu").css('left','0%');
	 		$(".dim").css('display','block');
	 	}
	 	else{
	 		$(".response_Menu").attr("view","false");
	 		$(".response_Menu").css('left','-70%');
	 		$(".dim").css('display','none');
	 	}
	};
	$scope.menu_click = function(){
		$(".dim").css('display','none');
		$(".response_Menu").css('left','-70%');
	}
});
