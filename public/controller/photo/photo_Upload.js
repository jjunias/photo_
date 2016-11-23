myApp.controller("photo_Upload",function($scope,$http,$routeParams){
	$scope.viewDate ={};
    $scope.photoWriteForm = function($event){
    	var reg_Loc = /^[a-zA-Z가-힣0-9\s]{1,10}$/;
   		var result_Loc = reg_Loc.test($('#location').val());
    	if(!result_Loc){
      		alert("촬영지를 입력해주세요.");
      		$event.preventDefault(); 
   		}
   		else if($("#upload_").val()==""){
      		alert("파일을 선택 해주세요.");
      		$event.preventDefault();
 		}
   }
	angular.element(function(){              // input file css 기능 script
		var now = new Date();
		$scope.viewDate.date =now.getFullYear()+ "-"+(now.getMonth()+1)+"-"+now.getDate();
		var fileTarget = $('.filebox .upload-hidden');
		var name = "";
    	fileTarget.on('change', function(){  // 값이 변경되면
    		if(window.FileReader){  // modern browser
    			for(var i=0;i<$("#ex_filename").get(0).files.length;i++){
    			name = name + $("#ex_filename").get(0).files[i].name+"\n";
    			}
          		var filename = name + $("#ex_filename").get(0).files.length + " 개의 파일이 선택 되었습니다.";
    		} 
    		else{  // old IE
      			var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
    		}
    	// 추출한 파일명 삽입
    	$('.upload-name').val(filename);
  		});
	});
});