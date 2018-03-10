/**
 * 
 */
var app=angular.module('app',['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/edituserprofile',{
		templateUrl:'views/edituserprofile.html',
		controller:'UserController'
	})
	.when('/addjob',{
		templateUrl:'views/jobform.html',
		controller:'JobCtrl'
	})
	.when('/alljobs',{
		templateUrl:'views/jobslist.html',
		controller:'JobCtrl'
	})
	.when('/getjob/:id',{
		templateUrl:'views/jobdetail.html',
		controller:'JobCtrl'
	})
	.otherwise({
		templateUrl:'views/home.html'
	})
})
app.run(function($location,$rootScope,$cookieStore,UserService){
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get('currentuser')
		
	$rootScope.logout=function(){
		console.log('entering logout')
		UserService.logout().then(
				function(response){
					delete $rootScope.loggedInUser;
					$cookieStore.remove('currentuser')
					$rootScope.message="Successfully loggedout..."
					$location.path('/login')
				},function(response){
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
	}
})