(function(){
'use strict'

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject=['MenuDataService','categoriesList'];
function CategoriesController(MenuDataService, categoriesList) {
  var controller = this;
  controller.categoriesList = categoriesList;
}

})();
