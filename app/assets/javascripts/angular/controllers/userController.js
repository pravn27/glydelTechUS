app.controller('userController', function ($scope,userRoutes){
	$scope.login = function(user){
		$scope.logging = true
		userRoutes.login({user:user}, function(resp){
			window.location = "/dashboard"
		})
	}
	$scope.signup = function(user){
		$scope.signing = true
		userRoutes.signup({user:user}, function(resp){
			window.location = "/dashboard"
		})
	}
	$scope.logout = function(user){
		userRoutes.logout({user:user}, function(resp){
		})
	}
})