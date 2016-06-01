'use strict';

angular.module("metalsSystemApp",
  [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'localytics.directives'
  ])

  .factory("Orders", function($resource) {
    //INSERT API FOR ORDERS
    return $resource("");
  })
  .factory("Messages", function($resource) {
    //INSERT API FOR MESSAGES
    return $resource("");
  })
  // ITEM LISTING IN ORDER VIA CHOSEN
  // .factory("ItemList", function($resource) {
  //   return $resource("items.json", {method: 'GET', isArray: false });
  // })
