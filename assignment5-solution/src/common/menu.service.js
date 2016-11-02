(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath', '$q'];
function MenuService($http, ApiPath, $q) {
  var service = this;
  var user = {firstName:null, lastName:null, email:null, phone:null, favoriteDish:null};
  var favoriteMenuItem;
  var tempFavorite;

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

  service.getUser = function () {return cloneObj(user);};
  service.setUser = function(obj) {
    for (var prop in user) {
      if(user.hasOwnProperty(prop)){
        if(obj.hasOwnProperty(prop)){
          user[prop]=obj[prop];
        } else {
          user[prop]= null;
        }
      }
    }
    favoriteMenuItem = tempFavorite;
  }

  service.FavoriteDishExists = function(short_name) {
     return $http.get(ApiPath + '/menu_items/' + short_name.toUpperCase() + '.json')
       .then(function(response){tempFavorite = response.data;});
  };
 
 service.getFavoriteMenuItem = function () {return favoriteMenuItem;};

 function cloneObj(obj) {
   var clone={};
   for (var prop in obj) {
      if(obj.hasOwnProperty(prop)){clone[prop]=user[prop];}
   }
   return clone;
  }

}

})();
