'use strict';

describe('products.service', function(){

  var service, http;

  var mockData = {
    'products': [{
      'id': '55789b11a0ebba00173c8b1f',
      'productId': 'FP-22888010-000',
      'skuId': '22889638',
      'displayName': 'FP Pull On Flares',
      'image': 'http://img2.fpassets.com/is/image/FreePeople/22888010_040_a',
      'quantity': 2,
      'totalPrice': 99.9,
      'color': 'reef wash',
      'size': '29',
      'styleNumber': '22888010'
    }]};

  beforeEach(module('angularInterview'));

  beforeEach(inject(function(ProductsSvc, $httpBackend) {
    service = ProductsSvc;
    http = $httpBackend;
  }));

  it('should return products', function(done) {

    var testProduct = function(data) {
      var product = data.products[0],
        mockProduct = mockData.products[0];
      expect(product.displayName).toBe(mockProduct.displayName);
      expect(product.id).toBe(mockProduct.id);
    };

    var failTest = function(error) {
      expect(error).toBeUndefined();
    };

    http.expectGET('data/products.json').respond(200,mockData);

    service.getProducts()
      .then(testProduct)
      .catch(failTest)
      .finally(done);

    http.flush();

  });

});
