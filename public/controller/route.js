var myApp = angular.module("myApp",['ngRoute','ngAnimate','slick']);
myApp.config(function($routeProvider){
	$routeProvider
	.when('/main',{	
		templateUrl :'pages/main.html',
		controller:'main_img'	
	})
	.when('/wedding',{
		templateUrl :'pages/wedding.html',
		controller :'wedding'
	})
	.when('/review',{
		templateUrl :'pages/review.html',
		controller :'review'
	})
	.when('/review_Upload',{
		templateUrl :'pages/review_Upload.html',
		controller:'review_Upload'
	})
	.when('/photo',{
		templateUrl :'pages/photo.html',
		controller:'photo'
	})
	.when('/photo_Upload',{
		templateUrl :'pages/photo_Upload.html',
		controller:'photo_Upload'
	})
	.when('/photo_Img/:number',{
		templateUrl :'pages/photo_Img.html',
		controller:'photo_Img'
	})
	.when('/qa',{
		templateUrl :'pages/qa.html',
		controller:'qa'
	})
	.when('/qa_Upload',{
		templateUrl :'pages/qa_Upload.html',	
		controller:'qa_Upload'
	})
	.when('/qa_Write/:number',{
		templateUrl :'pages/qa_Write.html',
		controller:'qa_Write'
	})
	.when('/qa_Update/:number',{
		templateUrl :'pages/qa_Update.html',
		controller:'qa_Update'
	})
	.otherwise({redirectTo:'/main'});
});