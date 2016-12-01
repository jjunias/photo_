myApp.controller("review",function($scope,$http,$location){
  $scope.view={}; //get 모든값 받아옴
  $scope.num;
  $scope.load = function($event){
  $http({
    url:"/view_Load",
    method:"get"
    }).success(function(data){
      $scope.view = data;
    });
  };
  $scope.modal =function(index){
    $(".view_Img").show();
    $(".dim").show();
    $(".modal_Img img").attr("src",$scope.view[index].img);
    $(".modalName").text("이름 :"+$scope.view[index].name);
    $(".modalAge").text("나이 :"+$scope.view[index].age+"세");
    $(".modalContent").text("인사말 :"+$scope.view[index].content);
    $scope.num = index;
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
  $scope.delete = function(index,$event){
    var del =confirm("게시물을 삭제하시겠습니까?");
  if(del){
    $http({
        url:"/view_Delete/"+$scope.view[index].number,
        method:"delete"
      }).success(function(data){
        alert("삭제되었습니다.");
        location.reload(true);
      });
    }
  }
  $scope.exit = function(){
    $(".view_Img").hide();
    $(".dim").hide();
  };
  $scope.go = function(path){          //글쓰기 버튼 클릭시 page 이동 
    $location.path(path);
  };
});
