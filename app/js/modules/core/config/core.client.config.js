'use strict';

angular.module('core').config(['$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider',
	function($stateProvider, $urlRouterProvider, $cfpLoadingBarProvider) {
		$cfpLoadingBarProvider.includeSpinner = false;
		// Redirect to home view when route not found

	}
]);