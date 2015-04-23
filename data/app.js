/**
 * Created by asjad.saboor on 4/23/2015.
 */
var app = angular.module('accountingApp', ['']);

app.controller('userCtrl',function($scope,$http){

    $http.get("../../data/users.json").then(
        function(response) { $scope.users = response.data;});

});