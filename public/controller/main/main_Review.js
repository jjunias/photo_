myApp.controller("main_Review",function($scope,$http,$location){  //review 컨트롤러 기능
  	$scope.view={}; //get 모든값 받아옴
  	$scope.main_view = {}; //get 마지막 6개만 추출
  	$scope.load = function($event){
  		$http({
  			url:"/view_Load",
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
});