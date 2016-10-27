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
	$scope.getAllSchedules = function(date){
		scheduleRoutes.all({date:date},function(resp) {
			$scope.schedules = resp.data
			angular.forEach($scope.schedules, function(value) {
				date = new Date(value.scheduled_date).toDateString()
				value.s_date = date
			});
		})
	}
	param = getParam('date')
	if(param.length>0){
		$scope.getAllSchedules(param[0])
	} else{
		$scope.getAllSchedules()
	}
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
	$scope.fetchEvents = function (){
		scheduleRoutes.calendar(function(resp) {
			events = myCounter(resp.data)
			angular.forEach(events, function(value, key) {
				date = new Date(key)
				event = {
					"title": value+" schedule(s)",
					"start": date,
					"value" : key
				}
				$scope.allEvents.push(event)				
			});
		})	 
	}
	$scope.uiConfig = {
        calendar:{
        	eventClick:function(event) {
        		date = event.value;
        		window.location = '/schedules?date='+date
        	},
        	dayClick: function(date) {
        		$('#schedule').modal('show')
        		$scope.schedule.scheduled_date = date._d
    		},
            events:$scope.fetchEvents
        }
    };
    $scope.allEvents = []
	$scope.eventSources = [$scope.allEvents];
	function myCounter(input) {        
		return input.reduce( (countWords, word) => {
			countWords[word] = ++countWords[word] || 1;
			return countWords;
		}, {});
	}
	$scope.dateFilter = function () {
		date = $scope.filterDate.toDateString();
		$scope.fDate = date
	}
})

function getParam(key) {
   var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
   var r=[], m;
   while ((m=re.exec(document.location.search)) != null) r[r.length]=m[1];
   return r;
}