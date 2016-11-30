myApp.controller("qa_Write",function($scope,$routeParams,$http,$location){
 	$scope.num=$routeParams.number;
 	$scope.view={};
 	$scope.go = function(path){ //글쓰기 버튼 클릭시 page 이동 
    	$location.path(path);
  	};
 	$scope.load = function($event){
 		$http({
	    	url:"/qa_Write",
	    	method:"post",
	    	data:{num:$scope.num}
	    	}).success(function(data){
	      		$scope.view = data;
	    });
  	};
    $scope.updateShow = function(){
      $(".update_Modal").show();
      $(".delete_Modal").hide();
    }
    $scope.updateHide = function(){
      $(".update_Modal").hide();
    }
    $scope.deleteShow = function(){
      $(".delete_Modal").show();
      $(".update_Modal").hide();
    }
    $scope.deleteHide = function(){
      $(".delete_Modal").hide();
    }
    $scope.update = function(index,$event){
      if($scope.updatePwd == undefined){
        alert("비밀번호를 입력해주세요.");
      }else{
        $http({
            url:"/qa_CheckPwd",
            method:"post",
            data:{number:index,pwd:$scope.updatePwd}
        }).success(function(data){
          if(data.result){
            $location.path('/qa_Update/'+index+'/')
          }else{
            alert("비밀번호가 틀립니다.");
          }
        });
      }
    }
  	$scope.delete = function(index,$event){
      if($scope.deletePwd == undefined){
        alert("비밀번호를 입력해주세요.");
      }
      else{
        $http({
            url:"/qa_Delete/"+index+"/"+$scope.deletePwd,
            method:"delete"
        }).success(function(data){
          if(data.result){
            alert("게시글이 삭제되었습니다.");
            $location.path('qa');
          } else{
            alert("비밀번호가 틀립니다.");
          }
        });
      }
    }
});