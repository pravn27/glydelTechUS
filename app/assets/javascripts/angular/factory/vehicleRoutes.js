app.factory('vehicleRoutes',['$resource', function ($resource) {
	var rule=$resource('/vehicles', {id: '@id'}, {
		create: {
			url: '/vehicles/create',
			method: 'POST'
		},

		all: {
			url: '/vehicles/all',
			method: 'GET'
		},

		edit: {
			url: '/vehicle/:id',
			method: 'GET'
		},
		
		update: {
			url: '/vehicles/:id.json',
			method: 'PUT'
		},
		delete: {
			url: '/vehicles/:id',
			method: 'DELETE'
		}
	})
	return rule;
}]);