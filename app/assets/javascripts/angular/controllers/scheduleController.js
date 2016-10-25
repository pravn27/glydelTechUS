app.controller('scheduleController', function ($scope, scheduleRoutes, $httpParamSerializer){
	$scope.vehicle_types = ["Gas", "Truck", "Mini-Truck"]
	$scope.getVehicles = function(schedule){
		scheduleRoutes.list(function(resp) {
			$scope.vehicles = resp.data
		})
	}
	$scope.getVehicles()
	$scope.schedules = []
	$scope.getSchedule = function(){
		scheduleRoutes.all(function(resp) {
			$scope.schedules = resp.data
			console.log(resp.data)
		})
	}
	$scope.getSchedule()
	$scope.addSchedule = function(schedule){
		id = schedule.vehicle_name._id.$oid
		scheduleRoutes.create({id:id, vehicle_name: schedule.vehicle_name.make,vehicle_type: schedule.vehicle_type, scheduling_details: schedule.scheduling_details, scheduled_date: schedule.scheduled_date }, function(resp) {
			 window.location = resp.path;
		})
	}

})