(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories-list.html',
    controller: 'CategoriesController as categoriesCtrlr',
    resolve: {
      categoriesList: ['MenuDataService', function(menuData) {
        return menuData.getAllCategories().then(function(response) {
          return response.data;
        });
      }]
    }
  })

  .state('items', {
    url: '/categories/:categorySN/items',
    templateUrl: 'src/templates/items-list.html',
    controller: 'ItemsController as itemsCtrlr',
    resolve: {
      itemsList: ['MenuDataService', '$stateParams', function(menuData, $stateParams) {
        return menuData.getItemsForCategory($stateParams.categorySN).then(function(response) {
          return response.data.menu_items;
        });
      }]
    }
  });

}

})();