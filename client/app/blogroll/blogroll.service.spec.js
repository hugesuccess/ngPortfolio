'use strict';

describe('Service: blogroll', function () {

  // load the service's module
  beforeEach(module('hugesuccessApp'));

  // instantiate service
  var blogroll;
  beforeEach(inject(function (_blogroll_) {
    blogroll = _blogroll_;
  }));

  it('should do something', function () {
    expect(!!blogroll).toBe(true);
  });

});
