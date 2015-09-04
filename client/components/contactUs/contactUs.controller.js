'use strict';

angular.module('formsApp')
  .controller('ContactUsCtrl',[ '$scope', 'contactUs', "$log", function ($scope, contactUs, $log) {

    $scope.person = {};
    $scope.submit = function(form) {

        $scope.submitted = true;

        if(form.$valid) {

            contactUs.send({
                email: $scope.person.email,
                message: $scope.person.message
            });
        }
    };
}]);
