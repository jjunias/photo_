myApp.controller("photo_Img",function($scope,$http,$routeParams,$location){
  $scope.go = function(path){ //글쓰기 버튼 클릭시 page 이동 
    $location.path(path);
  };
  $scope.view={};
  $scope.load = function($event){
    $http({
      url:"/photo_Img:number",
      method:"post",
      data:{number:$routeParams.number}
    }).success(function(data){
      $scope.view = data;
    });
  }
  $scope.delete = function(index,$event){
    var del =confirm("게시물을 삭제하시겠습니까?");
    if(del){
    $http({
        url:"/photo_Delete/"+index,
        method:"delete"
      }).success(function(data){
        alert("삭제되었습니다.");
          $location.path('photo');
      });
    }
  }
});