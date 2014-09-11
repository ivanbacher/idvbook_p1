'use strict';

describe('Service: threejsService', function () {

  // load the service's module
  beforeEach(module('p1App'));

  // instantiate service
  var threejsService;
  beforeEach(inject(function (_threejsService_) {
    threejsService = _threejsService_;
  }));

  it('should do something', function () {
    expect(!!threejsService).toBe(true);
  });

});
