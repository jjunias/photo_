myApp.controller("photo_Img",function($scope,$http,$routeParams){

  $scope.location=$routeParams.location;
  $scope.date = $routeParams.date;
  $scope.viewDate = {'date':$scope.date,'location':$scope.location};
  $scope.view={};
  $scope.load = function($event){
    $http({
      url:"/photo_Img",
      method:"post",
      data:$scope.viewDate
    }).success(function(data){
      $scope.view = data;
    });
  }
});