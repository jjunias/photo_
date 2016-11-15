myApp.controller("review",function($scope,$http,$location){
	$scope.view={}; //get 모든값 받아옴
  	$scope.main_view = {}; //get 마지막 6개만 추출
  	$scope.load = function($event){
  		$http({
  			url:"/viewLoad",
  			method:"get"
  		}).success(function(data){
  			  $scope.view = data;
  			var _main = (data.length-8);
  			for(i=data.length-1;i>_main;i--){
  				if(i<0){
  					break;
  				}
  		  		$scope.main_view[i] = $scope.view[i]; 	
  		  	}
  		});
  	};
    $scope.go = function(path){          //글쓰기 버튼 클릭시 page 이동 
      $location.path(path);
    };
});
