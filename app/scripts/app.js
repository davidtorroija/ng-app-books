'use strict';

/**
 * @ngdoc overview
 * @name moviecityApp
 * @description
 * # moviecityApp
 *
 * Main module of the application.
 */
angular
  .module('booksApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap',
    'Books',
    // 'localytics.directives',
    // 'ui.directives'
  ])
  //routes config!
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movies/:idMovie', {
        templateUrl: 'scripts/movies/views/movie.html',
        controller: 'MoviesCtrl',
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

angular.module('ui.directives', []).directive('davidTree',
    function() {
      return {
        restrict: 'E',
        scope:{
          ngModel : '=',
        },
        link: function(scope, element) {
          // scope.content = scope.ngModel;
          // scope.pepe = 'asd';
          // console.log(scope.pepe,scope.content);
        },
        template: [
          '<div><ul><li ng-repeat="content in ngModel">{{content.content}}',
          '<ul><li ng-repeat="data in content.children" ng-include src="\'tree.html\'"></li></ul></li>',
          '</ul>',
          '<script type="text/ng-template" id="tree.html">',
          '{{data.content}}',
          '<ul>',
          '<li ng-repeat="data in data.children" ng-include="\'tree.html\'">',
          '</li>',
          '</ul>',
          '</script>',
          '</div>'].join(''),
      };
    }
  );
