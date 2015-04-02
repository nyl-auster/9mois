angular.module('app.page').factory('todoFactory', function() {

  var listDatas = {

    lists: [
      {
        id: 1,
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
          }
        ]
      },

      {
        id: 2,
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
      for (var i = 0; i < listDatas.lists.length; i++) {
        if (listId == listDatas.lists[i]['id']) {
          listDatas.lists.splice(i, 1);
        }
      }
    },

    getAllLists: function() {
      return listDatas.lists;
    },

    getListById: function(listId) {
      for (var i = 0; i < listDatas.lists.length; i++) {
        if (listId == listDatas[i]['id']) {
          return listDatas[i]['id'];
        }
      }
      return null;
    }

  }

});