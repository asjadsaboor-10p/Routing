/**
 * Created by asjad.saboor on 4/23/2015.
 */


angular.module('accountingApp').controller('userCtrl',function($scope,$http){

   $http.get("../../data/users.json").then(
        function(response) { $scope.users = response.data;});

});
