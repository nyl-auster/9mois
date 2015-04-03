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

    getAllLists: function() {
      // return default todos list if no todos list have been defined,
      // else return stored todos lists.
      var datas = jsonStoreFactory.read(jsonStoreKey);
      if (datas) {
        todoLists = datas;
      }
      return todoLists;
    },

    getListById: function(listId) {
      todoLists = this.getAllLists();
      return todoLists[listId];
    },

    addTodoList: function(list) {
      todoLists = this.getAllLists();
      todoLists.push(list);
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    },

    updateList: function(listId, list) {
      todoLists = this.getAllLists();
      todoLists[listId] = list;
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    },

    deleteList: function(listId) {
      todoLists = this.getAllLists();
      todoLists.splice(listId, 1);
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    },

    getAllTasksFromList: function(listId) {
      var list = this.getListById(listId);
      return list.tasks;
    },

    getTaskByIdInList: function(listId, taskId) {
      todoLists = this.getAllLists();
      return todoLists[listId].tasks[taskId];
    },

    addTaskInList: function(listId, task) {
      todoLists = this.getAllLists();
      if (typeof todoLists[listId].tasks === 'undefined') {
        todoLists[listId].tasks = [];
      }
      todoLists[listId].tasks.push(task);
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    },

    updateTaskInList: function(listId, taskId, task) {
      todoLists = this.getAllLists();
      todoLists[listId].tasks[taskId] = task;
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    },

    deleteTaskInList: function(listId, taskId) {
      todoLists = this.getAllLists();
      todoLists[listId].tasks.splice(taskId, 1);
      jsonStoreFactory.write(jsonStoreKey, todoLists);
    }

  }

}]);