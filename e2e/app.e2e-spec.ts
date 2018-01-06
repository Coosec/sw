import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('sw App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Zanieczyszczenia powietrza');
  });

  it('should display proper city name', () => {
    page.navigateTo();
    expect(page.getCity('krakow').getText()).toEqual('Kraków');
  });

  it('should show proper stations list', () => {
    page.navigateTo();
    page.getCity('krakow').click();
    expect(page.getStation('station-krasinskiego').getText()).toEqual('krasinskiego');
  });

  it('should show pm25 measurement', () => {
    browser.driver.manage().window().maximize()
    page.navigateTo();
    page.getCity('krakow').click();
    page.getStation('station-krasinskiego').click();
    expect(page.getMeasurement('pm25').getText()).toBeTruthy();
  });
});
