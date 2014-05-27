'use strict';

describe('Controller: HandCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('rummyApp'));

  var HandCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(angular.mock.inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HandCtrl = $controller('HandCtrl', {
      $scope: scope,
      socket: new sockMock($rootScope)
    });
  }));

  it('should attach a banana test scope', function () {
    expect(scope.test).toBe('banana');
  });
});
