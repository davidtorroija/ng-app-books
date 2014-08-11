'use strict';

angular.module('Genres').factory('genreModel', function(model){
  return model('genres');
});