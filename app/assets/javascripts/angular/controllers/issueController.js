app.controller('issueController', function ($scope, issueRoutes){
	$scope.getIssues = function(schedule){
		issueRoutes.list(function(resp) {
			$scope.issues = resp.data
		})
	}
	$scope.getIssues()
	$scope.schedule ={}
	$scope.scheduleDetails =function(issue){
		issueRoutes.vehicle({id:issue.vehicle_id.$oid},function(resp) {
			$scope.schedule.vehicle_name = resp.data.make
			$scope.schedule.vehicle_type = resp.data.vehicle_type
			$scope.schedule.scheduling_details = issue.issue_description
			$scope.schedule.vehicle_id = issue.vehicle_id.$oid
		})
	}
	$scope.scheduleVehicle =function(schedule){
		issueRoutes.schedule({id:schedule.vehicle_id, vehicle_name: schedule.vehicle_name.make,vehicle_type: schedule.vehicle_type, scheduling_details: schedule.scheduling_details, scheduled_date: schedule.scheduled_date }, function(resp){
			window.location = resp.path;
		})
	}
})