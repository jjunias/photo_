 myApp.controller("wedding",function($scope){
	$scope.wedding_Img=["/images/wedding/wedding_01.jpg",
					"/images/wedding/wedding_02.jpg",
					"/images/wedding/wedding_03.jpg",
					"/images/wedding/wedding_04.jpg",
					"/images/wedding/wedding_05.jpg",
					"/images/wedding/wedding_06.jpg",
					"/images/wedding/wedding_07.jpg",
					"/images/wedding/wedding_08.jpg",
					"/images/wedding/wedding_09.jpg"];
	$scope.olympic_Img=["/images/wedding/olympicpark_02.jpg",
						"/images/wedding/olympicpark_03.jpg",
						"/images/wedding/olympicpark_04.jpg",
						"/images/wedding/olympicpark_05.jpg",
						"/images/wedding/olympicpark_06.jpg",
						"/images/wedding/olympicpark_07.jpg",
						"/images/wedding/olympicpark_08.jpg"];
	$scope.sky_Img=["/images/wedding/skypark_02.jpg",
					"/images/wedding/skypark_03.jpg",
					"/images/wedding/skypark_04.jpg",
					"/images/wedding/skypark_05.jpg",
					"/images/wedding/skypark_06.jpg",
					"/images/wedding/skypark_07.jpg",
					"/images/wedding/skypark_08.jpg",
					"/images/wedding/skypark_09.jpg",
					"/images/wedding/skypark_10.jpg"];
	$scope.view = function(index){
		$scope.view_Img = index;
	};
});
