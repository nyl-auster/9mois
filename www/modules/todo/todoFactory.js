angular.module('app.page').factory('listFactory', function() {

  var listDatas = {

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

    createList: function(list) {
      listDatas.lists.push(list);
    },

    deleteList: function(listId) {
      listDatas.lists.splice(listId, 1);
    },

    getAllLists: function() {
      return listDatas.lists;
    },

    getListById: function(listId) {
      return listDatas.lists[listId];
    }

  }

});