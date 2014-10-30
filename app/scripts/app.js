'use strict';

angular.module('17App', [
  'ngRoute',
  'controllers',
  'services',
  'directives'
])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	    .when('/', {
	        templateUrl: 'app/views/what.html',
	        controller: 'WhatCtrl'
	    }).when('/what', {
	        templateUrl: 'app/views/what.html',
	        controller: 'WhatCtrl'
	    }).when('/news', {
	        templateUrl: 'app/views/main.html',
	        controller: 'MainCtrl'
	    }).when('/contact', {
	        templateUrl: 'app/views/contact.html',
	        controller: 'ContactCtrl'
	    })
	    .otherwise({
	      redirectTo: '/'
	    });
}]);

angular.module('controllers', []);
angular.module('services', []);
angular.module('directives', []);