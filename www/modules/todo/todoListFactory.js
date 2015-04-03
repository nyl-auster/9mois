angular.module('app.page').factory('todoListFactory', ['jsonStoreFactory', function(jsonStoreFactory) {

  var jsonStoreKey = 'todoLists';

  var todoLists =  [

    {
      name: "Ma premier valise",
      description: "texte de description ma première valise",
      tasks_suggested: [
        {
          name: "suggestion de tache pour ma premiere valise",
          status: "todo"
        },
        {
          name: "suggestion de tache 2 pour ma premiere valise",
          status: "todo"
        },
      ],
      tasks: [
        {
          name: "tache de test 1",
          status: "todo"
        },
        {
          name: "tache de test 2",
          status: "todo"
        }
      ]
    },

    {
      name: "Ma deuxieme liste",
      description: "texte de description ma deuxieme liste",
      tasks_suggested: [
        {
          name: "suggestion tache pour ma deuxieme liste ",
          status: "todo"
        }
      ],
      tasks: [
        {
          name: "example task liste 2",
          status: "todo"
        },
        {
          name: "second example task liste 2",
          status: "done"
        }
      ]
    }
  ];

  return {

    // return default todos list if no todos list have been defined,
    // else return stored todos lists.
    getTodoLists: function() {
      var datas = jsonStoreFactory.read(jsonStoreKey);
      if (datas) todoLists = datas;
      return todoLists;
    },

    getList: function(listId) {
      return this.getTodoLists()[listId];
    },

    addTodoList: function(list) {
      todoLists = this.getTodoLists();
      todoLists.push(list);
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    },

    updateList: function(listId, list) {
      todoLists = this.getTodoLists();
      todoLists[listId] = list;
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    },

    deleteList: function(listId) {
      todoLists = this.getTodoLists();
      todoLists.splice(listId, 1);
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    },

    getAllTasksFromList: function(listId) {
      return this.getList(listId).tasks;
    },

    getTaskFromList: function(listId, taskId) {
      return this.getList(listId).tasks[taskId];
    },

    addTaskToList: function(listId, task) {
      todoLists = this.getTodoLists();
      // make sur task property is defined
      if (typeof todoLists[listId].tasks === 'undefined') {
        todoLists[listId].tasks = [];
      }
      todoLists[listId].tasks.push(task);
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    },

    updateTaskFromList: function(listId, taskId, task) {
      todoLists = this.getTodoLists();
      todoLists[listId].tasks[taskId] = task;
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    },

    deleteTaskFromList: function(listId, taskId) {
      todoLists = this.getTodoLists();
      todoLists[listId].tasks.splice(taskId, 1);
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    }

  }

}]);