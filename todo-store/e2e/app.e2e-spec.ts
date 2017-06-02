import { TodoStorePage } from './app.po';

describe('todo-store App', () => {
  let page: TodoStorePage;

  beforeEach(() => {
    page = new TodoStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngc works!');
  });
});
