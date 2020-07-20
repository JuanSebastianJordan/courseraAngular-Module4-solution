(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoryController', CategoryController);
    
    
    CategoryController.$inject = ['MenuDataService', 'categories'];
    function CategoryController(MenuDataService, categories) {
      var mainList = this;
      mainList.categories = categories;
    }
    
    })();