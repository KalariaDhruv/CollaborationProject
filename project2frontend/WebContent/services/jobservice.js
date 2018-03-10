/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.addJob=function(job){
		
		console.log('in jobservice')
		return $http.post("http://localhost:9090/project2middleware/addjob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:9090/project2middleware/alljobs")
	}
	
	jobService.getJob=function(id){
		return $http.get("http://localhost:9090/project2middleware/getjob/"+id)
	}
	
	return jobService;
})