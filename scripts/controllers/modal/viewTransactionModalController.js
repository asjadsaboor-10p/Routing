/**
 * Created by asjad.saboor on 4/24/2015.
 */

angular.module('accountingApp').controller('addEditTransactionModalCtrl', function ($scope, $modalInstance, $filter, items) {

    $scope.transaction = items;


    $scope.close = function () {
        $modalInstance.close();
    };
});