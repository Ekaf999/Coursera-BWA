(function(){
'use strict'

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('BaseUrl', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject=['$http', 'BaseUrl']
function MenuDataService($http, BaseUrl){
  var service=this;

  service.getAllCategories = function() {
    // https://davids-restaurant.herokuapp.com/categories.json
    return $http({url:(BaseUrl+'/categories.json')})
           .then(function(response) {return response.data;})
           .catch(function(error) {console.log(error); return [];});
  }

  service.getItemsForCategory = function(categoryShortName) {
    // https://davids-restaurant.herokuapp.com/menu_items.json?category=
    return $http({url:(BaseUrl+'/menu_items.json'),
                  params: {category:categoryShortName}})
           .then(function(response) {return response.data;})
           .catch(function(error) {console.log(error); return [];});
  }
} // end of MenuDataService function

})();
