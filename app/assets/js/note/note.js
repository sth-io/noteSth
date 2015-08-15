var app = angular.module('noteSth');
app.controller('note', ['$scope', 'dataS', 'localStorageService', '$location',

    function($scope, dataS, localStorageService, $location) {
       $scope.note = {
           body: {},
           send: function() {
               dataS.postData('/note', $scope.note.body, true)
               .success(function(data) {
                   // do sth on save
               })
           }
       }
       
    }
]);   