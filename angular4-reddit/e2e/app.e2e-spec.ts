import { Angular4RedditPage } from './app.po';

describe('angular4-reddit App', () => {
  let page: Angular4RedditPage;

  beforeEach(() => {
    page = new Angular4RedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
