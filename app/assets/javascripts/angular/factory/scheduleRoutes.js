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
		edit: {
			url: '/schedules/:id/edit',
			method: 'GET'
		},
		create: {
			url: '/schedules',
			method: 'POST'
		},
		update: {
			url: '/schedules/:id',
			method: 'PATCH'
		},
		complete: {
			url: '/schedules/complete',
			method: 'PATCH'
		},
		issue: {
			url: '/schedules/issues',
			method: 'GET'
		},
		calendar: {
			url: '/schedules/events',
			method: 'GET'
		},
		delete: {
			url: '/schedules/:id',
			method: 'DELETE'
		}
	})
	return rule;
}]);