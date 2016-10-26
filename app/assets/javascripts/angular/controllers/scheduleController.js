app.controller('scheduleController', function ($scope, scheduleRoutes){
	$scope.vehicle_types = ["Gas", "Truck", "Mini-Truck"]
	$scope.add = true
	$scope.edit = false
	$scope.getVehicles = function(schedule){
		scheduleRoutes.list(function(resp) {
			$scope.vehicles = resp.data
		})
	}
	$scope.getVehicles()
	$scope.schedules = []
	$scope.getAllSchedules = function(){
		scheduleRoutes.all(function(resp) {
			$scope.schedules = resp.data
		})
	}
	$scope.getAllSchedules()
	$scope.addSchedule = function(schedule){
		id = schedule.vehicle_name._id.$oid
		scheduleRoutes.create({id:id, vehicle_name: schedule.vehicle_name.make,vehicle_type: schedule.vehicle_type, scheduling_details: schedule.scheduling_details, scheduled_date: schedule.scheduled_date }, function(resp) {
			 window.location = resp.path;
		})
	}
	$scope.updateSchedule = function(schedule){
		scheduleRoutes.update({vehicle_name: schedule.vehicle_name.make,vehicle_type: schedule.vehicle_type, scheduling_details: schedule.scheduling_details, scheduled_date: schedule.scheduled_date },{id:schedule._id.$oid}, function(resp) {
			 window.location = resp.path;
		})
	}
	$scope.schedule = {}
	$scope.getSchedule = function (id) {
		$scope.add = false
		$scope.edit = true
		scheduleRoutes.edit({id:id.$oid}, function(resp) {
			$scope.schedule = resp.data
		})	 
	}
	$scope.removeSchedule = function (id) {
		scheduleRoutes.delete({id:id.$oid}, function(resp) {
			window.location = resp.path;
		})	 
	}
	$scope.completeSchedule = function (id) {
		scheduleRoutes.complete({id:id.$oid}, function(resp) {
			window.location = resp.path;
		})	 
	}
	$scope.viewIssues = function (id) {
		scheduleRoutes.issue({id:id.$oid}, function(resp) {
			window.location = resp.path+"?id="+resp.data._id.$oid;
		})	 
	}
})