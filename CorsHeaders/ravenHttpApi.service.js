
(function(module) {
    'use strict';

    var ravenHttpApiService = function ($http) {

        var baseUrl = 'http://localhost:9029/Databases/myDB/';
        var service = {
            findAll: findAll,
            get: get,
            put: put,
            indexQuery: indexQuery
        };

        return service;

        function findAll(collectionName, httpParameters) {
            return $http(angular.extend({
                url: baseUrl + 'indexes/dynamic/' + collectionName,
                method: 'JSONP'
            }, httpParameters));
        }

        function get(id, httpParameters) {
            return $http(angular.extend({
                url: baseUrl + 'docs/' + id + '',
                method: 'GET',
                headers: {
                    /*'Access-Control-Expose-Headers': 'ETag',
                    'Access-Control-Allow-Headers': 'Access-Control-Expose-Headers'*/
                }
            }, httpParameters));
        }

        function put(document, documentId, metatdata, httpParameters) {
            return $http(angular.extend({
                url: baseUrl + 'docs/' + escape(documentId) + '',
                method: 'PUT',
                headers: metatdata,
                data: JSON.stringify(document)
            }, httpParameters));
        }

        function indexQuery(indexName, query, httpParameters) {
            return $http(angular.extend({
                url: baseUrl + 'indexes/' + indexName + '?&query=' + query,
                method: 'GET'
            }, httpParameters));
        }
    };

    module.service('ravenHttpApiService', ['$http', ravenHttpApiService]);
}(angular.module('plunker')));