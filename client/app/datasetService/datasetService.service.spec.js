'use strict';

describe('Service: datasetService', function () {

  // load the service's module
  beforeEach(module('p1App'));

  // instantiate service
  var datasetService;
  beforeEach(inject(function (_datasetService_) {
    datasetService = _datasetService_;
  }));

  it('should do something', function () {
    expect(!!datasetService).toBe(true);
  });

});
