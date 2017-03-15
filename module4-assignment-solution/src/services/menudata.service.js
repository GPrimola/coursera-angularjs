(function() {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('API_BASE_PATH', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'API_BASE_PATH'];
function MenuDataService($http, apiBasePath) {
  var menuData = this;

  menuData.getAllCategories = function() {
    var promise = $http({
      method: 'GET',
      url: (apiBasePath + '/categories.json')
    });

    return promise;
  };

  menuData.getItemsForCategory = function(categoryShortName) {
    var promise = $http({
      method: 'GET',
      url: (apiBasePath + '/menu_items.json?category=' + categoryShortName)
    });

    return promise;
  };
}

})();