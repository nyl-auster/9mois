
angular.module('app.theme').factory('themeModel', [function() {

  var themes = [
    {
      id: 'trimestre_1',
      name: "1ere trimestre"
    },
    {
      id: 'trimestre_2',
      name: '2eme trimestre'
    },
    {
      id: 'trimestre_3',
      name: '3eme trimestre'
    },
    {
      id: 'jardin_secret',
      name: 'jardin secret'
    }
  ];

  return {

    getAll: function() {
      return themes;
    }

  }



}]);