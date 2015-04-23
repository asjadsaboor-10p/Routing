/**
 * Created by asjad.saboor on 4/23/2015.
 */


angular.module('accountingApp').controller('showUserAccountsCtrl', function ($scope, $http, $routeParams) {

    $scope.userAccounts;
    $scope.search = function () {
        var url = '../../data/accounts.json';

        return $http.get(url).success(
            function (response) {
                $scope.allaccounts = response;
            }
        ).error(function () {
                alert('Unable to get back user accounts :( ');
            });

    }

    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].userId === id) {
                return arr[d].accounts;
            }
        }
    }

    $scope.search().then(function () {
        $scope.userAccounts = getById($scope.allaccounts, $routeParams.userId);
    });


});
