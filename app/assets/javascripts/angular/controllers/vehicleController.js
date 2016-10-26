app.controller("vehicle",["$scope","vehicleRoutes",function ($scope, vehicleRoutes){
	$scope.vehicle={};
	$scope.vehicles=[]

	vehicleRoutes.all(function(resp){
		$scope.vehicles=resp.data[0]	
		console.log($scope.vehicles)
	})

	$scope.createVehicle=function(vehicleObj){
		$scope.modal="create"
		console.log(vehicleObj)
		vehicleRoutes.create(vehicleObj,function(resp){
			$('#vehicle').modal('hide')
			$scope.vehicle={}
			$scope.vehicles.push(resp)
		})
	}

	$scope.editVehicle=function(vehicle){
		$scope.modal="edit"
		$('#vehicle').modal('show')
		$scope.vehicle=vehicle
		console.log($scope.vehicle)
	}
	
	$scope.edit=function(vehicle){	
		company=angular.copy(vehicle);
		var id=vehicle["_id"]["$oid"];
		vehicleRoutes.update({id:id},vehicle,function(resp){
			console.log(resp)
		})
	}

	$scope.deleteVehicle=function(vehicle){
		vehicleRoutes.delete({id:vehicle["company_id"]["$oid"],vehicle_id:vehicle["_id"]["$oid"]},function(resp){
			console.log(resp)
			location.href('/vehicles')

		})
	}
	$scope.clear=function(){
		$scope.vehicle={}
	}

}])
