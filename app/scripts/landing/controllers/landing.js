'use strict';

 angular.module('BooksApp')
 .controller('LandingCtrl', function ($scope) {
})
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'scripts/books/views/landing.html',
    controller: 'LandingCtrl',
  });
});

