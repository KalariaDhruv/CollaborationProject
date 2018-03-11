/**	
 * 
 */
app.controller('BlogCtrl',function($scope,$location,$rootScope,BlogService){
	console.log('in blog controller')
	$scope.addBlog = function(blog){
		console.log('in blogservice 1')
		BlogService.addBlog(blog).then(
				
				function(response){
					console.log('in blogservice 2')
					alert('Blog post is added successfully.. and waiting for approval..');
					$location.path('/home')
				},
				function(response){	
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
					
				})
	}

	if($rootScope.loggedInUser.role=='ADMIN'){
		console.log('in blog  waiting controller')
	BlogService.getBlogsWaitingForApproval().then(
			function(response){
				console.log('in blog  waitinfg 2 controller')
				$scope.blogsWaitingForApproval=response.data
				//alert('Blog post is added successfully.. and waiting for approval..')
				//$location.path('/home')
			},function(response){
				console.log('in blog  waitinfg 3 controller')
				$rootScope.error=response.data
				if(response.status==401)
					console.log('in blog  waitinfg 4 controller')
					$location.path('/login')
				
			})
	}
	
	BlogService.getBlogsApproved().then(
			function(response){
				$scope.blogsApproved=response.data
				//alert('Blog post is added successfully.. and waiting for approval..')
				//$location.path('/home')
			},function(response){
				
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
				
			})

})	