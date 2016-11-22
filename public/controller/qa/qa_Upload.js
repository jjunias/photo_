myApp.controller("qa_Upload",function($scope,$routeParams,$http,$location){
	$scope.viewDate={};
	angular.element(function(){
		var now = new Date();
		$scope.viewDate.date =now.getFullYear()+ "-"+(now.getMonth()+1)+
		"-"+now.getDate();
	});
});