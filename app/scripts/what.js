'use strict';

angular.module('controllers')
	.controller('WhatCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
		$scope.minutes = function() {
			$scope.ca_part = Math.floor(moment('08/05/2015', 'DD/MM/YYYY').diff(moment(), 'minutes'));
		};

		$scope.init = function() {
			$scope.minutes();
		};
		$scope.init();
	}]);