"use strict";

angular.module("metalsSystemApp")

.controller("createOrderCtrl", function($scope, $http, Orders, $route, $location, ItemList){

  //CREATE LINE ITEM
  $scope.items = [];


  $scope.addItemToOrder = function() {
    var item = {
                 "quantity": $scope.quantity,
                 "description": $scope.description,
                 "unit": $scope.unit,
                 "total": $scope.unit * $scope.quantity
               };
    $scope.items.push(item);
    // Clear Input Fields after item is pushed to array
    $scope.quantity = null;
    $scope.description = null;
    $scope.unit = null;
    $scope.selected = "";


  };

  ItemList.query(function(data) {
    $scope.itemsList = data;
  });
  //REMOVE LINE ITEM FROM ORDER
  $scope.deleteItem = function(item, $index) {
    $scope.items.splice($index, 1);
  };

  // CREATE GRAND TOTAL OF ALL LINE ITEMS IN ORDER
  $scope.orderTotal = function() {
    var total = 0;
    angular.forEach($scope.items, function(item) {
      total += item.quantity * item.unit;
    })
    return total;
  };



  Orders.query(function(data) {
    $scope.orders = data;
  });
  
  // SAVE CURRENT ORDER TO DATABASE
  $scope.saveCompletedOrder = function(){
    $scope.order = [];
    var order = {
      "id": ($scope.orders.length + 1),
      "dateTime": Date.now(),
      "customer": $scope.customer,
      "customerEmail": $scope.customerEmail,
      "type": $scope.type,
      "orderGrandTotal": $scope.orderTotal(),
      "orderPaymentType": $scope.paymentType,
      "checkNumber": $scope.checkNumber,
      "orderContents": $scope.items

    };
    $scope.order.push(order);
    Orders.save($scope.order);
    console.log("Saved");
    alert('Order Saved');
    var reloadOrder = function(){
      $location.path('#/');
    };
    reloadOrder();
  };
})
