(function() {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(shoppingList) {
	var toBuy = this;

	toBuy.item = new ListItem();
	shoppingList.addToBuyItem({ name: 'MacBook Pro Retina 13\"', quantity: 1 });
	shoppingList.addToBuyItem({ name: 'Beautifull Table for MacBooks', quantity: 1 });
	shoppingList.addToBuyItem({ name: 'Pen Tablet for Drawing', quantity: 1 });
	shoppingList.addToBuyItem({ name: 'Coca-Cola', quantity: '10 bottles' });
	shoppingList.addToBuyItem({ name: 'Popcorn', quantity: '10 bags' });

	toBuy.items = shoppingList.getToBuyItems();
	toBuy.addItem = function() {
		shoppingList.addToBuyItem(toBuy.item);
		toBuy.item = new ListItem();
	}

	toBuy.bought = function(index) {
		shoppingList.addBoughtItem(index);
	}
}

function ListItem() {
	this.quantity = '';
	this.name = '';
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(shoppingList) {
	var alreadyBought = this;

	alreadyBought.items = shoppingList.getBoughtItems();
}

function ShoppingListCheckOffService() {
	var service = this;

	var toBuyItems = [];
	var boughtItems = [];

	service.addToBuyItem = function(item) {
		toBuyItems.push(item);
	}

	service.addBoughtItem = function(index) {
		boughtItems.push(toBuyItems.splice(index, 1)[0]);
	}

	service.getToBuyItems = function() {
		return toBuyItems;
	}

	service.getBoughtItems = function() {
		return boughtItems;
	}

}

})();
