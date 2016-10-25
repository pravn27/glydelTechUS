app.factory('scheduleRoutes',['$resource', function ($resource) {
	var rule=$resource('/schedules', {id: '@id'}, {
		list: {
			url: '/schedules/vehicles',
			method: 'GET'
		},
		all: {
			url: '/schedules/all',
			method: 'GET'
		},
		show: {
			url: '/schedules/:id',
			method: 'GET'
		},
		create: {
			url: '/schedules',
			method: 'POST'
		},
		update: {
			url: '/schedules/:id',
			method: 'PUT'
		},
		delete: {
			url: '/schedules/:id',
			method: 'DELETE'
		}
	})
	return rule;
}]);