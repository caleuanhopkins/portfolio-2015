'use strict';

var siteBaseUrl = "http://port.callumhopkins.com";

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'portfolio2015';
	var applicationModuleVendorDependencies = ['ngResource', 'ngRoute', 'ngCookies',  'ngAnimate', 'ui.select', 'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils', 'angular-ladda', 'angular-loading-bar'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();
'use strict';

var $urlRouterProviderRef = null;
var $stateProviderRef = null;
var $locationProviderRef = null;

angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular.module(ApplicationConfiguration.applicationModuleName).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$uiViewScrollProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $uiViewScrollProvider) {
    	$urlRouterProviderRef = $urlRouterProvider;
    
    	$locationProvider.html5Mode(true);
    	$uiViewScrollProvider.useAnchorScroll();
    	$stateProviderRef = $stateProvider;
    	$locationProviderRef = $locationProvider;

		$urlRouterProvider.rule(function($injector, $location) {
	        if($location.protocol() === 'file')
	            return;

	        var path = $location.path()
	        // Note: misnomer. This returns a query object, not a search string
	            , search = $location.search()
	            , params
	            ;

	        // check to see if the path already ends in '/'
	        if (path[path.length - 1] === '/') {
	            return;
	        }

	        // If there was no search string / query params, return with a `/`
	        if (Object.keys(search).length === 0) {
	            return path + '/';
	        }

	        // Otherwise build the search string and return a `/?` prefix
	        params = [];
	        angular.forEach(search, function(v, k){
	            params.push(k + '=' + v);
	        });
	        return path + '/?' + params.join('&');
	    });

	}
]);

angular.module(ApplicationConfiguration.applicationModuleName).config(['$interpolateProvider','$routeProvider','$locationProvider','$resourceProvider',
	function($interpolateProvider,$routeProvider,$locationProvider,$resourceProvider) {
  		$interpolateProvider.startSymbol('[{[');
 	 	$interpolateProvider.endSymbol(']}]');
 	 	$resourceProvider.defaults.stripTrailingSlashes = true;
 	 }
]);

angular.module(ApplicationConfiguration.applicationModuleName).config(['$urlMatcherFactoryProvider',
	function ($urlMatcherFactoryProvider) {
	  $urlMatcherFactoryProvider.caseInsensitive(true);
	  $urlMatcherFactoryProvider.strictMode(true);
	}
]);

angular.element(document).ready(function() {
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

angular.module('core').config(['$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider',
	function($stateProvider, $urlRouterProvider, $cfpLoadingBarProvider) {
		$cfpLoadingBarProvider.includeSpinner = false;
		// Redirect to home view when route not found

	}
]);
'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('public', {
                abstract: true,
                template: "<div ui-view />",
                data: {

                }
            })
            .state('public.home', {
                url: '/',
                controller: 'HomepageController',
                templateUrl: 'app/js/modules/core/views/homepage.client.view.html',
            })
            .state('public.404', {
                url: '/404/',
                templateUrl: 'app/js/modules/core/views/404.client.view.html',
            })
    }
]);
'use strict';

angular.module('core').controller('HomepageController', ['$scope', '$stateParams', '$state', '$location',

	function($scope, $stateParams, $state, $location) {


	}

])
 'use strict';

angular.module('core').directive('parallax', function () {
    return {
      restrict: 'A',
      link: function parallax(scope, element, attrs) {

        parallax();

        $(window).scroll(function(e) {
            parallax();
        });

        function parallax(){
          var plxBackground = $("#js-parallax-background");
          var plxWindow = $("#js-parallax-window");

          var plxWindowTopToPageTop = $(plxWindow).offset().top;
          var windowTopToPageTop = $(window).scrollTop();
          var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

          var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
          var windowInnerHeight = window.innerHeight;
          var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
          var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
          var plxSpeed = 0.35;

          plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
        }

      }
    };
}).directive('header', function() {
    return {
      restrict: 'E',
      link: function headroom(scope, element, attrs){
        console.log(element.html());
        var myElement = document.querySelector("header");
        console.log(myElement);
        // construct an instance of Headroom, passing the element
        var headroom  = new Headroom(myElement);
        // initialise
        headroom.init(); 
      }
    }
});
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