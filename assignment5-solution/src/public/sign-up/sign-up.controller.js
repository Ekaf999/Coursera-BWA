(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpFormController', SignUpFormController);

  SignUpFormController.$inject=['MenuService'];
  function SignUpFormController(MenuService) {
    var SignUpForm = this;
    SignUpForm.completed = false;
    SignUpForm.user = MenuService.getUser();  //passed by reference! --> "2-way binding"
    SignUpForm.submit = function() {this.completed=true;};
    SignUpForm.FavoriteDishExists = MenuService.FavoriteDishExists; //validator
  }
})();
