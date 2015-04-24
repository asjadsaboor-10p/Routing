/**
 * Created by asjad.saboor on 4/23/2015.
 */


angular.module('accountingApp').controller('showUserAccountsCtrl', function ($scope, $http,$location, $routeParams, accountFactory) {

    $scope.userAccounts;
    $scope.userId=$routeParams.userId;


    $scope.getUserAccounts = function () {
        return accountFactory.getUsersAccounts().success(
            function (response) {
                $scope.allaccounts = response;
            }
        ).error(function () {
                alert('Unable to get  user accounts :( ');
            });
    }


    $scope.getUserAccounts().then(function () {
        $scope.userAccounts =
            accountFactory.getAccountsByUserId($scope.allaccounts, $routeParams.userId);
    });

    $scope.deleteAccountButtonClicked = function (index) {
        var res = confirm("Are your sure?")
        if(res){
        $scope.userAccounts
            .splice(index, 1);}
    }

    $scope.viewTransactionButtonClicked = function ( path ) {
        $location.path( path );
    };
});
