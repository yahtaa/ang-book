"use strict";

angular.module("metalsSystemApp")

.controller("createMessageCtrl", function($scope, $http, Messages){


  $scope.submitMessage = function(){
    $scope.messages = [];
    var messageParts = {
      "dateTime": Date.now(),
      "author": $scope.author,
      "contents": $scope.messageContent
    };
    
    Messages.save(messageParts)
    alert("Saved Message")

  }

});
