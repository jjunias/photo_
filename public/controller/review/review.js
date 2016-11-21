myApp.controller("review",function($scope,$http,$location){
  $scope.view={}; //get 모든값 받아옴
  $scope.num;
  $scope.load = function($event){
  $http({
    url:"/viewLoad",
    method:"get"
    }).success(function(data){
      $scope.view = data;
    });
  };
  $scope.modal =function(index){
    $(".view_Img").show();
    $(".dim").show();
    for(i=0;i<$scope.view.length;i++){
      if(index == $scope.view[i]._id){
        $(".modal_Img img").attr("src",$scope.view[i].img);
        $(".modalName").text("이름 :"+$scope.view[i].name);
        $(".modalAge").text("나이 :"+$scope.view[i].age+"세");
        $(".modalContent").text("인사말 :"+$scope.view[i].content);
        $scope.num = i;
      }
    }
  };
  $scope.pre = function(){
    if($scope.num <= 0){
      return;
    }
    num= ($scope.num -= 1);
    $(".modal_Img img").attr("src",$scope.view[$scope.num].img);
    $(".modalName").text("이름 :"+$scope.view[$scope.num].name);
    $(".modalAge").text("나이 :"+$scope.view[$scope.num].age+"세");
    $(".modalContent").text("인사말 :"+$scope.view[$scope.num].content);
  };
  $scope.next = function(){
    if($scope.num >= $scope.view.length-1){
      return;
    }
    $scope.num += 1;
    $(".modal_Img img").attr("src",$scope.view[$scope.num].img);
    $(".modalName").text("이름 :"+$scope.view[$scope.num].name);
    $(".modalAge").text("나이 :"+$scope.view[$scope.num].age+"세");
    $(".modalContent").text("인사말 :"+$scope.view[$scope.num].content);
  };
  $scope.exit = function(){
    $(".view_Img").hide();
    $(".dim").hide();
  };
  $scope.go = function(path){          //글쓰기 버튼 클릭시 page 이동 
    $location.path(path);
  };
});
