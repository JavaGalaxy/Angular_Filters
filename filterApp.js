( function () {

	angular.module('filterApp', [])

	.controller('filterController', filterController);

	filterController.inject = ['$scope', '$filter'];

function filterController($scope, $filter) {

		var msg = "This is how filter works";
		$scope.name =$filter('uppercase') (msg);
		$scope.lastName = "bond";
	}
 
}
)()