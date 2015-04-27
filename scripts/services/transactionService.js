/**
 * Created by Asjad on 4/23/2015.
 */



angular.module('accountingApp').factory("transactionFactory", function ($http) {

    return {
        getUserAccountsTransactions: function () {
            return $http.get('../../data/transactions.json')
        }
    };


});