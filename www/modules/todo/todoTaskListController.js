angular.module('app.page')

  .controller('todoTaskListController', ['$scope', 'listFactory', '$stateParams', function($scope, todoFactory, $stateParams) {

    var listId = $stateParams.listId;
    console.log(listId);
    var list = todoFactory.getListById(listId);
    $scope.tasks = list.tasks;
   // $scope.tasks = list.tasks;

  }]);