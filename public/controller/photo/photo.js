myApp.controller("photo",function($scope,$routeParams,$http,$location){
	$scope.view={};
	$scope.load = function($event){
	  	$http({
	    	url:"/photo",
	    	method:"get"
	    }).success(function(data){
	    	$scope.view = data;
	    });
  	};
  	$scope.imgClick= function(location,date){

  		$location.path('/photo_Img/'+date+'/'+location+'/')
  	}
    $scope.go = function(path){ //글쓰기 버튼 클릭시 page 이동 
    	$location.path(path);
  	};
});