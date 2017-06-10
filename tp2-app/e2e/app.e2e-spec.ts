import { Tp2AppPage } from './app.po';

describe('tp2-app App', function() {
  let page: Tp2AppPage;

  beforeEach(() => {
    page = new Tp2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
