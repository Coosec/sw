import { AppPage } from './app.po';

describe('sw App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  xit('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Zanieczyszczenia powietrza');
  });

  xit('should display proper city name', () => {
    page.navigateTo();
    expect(page.getCity('krakow').getText()).toEqual('Kraków');
  });

  xit('should show proper stations list', () => {
    page.navigateTo();
    page.getCity('krakow').click();
    expect(page.getStation('station-krasinskiego').getText()).toEqual('krasinskiego');
  });

  it('should show pm25 measurement', () => {
    page.navigateTo();
    page.getCity('krakow').click();
    page.getStation('station-krasinskiego').click();
    expect(page.getMeasurement('pm25').getText()).toBeTruthy();
  });
});
