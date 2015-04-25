'use strict';

describe('Directive: projectItem', function () {

  // load the directive's module and view
  beforeEach(module('hugesuccessApp'));
  beforeEach(module('app/projectItem/projectItem.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<project-item></project-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the projectItem directive');
  }));
});