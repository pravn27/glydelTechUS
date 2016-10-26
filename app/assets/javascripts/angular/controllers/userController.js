app.controller('userController', function ($scope,userRoutes){
	$scope.login = function(user){
		userRoutes.login({user:user}, function(resp){
			window.location = "/dashboard"
		})
	}
	$scope.signup = function(user){
		userRoutes.signup({user:user}, function(resp){
			window.location = "/dashboard"
		})
	}
	$scope.logout = function(user){
		userRoutes.logout({user:user}, function(resp){
		})
	}
})