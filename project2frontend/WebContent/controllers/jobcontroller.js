/**
 * 
 */
app.controller('JobCtrl',function($scope,$rootScope,$location,JobService,$routeParams){
	var id=$routeParams.id
	$scope.addJob=function(job){
		console.log('entering jobcontroler function in frontend')
		JobService.addJob(job).then(
				function(response){
					alert('Job details posted successfully..')
					$location.path('/alljobs')
				},function(response){
					
					$rootScope.errror=response.data
					if(response.stats==401)
						$location.path('/login')
					
				})
	}
	JobService.getAllJobs().then(function(response){
		$scope.jobs=response.data
	},function(response){
		$rootScope.error=response.data
		if(response.status==401)
			$location.path('/login')
	})
	
	if(id!=undefined){
	JobService.getJob(id).then(function(response){
		$scope.job=response.data
	},function(response){
		$rootScope.error=response.data
		if(response.status==401)
			$location.path('/login')
	})
	}
})