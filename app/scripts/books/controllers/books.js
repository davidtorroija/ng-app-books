'use strict';

/**
 * @ngdoc function
 * @name moviecityApp.controller:MainCtrl
 * @description
 * # MoviesCtrl
 * Controller of the moviecityApp
 */
 angular.module('moviecityApp')
 .controller('BooksCtrl', function ($scope) {

  $scope.selected_book = {
    level: 0,
    content: 'Pepe',
    children: [
    {
      "id": "1",
      "content": "Introduccion",
      "level": "1",
      "order": "1",
      "id_book": "1",
      children: []
    },
    {
      "id": "2",
      "content": "Motivacion",
      "level": "2",
      "order": "2",
      "id_book": "1"
      ,children: [
      {
        "id": "3",
        "content": "Reseña Historica",
        "level": "2",
        "order": "3",
        "id_book": "1"
        ,children: [
        {
          "id": "4",
          "content": "Level 3",
          "level": "3",
          "order": "4",
          "id_book": "1"
          ,children: [
          {
            "id": "5",
            "content": "Level 4",
            "level": "4",
            "order": "5",
            "id_book": "1"
            ,children: []
          }]
        }]
      },
      ]
    }],

  };

  $scope.add_category = function (category, new_name){
    var order = category.children.length ? _(category.children).chain().pluck('order').max().value() : parseInt(category.order);

    category.children.push({
      id: Date.now(),
      content: new_name,
      level: parseInt(category.level) +1,
      order: order +1,
      id_book: category.id_book,
      children:[]
    })

    category.adding_category = false;
  };

  $scope.remove_category = function (category){
    $scope.selected_book.children = find_recursively_and_remove($scope.selected_book.children,category);
  };

  function find_recursively_and_remove(categories,category){
    _(categories).every(function(item,index){
      if(_.isEqual(item, category)){
        categories = _(categories).without(item);
        return false;
      }
      item.children = find_recursively_and_remove(item.children,category);
      return true;
    });
    return categories;
  }

  $scope.move_up = function (category){
    $scope.selected_book.children = find_recursively_and_move_up($scope.selected_book.children,category);
  };

  function find_recursively_and_move_up(categories,category){
    _(categories).every(function(item,index){
      if(_.isEqual(item, category)){
        categories = _(categories).without(item);
        return false;
      }
      item.children = find_recursively_and_move_up(item.children,category);
      return true;
    });
    return categories;
  }


  $scope.names = [];
    var data = [];
    for (var i = 0; i < 100; i++) {
        data.push('item' + i)
    }
    $scope.add = function () {
        if (data.length) $scope.names.splice(0, 0, data.pop());
    };
    $scope.remove = function (index) {
        $scope.names.splice(index, 1);
    };
});

