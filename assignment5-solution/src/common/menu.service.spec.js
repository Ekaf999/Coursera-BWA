"use strict";
describe('FavoriteDishExists service function', function() {

  var MenuService;
  var $httpBackend;
  var ApiPath;
  var status;

  beforeEach(function(){
    module('common');
    inject(function($injector) {
      MenuService = $injector.get('MenuService');
      ApiPath = $injector.get('ApiPath');
      $httpBackend = $injector.get('$httpBackend');
      status = undefined;
    });
  });

  it('shall return a resolved promise if item is on the list; \
      favoriteMenuItem shall be set to response.data.', function() {
    var responseData = {"id":1, "short_name":"SOUP", "description":"delicious soup"};
    $httpBackend.when('GET', ApiPath + '/menu_items/SOUP.json')
    .respond(200, responseData);
    var promise = MenuService.FavoriteDishExists('SOUP');
    //***************************************************
    promise
    .then(function(response){status = 'resolved';})
    .catch(function(){status='rejected';})
    .finally(function() {
       expect(status).toBe('resolved');
       expect(MenuService.getFavoriteMenuItem()).toEqual(responseData)
     });
    //***************************************************
    $httpBackend.flush();
    // No need for promise.then... block if we use promise.$$state.status (private API!)
    // after flush was called.  (0: pending, 1(or-1): resolved, 2: rejected). See next it()
  });

  it('shall return a rejected promise if item is not on the list; \
     favoriteMenuItem shall stay unchanged.', function() {
    var favoriteMenuItemOld = MenuService.getFavoriteMenuItem();
    $httpBackend.whenGET(ApiPath + '/menu_items/HAMMER.json')
    .respond(500,''); // mock internal server error
    var promise = MenuService.FavoriteDishExists('hammer');
    $httpBackend.flush();
    expect(promise.$$state.status).toBe(2); //2=rejected
    expect(MenuService.getFavoriteMenuItem()).toEqual(favoriteMenuItemOld)
    });

 });

 //* successful response: {data: Object, status: 200, config: Object, statusText: "OK"}
 //* error response: Object {data: Object, status: 500, config: Object, statusText: "Internal Server Error"}
