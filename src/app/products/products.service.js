'use strict';

angular.module('angularInterview')
  .service('ProductsSvc', function ($http, $q) {

    var Products = {

      // Returns an array of products
      getProducts: function () {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: 'data/products.json',
          headers: {'Content-type': 'application/json'}
        }).success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          // Normally I'd be passing a flag to an interceptor, that would check a config for the appropriate message
          deferred.reject({message: 'The was an error getting products.', status: 'error'});
        });
        return deferred.promise;
      }

    };

    return Products;

  });
