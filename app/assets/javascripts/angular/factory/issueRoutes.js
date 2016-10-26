app.factory('issueRoutes',['$resource', function ($resource) {
	var rule=$resource('/issues', {id: '@id'}, {
		list: {
			url: '/issues/list',
			method: 'GET'
		},
		delete: {
			url: '/issues/:id',
			method: 'DELETE'
		},
		vehicle: {
			url: '/issues/vehicle',
			method: 'GET'
		},
		schedule: {
			url: '/issues/schedule',
			method: 'POST'
		}
	})
	return rule;
}]);