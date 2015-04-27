/**
 * Created by asjad.saboor on 4/24/2015.
 */

angular.module('accountingApp').controller('viewTransactionModalCtrl', function ($scope, $modalInstance, $filter,$log, items,transactionFactory) {

    $scope.accountId = items;

    transactionFactory.getUserAccountsTransactions().success(function (response) {
        response.forEach(function(accountTransactionsEntry){
            if ( accountTransactionsEntry.accountId == $scope.accountId  ) {
                $scope.amount= accountTransactionsEntry.transactions[accountTransactionsEntry.transactions.length - 1].amount;
                $scope.type= accountTransactionsEntry.transactions[accountTransactionsEntry.transactions.length - 1].type;
                $scope.date= accountTransactionsEntry.transactions[accountTransactionsEntry.transactions.length - 1].date;
            }
        });

    }).error(function (reason) {
       $log.error(reason);
    });

    $scope.close = function () {
        $modalInstance.close();
    };
});