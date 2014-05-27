'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('rummyApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(angular.mock.inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      socket: new sockMock($rootScope)
    });
  }));

  it('should set the ip address to 0.0.0.0', function () {
    expect(scope.ip).toBe('0.0.0.0');
  });

  it('should set the port to 9000', function () {
    expect(scope.port).toBe('9000');
  });
});
