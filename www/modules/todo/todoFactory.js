angular.module('app.page').factory('listFactory', function() {

  var listDatas = {

    staging: {
      local: {
        updated:null,
        datas:[]
      },
      remote_pulled: {
        updated:null,
        datas:[]
      },
      remote_pushed: {
        updated:null,
        datas:[]
      }
    },

    lists: [

      {
        name: "Ma premier valise",
        description: "texte de description ma première valise",
        tasks_suggested: [
          {
            name: "suggestion 1",
            status: "todo"
          }
        ],
        tasks: [
          {
            name: "example task",
            status: "todo"
          },
          {
            name: "eaxmple tasks 2",
            status: "todo"
          }
        ]
      },

      {
        name: "Ma deuxieme liste",
        description: "texte de description ma deuxieme liste",
        tasks_suggested: [
          {
            name: "suggestion liste 2",
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
            status: "todo"
          }
        ]
      }
    ]

  };

  return {

    writeList: function(list, listId) {

      // update
      if (list && listId) {
        listDatas.lists[listId] = list;
      }
      // create
      else if (list && !listId) {
        listDatas.lists.push(list);
      }
      else {
        return false;
      }

      return listDatas.lists;
    },

    createList: function(list) {
      listDatas.lists.push(list);
    },

    updateList: function(listId, list) {
      listDatas.lists[listId] = list;
    },

    deleteList: function(listId) {
      listDatas.lists.splice(listId, 1);
    },

    getAllLists: function() {
      return listDatas.lists;
    },

    getListById: function(listId) {
      return listDatas.lists[listId];
    },

    getAllTasksByListId: function(listId) {
      var list = this.getListById(listId);
      return list.tasks;
    },

    createTaskInList: function(listId, task) {
      listDatas.lists[listId].tasks.push(task);
    },

    deleteTaskInList: function(listId, taskId) {
      listDatas.lists[listId].tasks.splice(taskId, 1);
    },

    getTaskByIdInList: function(listId, taskId) {
      return listDatas.lists[listId].tasks[taskId];
    },

    updateTaskInList: function(listId, taskId, task) {
      listDatas.lists[listId].tasks[taskId] = task;
    }

  }

});