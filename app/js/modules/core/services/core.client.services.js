'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('core').factory('dataPassage', ['$http', '$cookies', '$q', '$injector', '$cookieStore',

    function ($http, $cookies, $q, $injector, $cookieStore) {

        return {

            apiQuery: function (passedData){
                var url = siteBaseUrl+'/api/1.0/'+passedData.apiController+'/';
                if(typeof passedData.apiAction != 'undefined'){
                    url=url+passedData.apiAction+'/';
                }
                if(typeof passedData.params != 'undefined'){
                    url=url+passedData.params;
                }
                //console.log(url);
                var req = {
                    method: passedData.method,
                    url: url,
                    headers: {
                        'contentType': 'application/json'
                    },
                    data: passedData.data
                }
                return $http(req)
                    .success(function(data){
                        return data;
                    })
                    .error(function(data, status){
                        return data;
                    }); 
            }
        }

    }
]);