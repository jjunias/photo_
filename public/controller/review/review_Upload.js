myApp.controller("review_Upload",function($scope,$http,$location){  //review 컨트롤러 기능
	$scope.submit = function($event){ 
    var reg_Name = /^[a-zA-Z가-힣\s]{1,15}$/;
    var result_Name = reg_Name.test($('#name').val());
    var reg_age = /^[1-9][0-9]{0,2}$/;
    var result_age = reg_age.test($('#age').val());
    var reg_content = /^[a-zA-Z가-힣\s\W]{1,20}$/;
    var result_content = reg_content.test($("#content").val());
    if(!result_Name){
      alert("이름을 적어주세요.");
      $event.preventDefault(); 
    }
    else if(!result_age){
      alert("나이를 적어주세요.");
      $event.preventDefault();
    }
    else if($("#upload_").val()==""){
      alert("파일을 선택 해주세요.");
      $event.preventDefault();
      
    }
    else if(!result_content){
      alert("인사말을 적어주세요");
       $event.preventDefault();
    }
  };
	angular.element(function(){              // input file css 기능 script
		var fileTarget = $('.filebox .upload-hidden');
    	fileTarget.on('change', function(){  // 값이 변경되면
    		if(window.FileReader){  // modern browser
      			var filename = $(this)[0].files[0].name;
    		} 
    		else{  // old IE
      			var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
    		}
    	// 추출한 파일명 삽입
    	$(this).siblings('.upload-name').val(filename);
  		});
	});
});