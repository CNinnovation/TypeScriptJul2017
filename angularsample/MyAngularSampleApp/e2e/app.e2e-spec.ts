import { MyAngularSampleAppPage } from './app.po';

describe('my-angular-sample-app App', () => {
  let page: MyAngularSampleAppPage;

  beforeEach(() => {
    page = new MyAngularSampleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
