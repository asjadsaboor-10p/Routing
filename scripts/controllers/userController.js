/**
 * Created by asjad.saboor on 4/23/2015.
 */


angular.module('accountingApp').controller('userCtrl',function($scope,$http,dataFactory){

    dataFactory.getUsers().then(
        function(response) { $scope.users = response.data;});

});
