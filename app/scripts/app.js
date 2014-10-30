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
	        templateUrl: '../../../17/app/views/what.html',
	        controller: 'WhatCtrl'
	    }).when('/what', {
	        templateUrl: '../../../17/app/views/what.html',
	        controller: 'WhatCtrl'
	    }).when('/news', {
	        templateUrl: '../../../17/app/views/news.html',
	        controller: 'MainCtrl'
	    }).when('/contact', {
	        templateUrl: '../../../17/app/views/contact.html',
	        controller: 'ContactCtrl'
	    })
	    .otherwise({
	      redirectTo: '/'
	    });
}]);

angular.module('controllers', []);
angular.module('services', []);
angular.module('directives', []);