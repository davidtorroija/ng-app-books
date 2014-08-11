'use strict';

angular.module('Books').factory('bookModel', function(model){
  return model('books');
});