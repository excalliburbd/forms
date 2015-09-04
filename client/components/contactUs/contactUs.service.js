'use strict';

angular.module('formsApp')
  .factory('contactUs', ['$resource', function ($resource) {

    return $resource('/api/inbox/:id', {
        id: '@_id'
    },
    {
        'send': {

            method: 'POST'
        },

        'recieve': {

            method: 'GET',
            isArry: true
        }
    });

}]);


