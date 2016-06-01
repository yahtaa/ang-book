'use strict';

angular.module('metalsSystemApp')

.controller('viewOrderCtrl', function($scope, Orders, $http, $routeParams){

  $scope.order = Orders.get({orderId: $routeParams.orderId});

  $scope.printOrder = function(divName){
    // var printContents = document.getElementById('order-to-print').innerHTML;
    // var originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    // console.log("SAVED ORDER")
    // window.print();
    // document.body.innerHTML = originalContents;
  }



})
