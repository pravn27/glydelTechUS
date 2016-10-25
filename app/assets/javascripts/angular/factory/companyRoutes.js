app.factory('companyRoutes',['$resource', function ($resource) {
	var rule=$resource('/companies', {id: '@id'}, {
		create: {
			url: '/company/create',
			method: 'POST'
		},

		all: {
			url: '/companies/all',
			method: 'GET'
		},

		edit: {
			url: '/company/edit/:id',
			method: 'GET'
		},
		
		update: {
			url: '/companies/:id.json',
			method: 'PUT'
		},
		delete: {
			url: '/companies/:id',
			method: 'DELETE'
		}
	})
	return rule;
}]);