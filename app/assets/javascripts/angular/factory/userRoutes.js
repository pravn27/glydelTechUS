app.factory('userRoutes',['$resource', function ($resource) {
	var rule=$resource('/users', {id: '@id'}, {
		login: {
			url: '/users/sign_in',
			method: 'POST'
		},
		signup: {
			url: '/users',
			method: 'POST'
		},
		logout: {
			url: '/users/sign_out',
			method: 'GET'
		}
	})
	return rule;
}]);