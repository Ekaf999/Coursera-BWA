(function() {                                                //IIFE
  'use strict';
  angular.module('LunchApp', []).controller('LunchCheckController', lunchCheck);
  lunchCheck.$inject = ['$scope'];
  function lunchCheck($scope) {
    var messages = ['Please enter data first', 'Enjoy!', 'Too much!'];
    $scope.dishlist = '';
    $scope.dishlistClass = '';                               //Bonus assignement
    $scope.message = '';
    $scope.messageClass = '';                                //Bonus assignement
    $scope.sayMessage = function() {
      var index = selectMessage($scope.dishlist)
      $scope.message = messages[index];
      $scope.messageClass = index > 0 ? 'greentext' : '';    //Bonus assignement
      $scope.dishlistClass = index == 0 ? 'redborder' : '';  //Bonus assignement
    };
    function selectMessage(string) {
      var numOfDishes = string.split(',')
                        .reduce((x,y) => x+(y.trim().length == 0 ? 0 : 1), 0);
      return Math.min(2, Math.floor((numOfDishes+2)/3))  //Return index of the message (0,1,2)
    }    //end of func. determine_message
  }      //end of func. LunchCheckController
})();    //end of IIFE wrapper
