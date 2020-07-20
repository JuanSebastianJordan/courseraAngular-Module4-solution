(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    
    ItemsController.$inject = ['MenuDataService', 'items','$stateParams'];
    function ItemsController(MenuDataService, items,$stateParams) {
      var detail = this;
      detail.items = items;
      detail.catName= $stateParams.categoryName;

    }
    
    })();