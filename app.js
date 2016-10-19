(function () {
'use strict';

angular.module('filterApp', [])

.controller('filterController', filterController);

filterController.inject = ['$scope', 'filter'];

function filterController($scope, $filter) {

	$scope.name = "Amogh";
	$scope.statement = "is happy :-) ";

	
	$scope.message = "Always be Happy !! for no reason . Become rich ";

	$scope.showMoney = function () {

		$scope.cost = 1;
		$scope.money = "A Fistful of dollar";
	};
}

}
)()