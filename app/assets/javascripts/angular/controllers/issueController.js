app.controller('issueController', function ($scope, issueRoutes){
	$scope.getIssues = function(id){
		issueRoutes.list({id:id},function(resp) {
			$scope.issues = resp.data
		})
	}
	$scope.schedule ={}
	$scope.p0 = ["P0316", "P0300", "P0301", "P0302", "P0303", "P0304","P0305","P0306"]
	$scope.p1 = ["P0566", "P0565", "P0567"]
	$scope.scheduleDetails =function(issue){
		issueRoutes.vehicle({id:issue.vehicle_number},function(resp) {
			$scope.schedule.vehicle_name = resp.data.make
			$scope.schedule.vehicle_type = resp.data.vehicle_type
			$scope.schedule.scheduling_details = issue.issue_description
			$scope.schedule.vehicle_number = issue.vehicle_number
		})
	}
	param = getParam('id')
	if(param.length>0){
		$scope.getIssues(param[0])
	} else{
		$scope.getIssues()
	}
	$scope.scheduleVehicle =function(schedule){
		issueRoutes.schedule({vehicle_number:schedule.vehicle_number, vehicle_name: schedule.vehicle_name.make,vehicle_type: schedule.vehicle_type, scheduling_details: schedule.scheduling_details, scheduled_date: schedule.scheduled_date }, function(resp){
			window.location = resp.path;
		})
	}
})


function getParam(key) {
   var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
   var r=[], m;
   while ((m=re.exec(document.location.search)) != null) r[r.length]=m[1];
   return r;
}