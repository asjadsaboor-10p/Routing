/**
 * Created by Asjad on 4/23/2015.
 */


angular.module('accountingApp').controller('showUserAccountTransactionsCtrl',function ($scope, $http, $routeParams,transactionFactory) {

        $scope.userAccountTransactions;

        $scope.getUserAccountTransactions = function () {
            return transactionFactory.getUserAccountTransactions().success(
                function (response) {
                    $scope.alltransactions = response;
                }
            ).error(function () {
                    alert('Unable to get  user account transactions :( ');
                });
        }


        $scope.getUserAccountTransactions().then(function () {
            $scope.userAccountTransactions =
                accountFactory.getAccountsByUserId($scope.alltransactions, $routeParams.accountId);
        });

        $scope.deleteTransactionButtonClicked = function (transactionId) {
            $scope.userAccounts
                .splice(accountFactory.getUserAccountIndex($scope.userAccounts, accountId), 1);
        }


    });