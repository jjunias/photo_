myApp.controller("photo",function($scope){
	$scope.photo = ["images/photo/photo_01.jpg",
					"images/photo/photo_02.jpg",
					"images/photo/photo_03.jpg",
					"images/photo/photo_04.jpg",
					"images/photo/photo_05.jpg",
					"images/photo/photo_06.jpg",
					"images/photo/photo_07.jpg",
					"images/photo/photo_08.jpg",
					"images/photo/photo_09.jpg"];
	$scope.test = function(){
		if($(window).width() > 768){			
			return true;
		}
		else{
			return false;
		}
	}
});