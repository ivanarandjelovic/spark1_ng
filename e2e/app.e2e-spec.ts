import { Spark1NgPage } from './app.po';

describe('spark1-ng App', function() {
  let page: Spark1NgPage;

  beforeEach(() => {
    page = new Spark1NgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
