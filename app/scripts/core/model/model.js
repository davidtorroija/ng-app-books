'use strict';

angular.module('Model')
.factory('model', function($http, $q, $rootScope, $timeout,$localStorage, initializeLocalStorage) {

  function getById(table, id){
    return _($localStorage[table])
      .findWhere({
        id:parseInt(id)
      });
  }

  function get(table){
    return $localStorage[table];
  }

  function save(table, obj){
    var oldObj = getById(table,obj.id);
    $localStorage[table] = _($localStorage[table]).without(oldObj);
    $localStorage[table].push(obj);
  }

  return function(table){
    return {
      getById: function(id) {
        var deferred = $q.defer();

        $timeout(function(){
          var result = angular.copy(getById(table,id));
          deferred.resolve(result);
        }, 1);

        return deferred.promise;
      },
      save: function(obj) {
        var deferred = $q.defer();

        $timeout(function(){
          var result = save(table,obj);
          deferred.resolve(result);
        }, 1);

        return deferred.promise;
      },
      get: function() {
        var deferred = $q.defer();

        $timeout(function(){
          var result = get(table);
          deferred.resolve(result);
        }, 1);

        return deferred.promise;
      },
    };
  };
});
