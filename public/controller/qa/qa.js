myApp.controller("qa",function($scope,$routeParams,$http,$location){
	$scope.view={};
    $scope.go = function(path){ //글쓰기 버튼 클릭시 page 이동 
    	$location.path(path);
  	};
    $scope.qaClick = function(num){
        $location.path('/qa_Write/'+num+'/')
    }
  	$scope.load = function($event){
 		$http({
    	url:"/qa_View",
    	method:"get"
    	}).success(function(data){
      	$scope.view = data;
    	});
  	};
});