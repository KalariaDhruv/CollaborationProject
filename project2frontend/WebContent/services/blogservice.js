/**
 * 
 */
app.factory('BlogService',function($http){
	var blogService={}
	console.log('in blogservice')
	blogService.addBlog=function(blog){
		console.log('in blogservice 2')
		return $http.post("http://localhost:9090/project2middleware/addblogpost",blog)
	}
	
	blogService.getBlogsWaitingForApproval=function(){
		return $http.get("http://localhost:9090/project2middleware/getblogs/"+0)
	}
	
	blogService.getBlogsApproved=function(){
		return $http.get("http://localhost:9090/project2middleware/getblogs/"+1)
	}
	
	blogService.getBlog=function(id){
		return $http.get("http://localhost:9090/project2middleware/getblog/"+id)
	}
	
	blogService.approve=function(blog){
		return $http.put("http://localhost:9090/project2middleware/approve",blog)
	}
	
	blogService.reject=function(blog){
		return $http.put("http://localhost:9090/project2middleware/reject",blog)
	}
	
	return blogService;
})