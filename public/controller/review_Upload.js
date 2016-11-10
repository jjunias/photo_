myApp.controller("review_Upload",function($scope,$http,$location){  //review 컨트롤러 기능
	$scope.viewDate ={}; //post 사용 시 값보냄
	$scope.viewWriteForm = function($event){
		$http({
  	  		url:"/viewWrite",
  	  		method:"post",
  	  		data:$scope.viewDate
  	  	}).success(function(){
  	  	});
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