'use strict';

describe('products.controller', function(){
  var $scope;

  beforeEach(module('angularInterview'));

  beforeEach(inject(function($rootScope) {
    $scope = $rootScope.$new();
  }));

  it('should define a title', inject(function($controller) {

    expect($scope.products).toBeUndefined();

    $controller('ProductsCtrl', {
      $scope: $scope
    });

    expect(typeof $scope.products).toBe('object');

  }));

});
