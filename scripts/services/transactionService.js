/**
 * Created by Asjad on 4/23/2015.
 */



angular.module('accountingApp').factory("transactionFactory", function ($http, $q) {

    return {
        getUserAccountsTransactions: function () {
            return $http.get('../../data/transactions.json')
        },
        getTransactionsByAccountId: function (arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].accountId === id) {
                    return arr[d].transactions;
                }
            }
        },

        getAccountLastTransaction: function (accountId) {
            return $q(function(resolve, reject) {

                $http.get('../../data/transactions.json').success(function (response) {
                    response.forEach(function(accountTransactionsEntry){
                        if ( accountTransactionsEntry.accountId == accountId ) {
                            resolve(accountTransactionsEntry.transactions[accountTransactionsEntry.transactions.length - 1]);
                        }
                    });

                }).error(function (reason) {
                    reject(reason);
                });

            });
        }
    };


});