(function(){   //IIFE
'use strict'

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',
           {url: '/',
            templateUrl: 'views/home.html'})
    .state('categories',
           {url: "/categories",
            templateUrl: "views/categories.html",
            controller: 'CategoriesController as CategoriesController',
            resolve: {categoriesList: ['MenuDataService',function(MenuDataService){
                                          return MenuDataService.getAllCategories();}]}
          })
    .state('items',
           {url:"/items/{categoryShortName}",
            templateUrl: "views/items.html",
            controller: 'ItemsController as ItemsController',
            resolve: {itemsList: ['MenuDataService',  '$stateParams', function(MenuDataService, $stateParams){
                                  return MenuDataService.getItemsForCategory($stateParams.categoryShortName);;}]}
          });
} // end of RoutesConfig function
})(); // end of IIFE
