/**
 * Created by asjad.saboor on 4/23/2015.
 */
var app = angular.module('accountingApp', ['ngRoute']);

app.config(
    function ($routeProvider) {
        $routeProvider.
            when('/Users', {
                templateUrl: 'showUsers.html',
                controller: 'showUsersCtrl'
            }).
            when('/Users/:userId/Accounts', {
                templateUrl: 'showUserAccounts.html',
                controller: 'showUserAccountsCtrl'
            }).
            when('/Users/:userId/Account/:accountId/Transactions', {
                templateUrl: 'showUserAccountTransactions.html',
                controller: 'showUserAccountTransactionsCtrl'
            }).
            otherwise({
                redirectTo: '/Users'
            });
    });
