(function() {               //IIFE
  'use strict'
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItemsDirective', FoundItemsDirective)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;
    var service = MenuSearchService;
    controller.notClicked = true; //avoid displaying "not found" before first click
    controller.getMatchedMenuItems = function() {
      service.getMatchedMenuItems(controller.searchTerm)
      .then(function(response) { controller.found = response;
                                 controller.notClicked = false;})
      .catch(function(response) {controller.found = response;
                                 controller.notClicked = false;})
    };
    controller.remove = function(index) {
      service.remove(index);
      controller.found=service.getFound();
    }
  }                          //end of func. NarrowItDownController

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    service.found=[];
    service.getFound = function() {return service.found};
    service.getMatchedMenuItems = function(searchTerm) {
      return $http({url: (ApiBasePath + "/menu_items.json")})
      .then(function resolved(response){
              if (!searchTerm) {
                service.found = [] ;
                return service.found;
              } else {
              service.found = response.data.menu_items.filter(function(elem)
                                     {return elem.description.search(searchTerm)>-1});
              return service.found;
              }
      })
      .catch(function error(response) {
        return [];
      }); //end of promise
    };         //end of func. getMatchedMenuItems
    service.remove = function(index) {
      service.found.splice(index, 1);
    };
  }                          //end of func. MenuSearchService

  function FoundItemsDirective(){
    var ddo = {templateUrl: "directive.html",
               scope: {found : '<',
                      notClicked : '<',
                      remove: '&'}
    };
    return ddo;
  }                          //end of func. FoundItemsDirective

})();                        //end of IIFE
