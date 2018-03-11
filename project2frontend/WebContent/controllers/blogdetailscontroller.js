/**
 * 
 */
app.controller('BlogDetailsCtrl',function($scope,$rootScope,$sce,$location,BlogService,$routeParams){
	var id=$routeParams.id;
	console.log('in blogdetails controller')
	BlogService.getBlog(id).then(
			
			function(response){
				console.log('in blogdetails controller 1')
				$scope.blog=response.data
			$scope.content=$sce.trustAsHtml($scope.blog.blogContent)
			},function(response){
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
			})
	
			$scope.approve=function(blog){
				BlogService.approve(blog).then(
						function(response){
					$location.path('/blogsnotapproved')
				},function(response){
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
	}
	
	$scope.reject=function(blog){
		BlogService.reject(blog).then(function(response){
			$location.path('/blogsnotapproved')
		},function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
	}
	
})
	
