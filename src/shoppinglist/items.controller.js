(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    
    ItemsController.$inject = ['items','$stateParams'];
    function ItemsController( items,$stateParams) {
      var detail = this;
      detail.items = items;
      detail.catName= $stateParams.categoryName;

    }
    
    })();