describe('books specs', function() {
  var ctrl,
  scope;

  beforeEach(module('BooksApp'));

  var selectedBook;

  beforeEach(inject(function($controller, $rootScope, initializeLocalStorage) {
    selectedBook = {
      content: 'El libro de las maravillas',
      children: [
        {
          id: 2,
          content: 'Motivacion',
          level: 2,
          order: 2,
          id_book: 1,
          children: [
          {
            id: 3,
            content: 'Reseña Historica',
            level: 2,
            order: 3,
            id_book: 1
            ,children: [
            {
              id: 4,
              content: 'Epitafio',
              level: 3,
              order: 4,
              id_book: 1
              ,children: [
              {
                id: 5,
                content: 'Epifania',
                level: 4,
                order: 5,
                id_book: 1
                ,children: []
              }]
            }]
          },
          ]
        },
        {
          'id': '2',
          'content': 'Pepe',
          'level': '1',
          'order': '12',
          'id_book': '1'
          ,children: []
        }
      ]
    };
    initializeLocalStorage.resetDatabase();
    scope = $rootScope.$new();
    ctrl = $controller('BooksCtrl', {
      $scope: scope,
      book: selectedBook
    });
  }));

  it('Should add Category at level 1 with empty children', function() {
    var category = {
      'id': '1',
      'content': 'Introduccion',
      'level': '1',
      'order': '1',
      'id_book': '1',
      children: []
    };
    scope.addCategory(category,'new Category');
    expect(category.children[0].content).toBe('new Category');
  });

  it('Should add Category at level 1 with not empty children', function() {
    var category = {
      'id': '1',
      'content': 'Introduccion',
      'level': '1',
      'order': '1',
      'id_book': '1',
      children: []
    };
    scope.addCategory(category,'new Category');
    scope.addCategory(category,'new Category2');
    expect(category.children[1].content).toBe('new Category2');
  });

  it('Should set the order to 3 in the last push', function() {
    var category = {
      'id': '1',
      'content': 'Introduccion',
      'level': '1',
      'order': '1',
      'id_book': '1',
      children: []
    };

    scope.addCategory(category,'new Category');
    scope.addCategory(category,'new Category2');
    expect(category.children[1].order).toBe(3);
  });

  it('Should remove element from array', function() {
    var category = {
        id: 2,
        content: 'Motivacion',
        level: 2,
        order: 2,
        id_book: 1,
        children: [
        {
          id: 3,
          content: 'Reseña Historica',
          level: 2,
          order: 3,
          id_book: 1
          ,children: [
          {
            id: 4,
            content: 'Epitafio',
            level: 3,
            order: 4,
            id_book: 1
            ,children: [
            {
              id: 5,
              content: 'Epifania',
              level: 4,
              order: 5,
              id_book: 1
              ,children: []
            }]
          }]
        },
        ]
      };

    scope.removeCategory(category);
    expect(scope.selectedBook.children.length).toBe(1);
  });

  it('Should remove element from childrens array', function() {
    var category = {
      id: 3,
      content: 'Reseña Historica',
      level: 2,
      order: 3,
      id_book: 1
      ,children: [
      {
        id: 4,
        content: 'Epitafio',
        level: 3,
        order: 4,
        id_book: 1
        ,children: [
        {
          id: 5,
          content: 'Epifania',
          level: 4,
          order: 5,
          id_book: 1
          ,children: []
        }]
      }]
    };
    scope.removeCategory(category);
    expect(scope.selectedBook.children[1].children.length).toBe(0);
  });

  it('Should move up element from childrens array', function() {
    var category = {
      'id': '2',
      'content': 'Pepe',
      'level': '1',
      'order': '12',
      'id_book': '1'
      ,children: []
    }
    scope.moveUp(1,category);
    expect(scope.selectedBook.children[0]).toEqual(category);
  });

  it('Should move down element from childrens array', function() {
    var category = {
          id: 2,
          content: 'Motivacion',
          level: 2,
          order: 2,
          id_book: 1,
          children: [
          {
            id: 3,
            content: 'Reseña Historica',
            level: 2,
            order: 3,
            id_book: 1
            ,children: [
            {
              id: 4,
              content: 'Epitafio',
              level: 3,
              order: 4,
              id_book: 1
              ,children: [
              {
                id: 5,
                content: 'Epifania',
                level: 4,
                order: 5,
                id_book: 1
                ,children: []
              }]
            }]
          },
          ]
        }

    scope.moveDown(0,category);

    expect(scope.selectedBook.children[1]).toEqual(category);
  });

  it('Should add Category at level 0 with empty children', function() {
    scope.addCategory(scope.selectedBook,'new Category');

    expect(scope.selectedBook.children[2].content).toBe('new Category');
  });

});

