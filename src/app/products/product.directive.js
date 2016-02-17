'use strict';

angular.module('angularInterview')
  .directive('product', function(ProductsSvc){
  return {
    restrict: 'E',
    scope: {
      product: '='
    },
    templateUrl: 'app/products/product.view.html',
    link: function(scope) {
      scope.removeProduct = ProductsSvc.removeProduct;
    }
  };
});
