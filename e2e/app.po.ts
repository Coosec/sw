import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getCity(cityId) {
    return element(by.css(`#${cityId}`));
  }

  getStation(stationId) {
    return element(by.css(`#${stationId}`));
  }

  getMeasurement(measurementId) {
    return element(by.css(`#${measurementId} span`));
  }
}
