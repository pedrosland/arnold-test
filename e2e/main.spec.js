'use strict';

describe('The main page', function () {
  var page;

  beforeEach(function () {
    page = require('./main.po');
    page.goTo();
  });

  it('should show a form and allow users to submit vehicle data', function() {
    expect(page.stockRef.isPresent()).toBe(true);

    page.fillForm('ARNFH-U-5728', 'SK55XDH');

    page.submit();

    expect(browser.getCurrentUrl()).toBe(BASE_URL + '#/vehicle/ARNFH-U-5728/SK55XDH');
  });

  it('show not submit if a required field is empty', function () {
    page.fillForm('', 'SK55XDH');

    page.submit();

    page.registration.clear();

    page.fillForm('ARNFH-U-5728', '');

    page.submit();

    expect(browser.getCurrentUrl()).toBe(BASE_URL + '#/');
  });

});
