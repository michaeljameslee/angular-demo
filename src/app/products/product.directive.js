'use strict';

angular.module('angularInterview')
  .directive('product', function(){
  return {
    restrict: 'E',
    scope: {
      product: '='
    },
    templateUrl: 'app/products/product.view.html'
  };
});
