'use strict';

describe('The vehicle page', function () {
  var page;

  beforeEach(function () {
    page = require('./vehicle.po');
  });

  it('should show a large image and 6 thumbs', function() {
    page.goTo('ARNFH-U-5728', 'SK55XDH');

    expect(page.largeImage.isPresent()).toBe(true);

    browser.wait(function(){
      return page.largeImage.getAttribute('src').then(function(src){
        return src !== null;
      });
    }, 2000);

    expect(page.largeImage.getAttribute('src')).toBe('http://imagecache.arnoldclark.com/imageserver/AHRDNXF5H5-KUS2/800/f/');

    // make sure that thumbs exist and are visible
    expect(page.thumbImages.count()).toBe(6);

    page.thumbImages.each(function(elem){
      expect(elem.isDisplayed()).toBe(true);
    });
  });

  it('should show a message (and no images) when there are no images available', function() {
    page.goTo('ARNFH-U-5728', 'SO06DNV');

    browser.wait(function(){
      return page.largeImage.isPresent().then(function(exists){
        return exists === false;
      });
    }, 5000);

    // make sure that thumbs don't exist
    expect(page.thumbImages.count()).toBe(0);

    expect(page.message.isPresent()).toBe(true);
  });

  // This can't be tested as I don't have a vehicle where the first image does not exist
  xit('should show the first image that exists as the large image', function(){});

});
