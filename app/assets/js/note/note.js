var app = angular.module('noteSth');
app.controller('note', ['$scope', 'dataS', 'localStorageService', '$location', '$rootScope',

    function($scope, dataS, localStorageService, $location, $rootScope) {
       $scope.note = {
           body: {},
           send: function() {
               dataS.postData('/note', $scope.note.body, true)
               .success(function(data) {
                   $rootScope.$emit('noteAdd', data);
               })
           }
       }
       
    }
]);   