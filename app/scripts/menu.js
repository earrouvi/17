'use strict';

angular.module('controllers')
	.controller('MenuCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {

		$scope.activeLink = function(linkName) {
			return $location.path() == '/' + linkName;
		};

		$scope.goToPage = function(page) {
			$location.path(page);
			jQuery(document).scroll(0);
			$scope.init();
		};

		$scope.randomNb = function(index) {
			return $scope.randArray[index];
		};

		$scope.generateRandomPhotos = function() {
			for (var i = 0; i < 6; i++) {
				var rand = Math.floor(Math.random() * 17) + 1;
				while (_.contains($scope.randArray, rand)) {
					rand = rand % 17 + 1;
				}
				$scope.randArray.push(rand);
			}
		};

		$scope.init = function() {
			$scope.randArray = [];
			$scope.generateRandomPhotos();
		};
		$scope.init();
	}]);