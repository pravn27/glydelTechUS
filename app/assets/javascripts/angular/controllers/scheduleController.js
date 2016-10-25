app.controller('scheduleController', function ($scope, scheduleRoutes){
	$scope.schedules = [
		{
			"name": "Honda TR-1 (2015 | Truck011NR)",
			"type": "Truck",
			"details": "Descrption details about schedule. Descrption details about schedule",
			"date": "12/10/2016"

		},
		{
			"name": "Honda TR-1 (2015 | Truck011NR)",
			"type": "Truck",
			"details": "Descrption details about schedule. Descrption details about schedule",
			"date": "12/10/2016"

		},
		{
			"name": "Honda TR-1 (2015 | Truck011NR)",
			"type": "Truck",
			"details": "Descrption details about schedule. Descrption details about schedule",
			"date": "12/10/2016"

		},
		{
			"name": "Honda TR-1 (2015 | Truck011NR)",
			"type": "Truck",
			"details": "Descrption details about schedule. Descrption details about schedule",
			"date": "12/10/2016"

		}
	]
	$scope.addSchedule = function(schedule){
		scheduleRoutes.create({schedule:schedule}, function(resp) {
			a = resp
		})
	}

})