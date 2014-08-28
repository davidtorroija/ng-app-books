'use strict';

 angular.module('BooksApp')
 .controller('BooksCtrl', function ($scope,book) {
  $scope.selectedBook = book;

  $scope.addCategory = function (category, newName){
    var order = category.children.length ? _(category.children).chain().pluck('order').max().value() : parseInt(category.order);

    category.children.push({
      id: Date.now(),
      content: newName,
      level: parseInt(category.level) +1,
      order: order +1,
      id_book: category.id_book,
      children:[]
    })

    category.adding_category = false;
  };

  $scope.removeCategory = function (category){
    $scope.selectedBook.children = findRecursivelyAndRemove($scope.selectedBook.children,category);
  };

  $scope.moveUp = function (index,category){
    index = index-1;
    if(index>=0){
      $scope.selectedBook.children = findRecursivelyAndMove($scope.selectedBook.children,category,index);
    }
  };

  $scope.moveDown = function (index,category){
    index = index + 1;
    $scope.selectedBook.children = findRecursivelyAndMove($scope.selectedBook.children,category,index);
  };

  function findRecursivelyAndRemove(categories,category){
    _(categories).every(function(item,index){
      if(_.isEqual(item, category)){
        categories = _(categories).without(item);
        return false;
      }
      item.children = findRecursivelyAndRemove(item.children,category);
      return true;
    });
    return categories;
  }

  function findRecursivelyAndMove(categories,category,indexToMove){
    _(categories).every(function(item,index){
      if(_.isEqual(item, category)){
        categories.move(index,indexToMove);
        return false;
      }
      item.children = findRecursivelyAndMove(item.children,category);
      return true;
    });
    return categories;
  }

  Array.prototype.move = function (oldIndex, newIndex) {
    if (newIndex >= this.length) {
        var k = newIndex - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(newIndex, 0, this.splice(oldIndex, 1)[0]);
    return this;
  };
})
.config(function ($routeProvider) {
  $routeProvider
     .when('/books/:bookId', {
      templateUrl: 'scripts/books/views/book.html',
      controller: 'BooksCtrl',
      resolve: {
        book: function($location,$route,bookModel) {
          var id = $route.current.params.bookId;
          return bookModel.getById(id)
          .catch(function() {
            $location.path('/');
          });
        },
      }
    })
    .otherwise({
      redirectTo: '/'
    });
});

