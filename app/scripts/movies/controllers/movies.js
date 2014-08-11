'use strict';

/**
 * @ngdoc function
 * @name moviecityApp.controller:MainCtrl
 * @description
 * # MoviesCtrl
 * Controller of the moviecityApp
 */
angular.module('moviecityApp')
  .controller('MoviesCtrl', function ($scope,movie) {
    console.log(movie);

    movie.year = moment(movie.releaseYear).format('YYYY');
    $scope.movie = movie;

  });
