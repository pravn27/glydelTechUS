app.controller("notificationController",["$scope","companyRoutes","$timeout", "notificationRoutes",
	function ($scope, companyRoutes, $timeout, notificationRoutes){

	$scope.companyNames = []
	$scope.notification = {}
	$scope.notification.selected_names = []
	$scope.notifications = []
	companyName = {}

	notificationRoutes.list(function(resp) {
		$scope.notifications = resp.data
	})

	companyRoutes.all(function(resp){
		angular.forEach(resp.data, function(value, key){
			companyName.id = value.contact_number
			companyName.label = value.name
			$scope.companyNames.push(companyName)
			companyName = {}
		})
	})

	$scope.notificationSettings = {
		enableSearch: true,
		scrollable: true,
		scrollableHeight: 350,
		smartButtonMaxItems: 3,
		displayProp: 'label', 
		idProp: 'label',
    	smartButtonTextConverter: function(itemText, originalItem) {
        	return itemText;
    	}
	};
	$scope.notificationTexts = {
		buttonDefaultText: "Select Customers"
	}

	$scope.sendNotifications = function(notification){
		$scope.customerCount = $scope.notification.selected_names.length
		$scope.sending = true
		$scope.notification_type = notification.notification_type
		selected_names=""
		angular.forEach(notification.selected_names, function(value, key) {
				selected_names += value.id+", "
		});
		$timeout(function () {
		    $scope.sending = false;
			notificationRoutes.create({notification_type: notification.notification_type, selected_names: selected_names, message_type: notification.message_type, body_content: notification.body_content},function(resp){
			$scope.success = true
			$('#notify').modal('hide')
				window.location = resp.path;
			})
		}, 3000);
	}
	
	$scope.notification.message_type = "Marketing"
	$scope.description = function(){
		$scope.notification.body_content="";
	}

}]);
