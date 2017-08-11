import { AngdemoPage } from './app.po';

describe('angdemo App', () => {
  let page: AngdemoPage;

  beforeEach(() => {
    page = new AngdemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
