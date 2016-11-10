app.controller("vehicle",["$scope","vehicleRoutes","companyRoutes",function ($scope, vehicleRoutes, companyRoutes){
	$scope.vehicle={};
	$scope.vehicles=[]
	vehicleRoutes.all(function(resp){
		angular.forEach(resp.data, function(value, key) {
			angular.forEach(value, function(value, key) {
				$scope.vehicles.push(value);
			});
		});	
	})
	companyRoutes.all(function(resp){
			$scope.companies=resp.data
	})
	$scope.vehicleFrom=function(vehicle,modal){
		if (modal == "create"){
			$scope.modal="create"
			vehicleRoutes.create(vehicle,function(resp){
				$('#vehicle').modal('hide')
				$scope.vehicle={}
				console.log(resp)
				$scope.vehicles.push(resp.data)
			})
		}
		else if (modal == "edit"){
			var id=vehicle["company_id"]["$oid"];
			vehicleRoutes.update({id:id,vehicle_id:vehicle["_id"]["$oid"]},vehicle,function(resp){
				window.location='/vehicles'
				$scope.clear()
				$('#vehicle').modal('hide')

			},function(a,b){
			})
		}
	}

	$scope.editVehicle=function(vehicle){
		$scope.modal="edit"
		var vehicle=angular.copy(vehicle);
		$('#vehicle').modal('show')
		$scope.vehicle=vehicle
	}
	
	$scope.edit=function(vehicle){	
	}

	$scope.delete=function(vehicle){
	}

	$scope.deleteVehicle=function(){
		var  vehicle=$scope.deletingData
			vehicleRoutes.delete({id:vehicle["company_id"]["$oid"],vehicle_id:vehicle["_id"]["$oid"]},function(resp){
				console.log(resp)
				window.location.reload()
			})
	}
	$scope.deletingModule = 'vehicle'

	$scope.readyToDelete = function (vehicle) {
		$scope.deletingData = vehicle
		$('#deleteModal').modal('show')
	}
	$scope.clear=function(){
		$scope.vehicle={}
	}

}])
