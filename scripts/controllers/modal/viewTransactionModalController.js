/**
 * Created by asjad.saboor on 4/24/2015.
 */

angular.module('accountingApp').controller('viewTransactionModalCtrl', function ($scope, $modalInstance, $filter,$log, items,transactionFactory) {

    $scope.accountId = items;

    transactionFactory.getUserAccountsTransactions().success(function (response) {
        response.forEach(function(accountTransactions){
            if ( accountTransactions.accountId == $scope.accountId  ) {
                $scope.id= accountTransactions.transactions[accountTransactions.transactions.length - 1].transactionId;
                $scope.amount= accountTransactions.transactions[accountTransactions.transactions.length - 1].amount;
                $scope.type= accountTransactions.transactions[accountTransactions.transactions.length - 1].type;
                $scope.date= accountTransactions.transactions[accountTransactions.transactions.length - 1].date;
            }
        });

    }).error(function (reason) {
       $log.error(reason);
    });

    $scope.close = function () {
        $modalInstance.close();
    };
});