(function() {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['$rootScope'];
function MenuAppController($rootScope) {
  var menuApp = this;

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
    console.log(event);
  });
}

})();