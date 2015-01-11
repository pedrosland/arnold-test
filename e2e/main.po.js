'use strict';

function MainPage() {
  this.url = '/';
  this.goTo = function(){
    browser.get(this.url);
  };

  this.stockRef = element(by.name('stockRef'));
  this.registration = element(by.name('registration'));

  this.submitButton = element(by.css('[value="Search for car"]'));

  this.fillForm = function fillForm(stockRef, registration) {
    this.stockRef.sendKeys(stockRef);
    this.registration.sendKeys(registration);
  };

  this.submit = function submit(){
    this.submitButton.click();
  };
}

module.exports = new MainPage();
