(function() {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['itemsList'];
function ItemsController(itemsList, categories) {
  var itemsCtrlr = this;

  itemsCtrlr.list = itemsList;
}

})();