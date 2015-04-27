/**
 * Created by asjad.saboor on 4/24/2015.
 */

angular.module('accountingApp').controller('viewTransactionModalCtrl', function ($scope, $modalInstance, $filter,$log, items,transactionFactory) {

    $scope.accountId = items;
    $log.info('account id:   ' + $scope.accountId  );

    transactionFactory.getAccountLastTransaction($scope.accountId).then(function(response){


        $scope.amount =response.amount;
        $scope.type =response.type;
        $scope.date =response.date;


    }, function(reason) {

        alert("Sorry! No Transaction Found.");

    });


    $scope.close = function () {
        $modalInstance.close();
    };
});