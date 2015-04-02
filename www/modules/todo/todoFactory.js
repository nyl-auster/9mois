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

    getAllLists: function() {
      return listDatas.lists;
    },

    getListById: function(listId) {
      console.log(listDatas.lists);
    }

  }

});