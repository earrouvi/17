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
	        templateUrl: '../views/what.html',
	        controller: 'WhatCtrl'
	    }).when('/what', {
	        templateUrl: '../views/what.html',
	        controller: 'WhatCtrl'
	    }).when('/news', {
	        templateUrl: '../views/main.html',
	        controller: 'MainCtrl'
	    }).when('/contact', {
	        templateUrl: '../views/contact.html',
	        controller: 'ContactCtrl'
	    })
	    .otherwise({
	      redirectTo: '/'
	    });
}]);

angular.module('controllers', []);
angular.module('services', []);
angular.module('directives', []);