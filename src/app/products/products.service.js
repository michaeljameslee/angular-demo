'use strict';

angular.module('angularInterview')
  .service('ProductsSvc', function ($http, $q, $cacheFactory, _) {

    var Products = {

      // Returns an array of products
      getProducts: function () {

        if (Products.cache === null) {
          Products.cache = $cacheFactory('productData');
        }
        var cachedData = Products.cache.get('products');
        var deferred = $q.defer();

        if (!cachedData) {

          $http({
            method: 'GET',
            url: 'data/products.json',
            headers: {'Content-type': 'application/json'}
          }).success(function (data) {
            Products.cache.put('products', data);
            deferred.resolve(data);
          }).error(function () {
            // Normally I'd be passing a flag to an interceptor, that would check a config for the appropriate message
            deferred.reject({message: 'The was an error getting products.', status: 'error'});
          });

        } else {

          deferred.resolve(cachedData);

        }

        return deferred.promise;

      },
      removeProduct: function(id) {

        var cachedData = Products.cache.get('products');

        _.remove(cachedData.products, function (product) {
          return product.id === id;
        });

        Products.cache.put('products', cachedData);

      },
      cache: null

    };

    return Products;

  });
