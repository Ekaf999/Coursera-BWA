(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath', '$q'];
function MenuService($http, ApiPath, $q) {
  var service = this;
  var user = {firstName:null, lastName:null, email:null, phone:null, favoriteDish:null};
  var favoriteMenuItem;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }
    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getUser = function () {return user;};

  service.FavoriteDishExists = function(short_name) {
     return $q(function(resolve,reject){
       $http.get(ApiPath + '/menu_items/' + short_name.toUpperCase() + '.json')
       .then(function(response){
         favoriteMenuItem = response.data;
         resolve();})
       .catch(function(){reject();});
    })
  };

 service.getFavoriteMenuItem = function () {return favoriteMenuItem;};
}

})();
