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
			console.log(resp)
			$scope.vehicles.push(resp.data)
		})
	}

	$scope.editVehicle=function(vehicle){
		$scope.modal="edit"
		$('#vehicle').modal('show')
		$scope.vehicle=vehicle
		console.log($scope.vehicle)
	}
	
	$scope.edit=function(vehicle,index){	
		company=angular.copy(vehicle);
		var id=vehicle["company_id"]["$oid"];
		vehicleRoutes.update({id:id,vehicle_id:vehicle["_id"]["$oid"]},vehicle,function(resp){
			
		})
	}

	$scope.deleteVehicle=function(vehicle,index){
		vehicleRoutes.delete({id:vehicle["company_id"]["$oid"],vehicle_id:vehicle["_id"]["$oid"]},function(resp){
			console.log(resp)
			$scope.vehicles.splice(index,1)
		})
	}
	$scope.clear=function(){
		$scope.vehicle={}
	}

}])
