(function(){
'use strict'

angular.module('Data')
.component('itemsComponent', {templateUrl:'views/list.template.html',
                    bindings: {items: "<list"}});

})();
