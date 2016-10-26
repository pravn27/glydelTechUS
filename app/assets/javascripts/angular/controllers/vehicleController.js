app.controller("vehicle",["$scope","vehicleRoutes",function ($scope, companyRoutes){

	$scope.vehicles=[]
	//$scope.name="jay"
	vehicleRoutes.all(function(resp){
			$scope.companies=resp.data
			// console.log(Array.isArray($scope.companies))
	})
	$scope.createVehicle=function(vehicleObj){
		$scope.modal="create"
		console.log(companyObj)
		vehicleRoutes.create(vehicleObj,function(resp){
			$scope.vehicles.push(resp)
		})
	}

	$scope.editVehicle=function(vehicle){
		$scope.modal="edit"
		$('#company').modal('show')
		$scope.vehicle=vehicle
	}
	
	$scope.edit=function(vehicle){	
		company=angular.copy(vehicle);
		var id=vehicle["_id"]["$oid"];
		vehicleRoutes.update({id:id},vehicle,function(resp){
			console.log(resp)
		})
	}

	$scope.deleteVehicle=function(vehicle){
		vehicleRoutes.delete({id:vehicle["_id"]["$oid"]},function(resp){
			console.log(resp)
		})
	}

}])
