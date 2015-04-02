angular.module('app.page')

  .controller('todoTaskListController', ['$scope', 'todoFactory', '$stateParams', function($scope, todoFactory, $stateParams) {

    todoFactory.getListById(2);
    $scope.lists = todoFactory.getAllLists();

  }]);