/**
 * Created by Asjad on 4/23/2015.
 */


angular.module('accountingApp').controller('showUserAccountTransactionsCtrl',
    function ($scope, $http, $routeParams, $modal, $log, transactionFactory) {

        $scope.userAccountTransactions;

        $scope.getUserAccountTransactions = function () {
            return transactionFactory.getUserAccountsTransactions().success(
                function (response) {
                    response.forEach(function (alltransactions) {
                        if (alltransactions.accountId == $routeParams.accountId) {
                            $scope.userAccountTransactions = alltransactions.transactions;
                        }
                    });
                }
            ).error(function () {
                    alert('Unable to get  user account transactions :( ');
                });
        };

        $scope.getUserAccountTransactions();

        $scope.deleteTransactionButtonClicked = function (index) {

            var res = confirm("Are your sure?");
            if (res) {
                $scope.userAccountTransactions
                    .splice(index, 1);
            }
        };

        $scope.addTransaction = function () {
            var modalInstance = $modal.open({
                templateUrl: 'modal/addEditTransactionModal.html',
                controller: 'addEditTransactionModalCtrl',
                resolve: {
                    items: function () {
                    }
                }
            });
            modalInstance.result.then(function (newTrans) {

                var count = $scope.userAccountTransactions.length;
                newTrans.transactionId = 101 + count;
                $scope.userAccountTransactions.push(newTrans);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.editTransaction = function (index) {

            var modalInstance = $modal.open({
                templateUrl: 'modal/addEditTransactionModal.html',
                controller: 'addEditTransactionModalCtrl',
                resolve: {
                    items: function () {
                        return $scope.userAccountTransactions[index];
                    }
                }
            });

            modalInstance.result.then(function (editTrans) {
                $scope.userAccountTransactions[index] = editTrans;
            }, function () {
            });

        };
    });