(function(){
'use strict'

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject=['categoriesList'];
function CategoriesController(categoriesList) {
  var controller = this;
  controller.categoriesList = categoriesList;
}

})();
