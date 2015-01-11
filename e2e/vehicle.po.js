'use strict';

function VehiclePage() {
  this.url = '#/vehicle/';
  this.goTo = function(stockRef, registration){
    browser.get(this.url + stockRef + '/' + registration);
  };

  this.largeImage = element(by.css('.large-image img'));

  this.thumbImages = element.all(by.css('.thumbs img'));

  this.message = element(by.css('.panel p'));
}

module.exports = new VehiclePage();
