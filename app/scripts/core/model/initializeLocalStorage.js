'use strict';

angular.module('Model')
.factory('initializeLocalStorage', function($localStorage) {
  var books = [{
    level: 0,
    id: 111,
    content: 'El libro de las maravillas',
    children: [{
      id: 1,
      content: 'Introduccion',
      level: 1,
      order: 1,
      id_book: 1,
      children: []
    },
    {
      id: 2,
      content: 'Motivacion',
      level: 2,
      order: 2,
      id_book: 1
      ,children: [
      {
        id: 3,
        content: 'Reseña Historica',
        level: 2,
        order: 3,
        id_book: 1
        ,children: [
        {
          id: 4,
          content: 'Epitafio',
          level: 3,
          order: 4,
          id_book: 1
          ,children: [
          {
            id: 5,
            content: 'Epifania',
            level: 4,
            order: 5,
            id_book: 1
            ,children: []
          }]
        }]
      },
      ]
    },
    {
      'id': '2',
      'content': 'Motivacion',
      'level': '1',
      'order': '12',
      'id_book': '1'
      ,children: []
    }
    ]
  },
  {
    level: 0,
    id: 222,
    content: 'Como entregar',
    children: [
    {
      id: 1,
      content: 'I - Lorem',
      level: 1,
      order: 1,
      id_book: 1,
      children: []
    },
    {
      id: 2,
      content: 'II - Ipsum',
      level: 2,
      order: 2,
      id_book: 1
      ,children: [
      {
        id: 3,
        content: 'III - Ipsum',
        level: 2,
        order: 3,
        id_book: 1
        ,children: [
        {
          id: 4,
          content: 'IV - Atreyu',
          level: 3,
          order: 4,
          id_book: 1
          ,children: [
          {
            id: 5,
            content: 'V - Si tuviera alma',
            level: 4,
            order: 5,
            id_book: 1
            ,children: []
          }]
        }]
      },
      ]
    },
    ]
  }
  ];
  $localStorage.books = $localStorage.books || books;

  return{
    resetDatabase : function(){
      $localStorage.books = books;
    }
  }

});