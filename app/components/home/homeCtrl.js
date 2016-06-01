'use strict';

angular.module('metalsSystemApp')


.controller('homeCtrl', function($scope, Orders, Messages){
  Orders.query(function(data) {
    $scope.orders = data;
  });
  Messages.query(function(data) {
    $scope.messages = data;
  });

  
})
