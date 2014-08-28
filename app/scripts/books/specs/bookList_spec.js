describe('books specs', function() {
  var ctrl,
  scope, timeout;

  beforeEach(module('BooksApp'));

  beforeEach(inject(function($controller, $rootScope,$timeout,initializeLocalStorage) {

    initializeLocalStorage.resetDatabase();

    timeout = $timeout;

    scope = $rootScope.$new();
    ctrl = $controller('BookListCtrl', {
      $scope: scope
    });
  }));

  it('Should add Book and empty field', function() {
    timeout.flush();

    scope.addBook('New Book');

    expect(scope.books.length).toBe(3);
    expect(scope.books[scope.books.length-1].content).toBe('New Book');
    expect(scope.newBookName).toBe('');
    expect(scope.books[scope.books.length-1].id).toEqual(223);
  });

  it('Should remove Book', function() {
    timeout.flush();
    scope.removeBook(scope.books.length-1);

    expect(scope.books.length).toBe(1);
  });
});

