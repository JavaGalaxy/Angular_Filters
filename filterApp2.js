( function () {

  angular.module('FilterApp2', [])

  .controller('FilterController2', FilterController2)
  .filter('loves', lovesFilter)
  .filter('truth', TruthFilter);


  	  FilterController2.$inject = ['$scope', 'lovesFilter'];

  	  /** This is FilterController which takess $scope and custom made Filter as an arguments **/
	  function FilterController2($scope, lovesFilter) {
	  		
	  		$scope.msg = "Hello This is Custom Filter With Argument Example ";

	  		$scope.sayMessage = function() {
	  			var msg =  "This is original Message";
	  			return msg;
	  		}

	  		$scope.sayNewMessage = function() {
	  			var msg = "This is original Message";

	  			msg = lovesFilter(msg);
	  			return msg;
	  		}
	  };

	  /** This is custom Factory Filter which takes no / additional arguments **/
	  function lovesFilter() {
	  		return  function(input) {

	  				input = input || "";
	  				input = input.replace("original", "duplicate");

	  				return input;
	  		}
	  }

	  function TruthFilter() {
	  		return function(input, target, replace1) {

	  			input = input || "";
	  			input = input.replace(target, replace1);

	  			return input;
	  		}
	  }


})()