'use strict';

angular.module('controllers')
	.controller('MenuCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
		var randArray = [];

		$scope.activeLink = function(linkName) {
			return $location.path() == '/' + linkName;
		};

		$scope.goToPage = function(page) {
			$location.path(page);
			randArray = [];
		};

		$scope.randomNb = function() {
			var rand = Math.floor(Math.random() * 17) + 1;
			/*if (_.contains(randArray, rand)) {
				rand = (rand + 1) % 17;
			}*/
			randArray.push(rand);
			return rand;
		};

		$scope.init = function() {
		};
		$scope.init();
	}]);