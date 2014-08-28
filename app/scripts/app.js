'use strict';
angular
  .module('BooksApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap',
    'Books',
  ])
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
