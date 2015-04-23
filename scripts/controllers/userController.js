/**
 * Created by asjad.saboor on 4/23/2015.
 */


angular.module('accountingApp').controller('showUsersCtrl', function ($scope, $http,$location, userFactory) {

    userFactory.getUsers().then(
        function (response) {
            $scope.users = response.data;
        });

    $scope.go = function ( path ) {
        console.log("go  " + path);
        $location.path( path );
    };

});


