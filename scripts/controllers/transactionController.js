/**
 * Created by Asjad on 4/23/2015.
 */


angular.module('accountingApp').controller('showUserAccountTransactionsCtrl',function ($scope, $http, $routeParams,transactionFactory) {

        $scope.userAccountTransactions;

        $scope.getUserAccountTransactions = function () {
            return transactionFactory.getUserAccountsTransactions().success(
                function (response) {
                    $scope.alltransactions = response;
                }
            ).error(function () {
                    alert('Unable to get  user account transactions :( ');
                });
        }


        $scope.getUserAccountTransactions().then(function () {
            $scope.userAccountTransactions =
                transactionFactory.getTransactionsByAccountId($scope.alltransactions, $routeParams.accountId);
        });

        $scope.deleteTransactionButtonClicked = function (index) {

            var res = confirm("Are your sure?")
            if(res){
            $scope.userAccountTransactions
                .splice(index, 1);}
        }


    });