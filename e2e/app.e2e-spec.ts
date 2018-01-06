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
});
