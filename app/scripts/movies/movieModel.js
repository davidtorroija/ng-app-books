'use strict';

angular.module('Movies').factory('movieModel', function(model){
  return model('movies');
});