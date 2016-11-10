app.factory('notificationRoutes',['$resource', function ($resource) {
	var rule=$resource('/notifications', {id: '@id'}, {
		create: {
			url: '/notifications',
			method: 'POST'
		},

		list: {
			url: '/notifications/list',
			method: 'GET'
		}
	})
	return rule;
}]);