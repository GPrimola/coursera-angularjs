(function() {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoriesList', '$rootScope'];
function CategoriesController(categoriesList, $rootScope) {
  var categoriesCtrlr = this;

  categoriesCtrlr.list = categoriesList;

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
    console.log(event, toState, toParams, fromState, fromParams);
  });
}

})();