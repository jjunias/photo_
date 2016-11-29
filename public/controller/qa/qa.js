myApp.controller("qa",function($scope,$routeParams,$http,$location){
	$scope.view={};
  $scope.views = {};
  var j = 0;
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
        angular.element($('#pagination-demo').twbsPagination({
            totalPages: Math.ceil(($scope.view.length / 10)),
            visiblePages:5,
            onPageClick: function (event, page) {
              endNum = page * 10;
              startNum = endNum - 10; 
              for(i=startNum;i<endNum;i++){
                
                if($scope.view[i] == undefined){
                    delete $scope.views[j];
                }else{
                  $scope.views[j] = $scope.view[i];
                }
                j++;  if(j>9){j=0}
                if ($scope.$$phase == '$apply' || $scope.$$phase == '$digest' ){
                  $scope.test = true;
                }else{
                  $scope.$apply(function() {
                    $scope.test = true;
                  });
                }
              }
            }
        }));
      });
  	};
}); 