angular.module('app.week')

  .service("weekService", function() {

    var weeksDatas = {
      1: "A une semaine de grossesse – 3 semaines d’aménorrhée - rien ne laisse entrevoir votre état. Les indices biologiques caractéristiques d’une grossesse ne sont pas encore présents. Votre futur bébé s’installe tranquillement. Quelques heures après la fécondation, l’œuf va se diviser en deux cellules identiques appelées blastomères. Ensuite, ces blastomères vont se diviser jusqu’à former un amas de 16 cellules appelé morula car il a l’apparence d’une mûre. On appelle cette phase la segmentation. La division continue et l’œuf progresse vers la cavité utérine pendant 3 à 4 jours : c’est la migration. Ainsi, les cellules continuent à se diviser dans la morula dont le volume n’augmente qu’à partir de la 6ème division (64 cellules)"
    };

    return {
      getCurrent: function() {
        return weeksDatas['1'];
      }
    };

  });