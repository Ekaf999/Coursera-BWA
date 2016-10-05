(function(){
'use strict'

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject=['MenuDataService','itemsList', '$stateParams'];
function ItemsController(MenuDataService, itemsList, $stateParams) {
  var controller = this;
  controller.itemsList = itemsList.menu_items;
  controller.categoryName = itemsList.category.name;
  controller.categoryShortName = $stateParams.categoryShortName;
}
})();
