'use strict';

/**
 * @ngdoc function
 * @name moviecityApp.controller:MainCtrl
 * @description
 * # MoviesEditCtrl
 * Controller of the moviecityApp
 */
angular.module('moviecityApp')
  .controller('MoviesEditCtrl', function ($scope, movie,movieModel, actors, genres,$location) {

    $scope.movie = movie;
    $scope.actors = actors;
    $scope.genres = genres;


    movie.year = moment(movie.releaseYear).format('YYYY');
    movie.actors = _(movie.actors).pluck('id');

    $scope.save = function(){
      movie.actors = _(actors).filter(function(actor){
        return _(movie.actors).contains(actor.id);
      });
      movieModel.save(movie)
      .then(function(){
        $location.path('/movies/' + movie.id);
      });
    };


  });
