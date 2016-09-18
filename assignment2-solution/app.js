(function() {                                                //IIFE
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;
    var service = ShoppingListCheckOffService;
    toBuy.list = service.getToBuyList();
    toBuy.bought = service.bought;
  }      //end of func. ToBuyShoppingController

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;
    var service = ShoppingListCheckOffService;
    bought.list = service.getBoughtList();
  }      //end of func. AlreadyBoughtShoppingController

  function ShoppingListCheckOffService() {
    var service = this;
    service.toBuyList = [{name: 'manna',        quantity: 1},
                         {name: 'strawberries', quantity: 1000},
                         {name: 'mulberries',   quantity: 500},
                         {name: 'raspberries',  quantity: 1000},
                         {name: 'blackberries', quantity: 500},
                         {name: 'blueberries',  quantity: 500}];
    service.boughtList = [];
    service.getToBuyList = function() {
      return service.toBuyList;
    };
    service.getBoughtList = function() {
      return service.boughtList;
    };
    service.bought = function(itemIndex) {
      service.boughtList.push(service.toBuyList[itemIndex]);
      service.toBuyList.splice(itemIndex, 1);          //remove
    };
  }      //end of func. ShoppingListCheckOffService
})();    //end of IIFE wrapper
