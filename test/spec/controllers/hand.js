'use strict';

describe('Controller: HandCtrl', function () {

  // load the controller's module
  beforeEach(module('rummyApp'));

  var HandCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HandCtrl = $controller('HandCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
