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
				$scope.alert = 'We\'re not counting empty item! (e.g.: "L1, ,L3," counts 2 elements)'
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