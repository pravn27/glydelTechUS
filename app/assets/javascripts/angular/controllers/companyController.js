app.controller("company",["$scope","companyRoutes","$httpParamSerializer",function ($scope, companyRoutes, $httpParamSerializer){
	$scope.companies=[]
	//$scope.name="jay"
	$scope.modal="create"
	companyRoutes.all(function(resp){
			$scope.companies=resp.data
			// console.log(Array.isArray($scope.companies))
	})

	$scope.createCompany=function(companyObj){
		$scope.modal="create"
		console.log(companyObj)
		companyRoutes.create(companyObj,function(resp){
			$scope.companies.push(resp)
		})
	}

	$scope.editCompany=function(company){
		$scope.modal="edit"
		$('#company').modal('show')
		console.log(company["_id"]["$oid"]);
		$scope.company=company
	}

	$scope.edit=function(company){	
		company=angular.copy(company);
		var id=company["_id"]["$oid"];
		companyRoutes.update({id:id},company,function(resp){
			console.log(resp)
		})
	}

	$scope.deleteCompany=function(company){
		companyRoutes.delete({id:company["_id"]["$oid"]},function(resp){
			console.log(resp)
		})
	}


}])
