'use strict';

angular.module('controllers')
	.controller('MenuCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {

		$scope.activeLink = function(linkName) {
			return $location.path() == '/' + linkName;
		};

		$scope.goToPage = function(page) {
			$location.path(page);
			$scope.init();
		};

		$scope.randomNb = function(index) {
			return $scope.randArray[index];
		};

		$scope.generateRandomPhotos = function() {
			for (var i = 0; i < 17; i++) {
				var rand = Math.floor(Math.random() * 32) + 1;
				while (_.contains($scope.randArray, rand)) {
					rand = rand % 32 + 1;
				}
				$scope.randArray.push(rand);
			}
		};

		$scope.init = function() {
			jQuery(document).scrollTop(0);
			$scope.randArray = [];
			$scope.generateRandomPhotos();
		};
		$scope.init();
	}]);