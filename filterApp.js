( function () {

	angular.module('FilterApp', [])

	.controller('FilterController', FilterController)
	.filter('loves', lovesFilter);						 /** Filter gets registered here**/

	FilterController.$inject = ['$scope', 'lovesFilter'];

/** Controller Begins **/
	function FilterController($scope, lovesFilter) {

		var msg = "This is how filter works";

		$scope.sayMessage = function() {

		var msg = "Amogh likes to do Yoga !";
		return msg;

		}

		$scope.sayLovesMessage = function() {
			var msg = "Amogh likes to do Yoga !";
			msg = lovesFilter(msg);
			return msg;
		}

	}
/** Controller Ends**/

/** Filter Function without custom Arguments **/
	function lovesFilter() {

		return function (input) {
			input = input || "";
			input = input.replace("likes", "loves");
			return input;
		};
	}

})()