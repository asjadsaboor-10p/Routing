/**
 * Created by asjad.saboor on 4/24/2015.
 */

angular.module('accountingApp').controller('addEditTransactionModalCtrl', function ($scope, $modalInstance, $filter, items) {


    $scope.txnTypeOptions = ['credit', 'debit'];
    $scope.transaction = items;
    $scope.amount;

    function initalizeModal() {
        if ($scope.transaction !== undefined) {

            $scope.amount = Number($scope.transaction.amount.replace('$', ''));
        }
        else {
            $scope.transaction = {};
            $scope.transaction.amount = "";
            $scope.amount = "";
            $scope.transaction.type = "credit";
            $scope.transaction.transactionId = "";
            $scope.transaction.date = "";
        }
    };

    initalizeModal();


    $scope.dateFormat = 'MM/dd/yyyy';

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.disabled = function (date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();


    $scope.cancelButtonClicked = function () {
        $modalInstance.dismiss('cancel');
    };


    $scope.save = function () {
        $scope.transaction.amount = "$" + $scope.amount;
        $scope.transaction.date = $filter('date')($scope.transaction.date, $scope.dateFormat);
        $modalInstance.close($scope.transaction);
    };
});