var app = angular.module('noteSth');
app.controller('dashboard', ['$scope', 'dataS', 'localStorageService', '$location',

    function($scope, dataS, localStorageService, $location) {
       dataS.getData('/note', true)
       .success(function(data) {
           $scope.notes = data;
       })
    }
]);   