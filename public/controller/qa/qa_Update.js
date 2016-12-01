myApp.controller("qa_Update",function($scope,$routeParams,$location,$http){
	$scope.go = function(path){ //글쓰기 버튼 클릭시 page 이동 
    	$location.path(path+"/"+$routeParams.number);
  	};
	$scope.load = function($event){
 		$http({
	    	url:"/qa_UpdateLoad",
	    	method:"post",
	    	data:{number:$routeParams.number}
	    	}).success(function(data){
	    		$scope.writer = data.writer;
	    		$scope.title = data.title;
	    		$scope.content = data.content;
	    });
  	};
  	$scope.update = function($event){
  		var reg_Writer = /^[a-zA-Z가-힣\s]{1,10}$/;
	    var result_Writer = reg_Writer.test($('#writer').val());
	    var reg_Title = /^[\w\W]{1,15}$/;
	    var result_Title = reg_Title.test($("#title").val());
  		if(!result_Writer){
	     	alert("작성자를 적어주세요.");
	    } else if(!result_Title){
	    	alert("제목을 입력해주세요.");
	    }else{
	 		$http({
		    	url:"/qa_Update/"+$routeParams.number,
		    	method:"put",
		    	data:{writer:$scope.writer,title:$scope.title,content:$scope.content}
		    	}).success(function(data){
		    		alert("수정되었습니다.");
		    		$location.path('qa_Write/'+$routeParams.number);
		    });	   
	    }
  	}
});