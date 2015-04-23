/**
 * Created by asjad.saboor on 4/23/2015.
 */



angular.module('accountingApp').factory("accountFactory", function ($http) {

    return {
        getUsersAccounts: function () {
            return $http.get('../../data/accounts.json')
        },
        getAccountsByUserId: function (arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].userId === id) {
                    return arr[d].accounts;
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