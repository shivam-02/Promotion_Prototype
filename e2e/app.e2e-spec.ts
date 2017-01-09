import { PromotionPrototypePage } from './app.po';

describe('promotion-prototype App', function() {
  let page: PromotionPrototypePage;

  beforeEach(() => {
    page = new PromotionPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
