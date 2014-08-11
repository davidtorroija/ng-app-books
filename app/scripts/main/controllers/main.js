'use strict';

/**
 * @ngdoc function
 * @name moviecityApp.controller:MainCtrl
 * @description
 * # MoviesEditCtrl
 * Controller of the moviecityApp
 */
 angular.module('moviecityApp')
 .controller('MainCtrl', function ($scope, movies, movieModel,$location) {
  $scope.movies = movies;

  $scope.getLocation = function(val) {
    return movieModel.get()
    .then(function(data){
      return data;
    });
  };

  $scope.select = function(){
    $location.path('/movies/' + $scope.selected);
  };
});
