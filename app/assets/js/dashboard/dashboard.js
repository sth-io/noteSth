var app = angular.module('noteSth');
app.controller('dashboard', ['$scope', 'dataS', 'localStorageService', '$location', '$rootScope',

    function($scope, dataS, localStorageService, $location, $rootScope) {
       dataS.getData('/note', true)
       .success(function(data) {
           $scope.notes = data;
       })
       $rootScope.$on('noteAdd', function (event, data) {
          $scope.notes.push(data); // 'Data to send'
        }); 
    }
]);   