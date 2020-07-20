(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  //list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/shoppinglist/templates/main-list.template.html',
    controller: 'CategoryController as mainList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('items', {
     url: '/categories/{categoryShortName}',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'ItemsController as detail',
    params: {
      categoryShortName: null,
      categoryName:null
    },
    resolve: {
      items: ['$stateParams', 'MenuDataService',function($stateParams,MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });

}

})();
