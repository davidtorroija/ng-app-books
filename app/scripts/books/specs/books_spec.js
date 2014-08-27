describe('books specs', function() {
  var ctrl,
  scope;

  beforeEach(module('booksApp'));

  var selected_book = {
    content: 'Pepe',
    children: [
    {
      "id": "1",
      "content": "Introduccion",
      "level": "1",
      "order": "1",
      "id_book": "1",
      children: []
    },
    {
      "id": "2",
      "content": "Motivacion",
      "level": "1",
      "order": "2",
      "id_book": "1"
      ,children: [
      {
        "id": "3",
        "content": "Reseña Historica",
        "level": "2",
        "order": "3",
        "id_book": "1"
        ,children: [
        {
          "id": "4",
          "content": "Level 3",
          "level": "3",
          "order": "4",
          "id_book": "1"
          ,children: [
          {
            "id": "5",
            "content": "Level 4",
            "level": "4",
            "order": "5",
            "id_book": "1"
          }]
        }]
      },
      ]
    },
    {
      "id": "2",
      "content": "Motivacion",
      "level": "1",
      "order": "12",
      "id_book": "1"
      ,children: []
    }
    ]
  };

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('BooksCtrl', {
      $scope: scope
    });
    scope.selected_book = selected_book;
  }));

  it('Should add Category at level 1 with empty children', function() {
    var category = {
      "id": "1",
      "content": "Introduccion",
      "level": "1",
      "order": "1",
      "id_book": "1",
      children: []
    };
    scope.add_category(category,'new Category');
    expect(category.children[0].content).toBe('new Category');
  });

  it('Should add Category at level 1 with not empty children', function() {
    var category = {
      "id": "1",
      "content": "Introduccion",
      "level": "1",
      "order": "1",
      "id_book": "1",
      children: []
    };
    scope.add_category(category,'new Category');
    scope.add_category(category,'new Category2');
    expect(category.children[1].content).toBe('new Category2');
  });

  it('Should set the order to 3 in the last push', function() {
    var category = {
      "id": "1",
      "content": "Introduccion",
      "level": "1",
      "order": "1",
      "id_book": "1",
      children: []
    };

    scope.add_category(category,'new Category');
    scope.add_category(category,'new Category2');
    expect(category.children[1].order).toBe(3);
  });

  it('Should remove element from array', function() {
    // console.log(JSON.stringify(scope.selected_book,null,' '));
    var category = {
      "id": "2",
      "content": "Motivacion",
      "level": "1",
      "order": "2",
      "id_book": "1"
      ,children: [
      {
        "id": "3",
        "content": "Reseña Historica",
        "level": "2",
        "order": "3",
        "id_book": "1"
        ,children: [
        {
          "id": "4",
          "content": "Level 3",
          "level": "3",
          "order": "4",
          "id_book": "1"
          ,children: [
          {
            "id": "5",
            "content": "Level 4",
            "level": "4",
            "order": "5",
            "id_book": "1"
          }]
        }]
      },
      ]
    };
    scope.remove_category(category);
    expect(scope.selected_book.children.length).toBe(2);
  });

  it('Should remove element from children"s array', function() {
    var category = {
      "id": "3",
      "content": "Reseña Historica",
      "level": "2",
      "order": "3",
      "id_book": "1"
      ,children: [
      {
        "id": "4",
        "content": "Level 3",
        "level": "3",
        "order": "4",
        "id_book": "1"
        ,children: [
        {
          "id": "5",
          "content": "Level 4",
          "level": "4",
          "order": "5",
          "id_book": "1"
        }]
      }]
    };
    scope.remove_category(category);
    // console.log(JSON.stringify(scope.selected_book,null,' '));

    expect(scope.selected_book.children[1].children.length).toBe(0);
  });

  it('Should remove element from children"s array', function() {
    var category = {
      "id": "2",
      "content": "Motivacion",
      "level": "1",
      "order": "12",
      "id_book": "1"
      ,children: []
    }
    scope.move_up(category);

    expect(scope.selected_book.children).toEqual(category);
  });

});

