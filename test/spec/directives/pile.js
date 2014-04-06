'use strict';

describe('Directive: pile', function () {

  // load the directive's module
  beforeEach(module('rummyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pile></pile>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pile directive');
  }));
});
