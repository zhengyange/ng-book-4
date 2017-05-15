import { Angular4HelloworldPage } from './app.po';

describe('angular4-helloworld App', () => {
  let page: Angular4HelloworldPage;

  beforeEach(() => {
    page = new Angular4HelloworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
