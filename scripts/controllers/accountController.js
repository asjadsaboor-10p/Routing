/**
 * Created by asjad.saboor on 4/23/2015.
 */


angular.module('accountingApp').controller('showUserAccountsCtrl',
    function ($scope, $http, $location, $routeParams, $modal, $log, accountFactory) {

        $scope.userAccounts;
        $scope.userId = $routeParams.userId;


        $scope.getUserAccounts = function () {
            return accountFactory.getUsersAccounts().success(
                function (response) {
                    response.forEach(function (allaccounts) {
                        if (allaccounts.userId == $scope.userId) {
                            $scope.userAccounts = allaccounts.accounts;
                        }
                    });
                }
            ).error(function () {
                    alert('Unable to get  user accounts :( ');
                });
        };

        $scope.getUserAccounts();

        $scope.deleteAccountButtonClicked = function (index) {
            var res = confirm("Are your sure?")
            if (res) {
                $scope.userAccounts
                    .splice(index, 1);
            }
        };

        $scope.viewTransactionButtonClicked = function (path) {
            $location.path(path);
        };

        $scope.viewLastTransactionButtonClicked = function (index) {
            var modalInstance = $modal.open({
                templateUrl: 'modal/viewTransactionModal.html',
                controller: 'viewTransactionModalCtrl',
                resolve: {
                    items: function () {
                        return $scope.userAccounts[index].accountId;
                    }
                }
            });

            modalInstance.result.then(function (editTrans) {

            }, function () {
            });

        };


    });
