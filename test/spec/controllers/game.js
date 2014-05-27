'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('rummyApp'));

  var GameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(angular.mock.inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    
    GameCtrl = $controller('GameCtrl', {
      $scope: scope,
      socket: new sockMock($rootScope)
    });
  }));

  it('should generate a random 10 digit username', function () {
    expect(scope.username.length).toBe(10);
  });

  it('should have an empty deck', function () {
    expect(scope.deck.length).toBe(0);
  });

  it('should have an empty hand', function () {
    expect(scope.hand.length).toBe(0);
  });

  it('should have an empty pile', function () {
    expect(scope.pile.length).toBe(0);
  });
});