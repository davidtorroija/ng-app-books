'use strict';
angular
  .module('booksApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap',
    'Books',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/movies/:idMovie', {
      //   templateUrl: 'scripts/movies/views/movie.html',
      //   controller: 'MoviesCtrl',
      //   resolve: {
      //     movie: function($location,$route,movieModel) {
      //       var id = $route.current.params.idMovie;
      //       return movieModel.getById(id)
      //       .catch(function() {
      //         $location.path('/');
      //       });
      //     },
      //   }
      // })
      .when('/', {
        templateUrl: 'scripts/books/views/book.html',
        controller: 'BooksCtrl',
        resolve: {
          movie: function($location,$route,movieModel) {
            var id = $route.current.params.idMovie;
            return movieModel.getById(id)
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
