'use strict';

angular.module('controllers')
	.controller('WhatCtrl', ['$scope', '$http', '$routeParams', '$location', '$window', function ($scope, $http, $routeParams, $location, $window) {
		$scope.minutes = function() {
			$scope.ca_part = Math.floor(moment('08/05/2015', 'DD/MM/YYYY').diff(moment(), 'minutes'));
		};

		$scope.goToHorlogeParlante = function() {
			$window.location.href = 'http://www.horlogeparlante.com/';
		};

		$scope.displaySubPage = function(linkName) {
			$scope.showSub['jeudi'] = false;
			$scope.showSub['vendredi'] = false;
			$scope.showSub['weekend'] = false;
			$scope.showSub[linkName] = true;
			$scope.showSub['any'] = true;
		};

		$scope.init = function() {
			$scope.showSub = {};
			$scope.showSub['jeudi'] = true;
			$scope.showSub['vendredi'] = false;
			$scope.showSub['weekend'] = false;

			$scope.minutes();
		};
		$scope.init();
	}]);