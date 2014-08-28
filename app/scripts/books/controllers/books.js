'use strict';

 angular.module('BooksApp')
 .controller('BooksCtrl', function ($scope,book) {
  $scope.selectedBook = book;

  $scope.addCategory = function (category, new_name){
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

  $scope.removeCategory = function (category){
    $scope.selectedBook.children = findRecursivelyAndRemove($scope.selectedBook.children,category);
  };

  function findRecursivelyAndRemove(categories,category){
    _(categories).every(function(item,index){
      if(_.isEqual(item, category)){
        categories = _(categories).without(item);
        return false;
      }
      item.children = findRecursivelyAndRemove(item.children,category);
      return true;
    });
    return categories;
  }

  $scope.moveUp = function (index,category){
    console.log(index);
    index = index-1;
    if(index>=0){
      $scope.selectedBook.children = findRecursivelyAndMove($scope.selectedBook.children,category,index);
    }
  };

  $scope.moveDown = function (index,category){
    console.log(index);
    index = index + 1;
    $scope.selectedBook.children = findRecursivelyAndMove($scope.selectedBook.children,category,index);
  };

  function findRecursivelyAndMove(categories,category,indexToMove){
    _(categories).every(function(item,index){
      if(_.isEqual(item, category)){
        // if(indexToMove > index && indexToMove < categories.length){
          categories.move(index,indexToMove);
          return false;
        // }
      }
      item.children = findRecursivelyAndMove(item.children,category);
      return true;
    });
    return categories;
  }

  Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
  };
});

