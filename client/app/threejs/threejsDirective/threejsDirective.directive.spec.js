'use strict';

describe('Directive: threejsDirective', function () {

  // load the directive's module and view
  beforeEach(module('p1App'));
  beforeEach(module('app/threejs/threejsDirective/threejsDirective.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<threejs-directive></threejs-directive>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the threejsDirective directive');
  }));
});