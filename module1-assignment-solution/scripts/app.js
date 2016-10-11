(function() {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope', '$filter'];
	function LunchCheckController($scope) {
		$scope.checkLunchList = function() {
			var msg = 'Please enter data first';
			if($scope.lunchList) {
				if($scope.lunchList.split(',').filter(elementsNotEmpty).length <= 3) {
					msg = 'Enjoy!';
				} else {
					msg = 'Too much!';
				}
			}

			$scope.resultMessage = msg;
		}
	}

	function elementsNotEmpty(element) {
		if(element && element.trim().length > 0) {
			return true;
		} else {
			return false;
		}
	}

})();