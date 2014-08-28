'use strict';

 angular.module('BooksApp')
 .controller('BookListCtrl', function ($scope,bookModel) {

  $scope.addBook = function(newBookName) {
    $scope.books.push({
      content: newBookName,
      children: [],
      id : _($scope.books).max(function(book){ return book.id; }).id +1,
      level : 1,
      order : 1,
    });

    $scope.newBookName = '';
  };

  $scope.removeBook = function(index) {
    $scope.books.splice(index,1);
    $scope.newBookName = '';
  };

  function loadBooks(){
    return bookModel
    .get()
    .then(function(data){
      $scope.books = data;
    });
  }

  loadBooks();

});

