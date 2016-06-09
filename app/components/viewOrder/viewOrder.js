'use strict';

angular.module('metalsSystemApp')

.controller('viewOrderCtrl', function($scope, Orders, $http, $location, $routeParams){

  $scope.order = Orders.get({orderId: $routeParams.orderId});

  $scope.printOrder = function(divName){
    window.print();
  }
  $scope.deleteOrder = function(){
    var confirmDelete = confirm("Are you sure you want to delete this order?");
    if (confirmDelete === true) {
      Orders.delete({orderId: $routeParams.orderId});
      alert("Order Deleted!");
      $location.path('#/');
    }
  }


})
