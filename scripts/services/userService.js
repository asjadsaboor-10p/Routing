/**
 * Created by asjad.saboor on 4/23/2015.
 */

angular.module('accountingApp').factory("userFactory", function ($http) {

    return {
        getUsers: function () {
            return $http.get("../../data/users.json")
        }
    };


});