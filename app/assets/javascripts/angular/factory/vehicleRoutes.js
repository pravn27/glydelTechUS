app.factory('vehicleRoutes',['$resource', function ($resource) {
	var rule=$resource('/vehicles', {id: '@id'}, {
		create: {
			url: '/vehicle/create',
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
			url: '/vehicles/:id/:vehicle_id',
			method: 'DELETE'
		}
	})
	return rule;
}]);