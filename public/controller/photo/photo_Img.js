myApp.controller("photo_Img",function($scope,$http,$routeParams){
  $scope.location=$routeParams.location;
  $scope.view={};
  $scope.date = $routeParams.date;
  $scope.viewDate = {'date':$scope.date,'location':$scope.location};
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