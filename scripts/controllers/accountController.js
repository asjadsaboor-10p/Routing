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

    $scope.deleteAccountButtonClicked = function (accountId) {
        $scope.userAccounts
            .splice(accountFactory.getUserAccountIndex($scope.userAccounts,accountId), 1);
    }

    $scope.viewTransactionButtonClicked = function ( path ) {
        console.log(path)
        $location.path( path );
    };
});
