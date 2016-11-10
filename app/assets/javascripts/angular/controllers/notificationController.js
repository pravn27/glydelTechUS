app.controller("notificationController",["$scope","companyRoutes","$timeout",
	function ($scope, companyRoutes, $timeout){

	$scope.companyNames = []
	$scope.selectedNames = []
	companyName = {}
	companyRoutes.all(function(resp){
		angular.forEach(resp.data, function(value, key){
			companyName.id = value.contact_number
			companyName.label = value.name
			$scope.companyNames.push(companyName)
			companyName = {}
		})
	})

	$scope.email = function(){
		$scope.emailCount = $scope.selectedNames.length
		$scope.success = true
		$scope.sending = true
		$timeout(function () {
		      $scope.sending = false;
		}, 5000);
	}

}]);
