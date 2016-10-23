(function(){
  'use strict';

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject=['MenuService', 'naFilter'];
  function InfoController(MenuService) {
    var Info = this;
    Info.user = MenuService.getUser();
    Info.FavoriteMenuItem = MenuService.getFavoriteMenuItem();
  }
})();
