(function(angular) {
    'use strict';

    angular.module('plunker', [])
        .controller('MainCtrl', [
            '$scope', 'ravenHttpApiService',
            function($scope, ravenHttpApiService) {
                $scope.name = 'World';
                $scope.getClient = function() {
                    ravenHttpApiService.get('clients/1')
                        .then(function(response) {
                            $scope.data = response.data;
                            $scope.headers = response.headers();
                            console.log($scope.headers);
                        });

                };
            }
        ]);
}(angular));