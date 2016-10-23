(function() {
"use strict";
angular.module('common')
.filter('na', naFilterFactory);

function naFilterFactory() {
  return function(input, naText) {
    return  input ? input : naText;
  };
}

})();
