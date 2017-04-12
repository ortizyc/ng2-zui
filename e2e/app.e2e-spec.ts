import { Ng2ZuiPage } from './app.po';

describe('ng2-zui App', () => {
  let page: Ng2ZuiPage;

  beforeEach(() => {
    page = new Ng2ZuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
