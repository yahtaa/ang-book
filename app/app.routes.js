'use strict';

angular.module('metalsSystemApp').config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'app/components/home/home.html',
        controller: 'homeCtrl'
      }).
      when('/create-order', {
        templateUrl: 'app/components/createOrder/createOrder.html',
        controller: 'createOrderCtrl'
      }).
      when('/create-message', {
        templateUrl: 'app/components/createMessage/createMessage.html',
        controller: 'createMessageCtrl'
      }).
      when('/view-order/:orderId',  {
        templateUrl: 'app/components/viewOrder/viewOrder.html',
        controller: 'viewOrderCtrl'
      }).
      otherwise({redirectTo:'/'});
}]);
