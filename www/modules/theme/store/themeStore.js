/**
 * Définition des quizz : quizDefinitionModel sert à stocker
 * les méta-données permettant de construire à la fois le formulaire
 * d'un quizz et son affichage.
 *
 * Contient les metadefinitions des quizz : id, templates et controlleurs à utiliser, etc...
 */
 angular.module('app.theme').factory('themeStore', ['languageService', function(languageService) {

  return [
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

}]);