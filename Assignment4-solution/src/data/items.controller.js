(function(){
'use strict'

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject=['itemsList', '$stateParams'];
function ItemsController(itemsList, $stateParams) {
  var controller = this;
  controller.itemsList = itemsList.menu_items;
  controller.categoryName = itemsList.category.name;
  controller.categoryShortName = $stateParams.categoryShortName;
}
})();
