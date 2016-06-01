'use strict';

angular.module('metalsSystemApp')

.service("dataService", function($http){
  this.getOrders = function(callback){
    $http.get("orders.json").then(callback)
  }
})
