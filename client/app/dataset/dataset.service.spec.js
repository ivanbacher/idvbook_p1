'use strict';

describe('Service: dataset', function () {

  // load the service's module
  beforeEach(module('p1App'));

  // instantiate service
  var dataset;
  beforeEach(inject(function (_dataset_) {
    dataset = _dataset_;
  }));

  it('should do something', function () {
    expect(!!dataset).toBe(true);
  });

});