myApp.controller("qa_Write",function($scope,$routeParams,$http,$location){
 	$scope.num=$routeParams.number;
 	$scope.view={};
 	$scope.go = function(path){ //글쓰기 버튼 클릭시 page 이동 
    	$location.path(path);
  	};
 	$scope.load = function($event){
 		$http({
	    	url:"/qa_Write",
	    	method:"post",
	    	data:{num:$scope.num}
	    	}).success(function(data){
	      		$scope.view = data;
	    });
  	};
});