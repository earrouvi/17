'use strict';

angular.module('controllers')
	.controller('MenuCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
		$scope.activeLink = function(linkName) {
			return $location.path() == '/' + linkName;
		};

		$scope.goToPage = function(page) {
			$location.path(page);
		};

		$scope.init = function() {
		};
		$scope.init();
	}]);