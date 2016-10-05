(function(){
'use strict'

angular.module('Data')
.component('categoriesComponent', {templateUrl:'views/listoflinks.template.html',
                    bindings: {items: "<listoflinks"}});

})();
