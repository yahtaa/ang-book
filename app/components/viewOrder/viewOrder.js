'use strict';

angular.module('metalsSystemApp')

.controller('viewOrderCtrl', function($scope, Orders, $http, $routeParams){

  $scope.order = Orders.get({orderId: $routeParams.orderId});

  $scope.printOrder = function(divName){
    window.print();
  }



})
