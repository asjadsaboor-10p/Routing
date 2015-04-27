/**
 * Created by asjad.saboor on 4/23/2015.
 */



angular.module('accountingApp').factory("accountFactory", function ($http) {

    return {
        getUsersAccounts: function () {
            return $http.get('../../data/accounts.json')
        }
    };


});