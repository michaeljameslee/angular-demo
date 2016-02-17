'use strict';

angular.module('angularInterview')
  .controller('ProductsCtrl', function ($scope, ProductsSvc) {

    $scope.products = [];

    ProductsSvc.getProducts().then( function(data){

      $scope.products = data;

    });

  });
