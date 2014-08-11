'use strict';

angular.module('Model')
.factory('initializeLocalStorage', function($localStorage) {

  var movies = [{
    id: 1,
    name:'The Terminator',
    releaseYear: new Date('1985/08/26'),
    grossIncome:38400000,
    actors:[
      {
        id:1,
        fullName:'Arnold Schwarzenegger',
        birthdate:'1955/5/5',
        movies: [{name:'True Lies',id:2}],
      },
      {
        id:2,
        fullName:'Linda Hamilton',
        birthdate:'1955/5/5',
        movies: [{name:'Song',id:3}],
      }
    ],
    directorName: 'James Cameron',
    rating: 8.1,
    genre: ['Action', 'Suspense', 'Sci-Fi'],
    imageURL: 'http://ia.media-imdb.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_SX214_AL_.jpg'
  }];

  var actors = [
    {
      id:1,
      fullName:'Arnold Schwarzenegger',
      birthdate:'1955/5/5',
      movies: [{name:'True Lies',id:2}],
    },
    {
      id:2,
      fullName:'Linda Hamilton',
      birthdate:'1955/5/5',
      movies: [{name:'Song',id:3}],
    }
  ];
  var genres = ['Action', 'Suspense', 'Sci-Fi', 'Drama', 'Fantasy'];

  $localStorage.movies = $localStorage.movies || movies;
  $localStorage.actors = $localStorage.actors || actors;
  $localStorage.genres = $localStorage.genre || genres;

  console.log('asd');

});