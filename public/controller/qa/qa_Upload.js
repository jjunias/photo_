myApp.controller("qa_Upload",function($scope,$routeParams,$location){
	$scope.go = function(path){ //글쓰기 버튼 클릭시 page 이동 
    	$location.path(path);
  	};
	$scope.submit = function($event){ 
	    var reg_Writer = /^[a-zA-Z가-힣\s]{1,10}$/;
	    var result_Writer = reg_Writer.test($('#writer').val());
	    var reg_Pwd = /^(?=.*[a-zA-Z])(?=.*\d).{8,12}$/;
	    var result_Pwd = reg_Pwd.test($('#pwd').val());
	    var reg_Title = /^[\w\W]{1,15}$/;
	    var result_Title = reg_Title.test($("#title").val());
	    if(!result_Writer){
	     	alert("작성자를 적어주세요.");
	     	$event.preventDefault(); 
	    }
	    else if(!result_Pwd){
			alert("비밀번호를 올바르게 입력하세요..");
	     	$event.preventDefault(); 
	    }
	    else if(!($("#pwd").val() == $("#pwd_ok").val())){
	    	alert("입력하신 비밀번호가 서로 다릅니다.")
	    	$event.preventDefault();
	    }
	    else if(!result_Title){
	    	alert("제목을 입력해주세요.");
	    	$event.preventDefault();	
	    }
	};
	angular.element(function(){
		var now = new Date();
		$scope.date =now.getFullYear().toString().substr(2,2)+ "-"+(now.getMonth()+1)+
		"-"+now.getDate();
	});
});