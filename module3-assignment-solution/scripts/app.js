(function() {
'use strict';

angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItems)
	.constant('MenuItemsLink', "https://davids-restaurant.herokuapp.com/menu_items.json");

function FoundItems() {
	var ddo = {
		restrict: 'E',
		templateUrl: 'foundItems.html',
		scope: {
			items: "<foundItems",
			dontWant: "&onRemove"
		}
	}

	return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(menuSearchService) {
	var narrow = this;

	narrow.downIt = function() {
		if( narrow.searchTerm ) {
			narrow.searching = true;
			var promise = menuSearchService.getMatchedMenuItems(narrow.searchTerm);

			promise.then(function(response) {
				narrow.searching = false;
				narrow.menuItems = response;
				narrow.empty = !narrow.menuItems.length;
			})
			.catch(function(errorResponse) {
				narrow.error = errorResponse;
			});
		}

		narrow.empty = !narrow.searchTerm;
	}

	narrow.removeItem = function(index) {
		narrow.menuItems.splice(index, 1);
		narrow.empty = !narrow.menuItems.length;
	}

}


MenuSearchService.$inject = ['$http', 'MenuItemsLink'];
function MenuSearchService($http, menuItemsLink) {
	var menuSearch = this;

	menuSearch.getMatchedMenuItems = function(searchTerm) {
		var term = searchTerm;
		return $http({
			method: "GET",
			url: menuItemsLink
		}).then(function(result) {
			var menuItems = result.data.menu_items;
			var foundItems = [];
			for(var i = 0; i < menuItems.length; i++) {
				if(menuItems[i].description.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
					foundItems.push(menuItems[i]);
				}
			}
			console.log("found", foundItems.length, "items");
			return foundItems;
		});
	}
}

})();
