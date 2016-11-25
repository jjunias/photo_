myApp.controller("qa_Write",function($scope,$routeParams,$http,$location){
 	$scope.num=$routeParams.number;
 	$scope.view={};
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