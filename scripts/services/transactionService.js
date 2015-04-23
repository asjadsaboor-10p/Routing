/**
 * Created by Asjad on 4/23/2015.
 */



angular.module('accountingApp').factory("transactionFactory", function ($http) {

    return {
        getUsersAccountTransactions: function () {
            return $http.get('../../data/transactions.json')
        },
        getTransactionsByAccountId: function (arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].accountId === id) {
                    return arr[d].transactions;
                }
            }
        },
        getUserAccountIndex: function (arr, id) {
            return arr.map(function (array) {
                return array.accountId;
            }).indexOf(id)
        }
    };


});