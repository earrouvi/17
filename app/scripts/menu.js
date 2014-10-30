'use strict';

angular.module('controllers')
	.controller('MenuCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {

		$scope.activeLink = function(linkName) {
			return $location.path() == '/' + linkName;
		};

		$scope.displaySubPage = function(linkName) {
			console.log("dis")
			$scope.showSub['jeudi'] = false;
			$scope.showSub['vendredi'] = false;
			$scope.showSub['weekend'] = false;
			$scope.showSub[linkName] = true;
			$scope.showSub['any'] = true;
		};

		$scope.goToPage = function(page) {
			$location.path(page);
			$scope.init();
		};

		$scope.randomNb = function(index) {
			return $scope.randArray[index];
		};

		$scope.generateRandomPhotos = function() {
			for (var i = 0; i < 4; i++) {
				var rand = Math.floor(Math.random() * 17) + 1;
				while (_.contains($scope.randArray, rand)) {
					rand = (rand + 1) % 17;
				}
				$scope.randArray.push(rand);
			}
		};

		$scope.init = function() {
			$scope.showSub = {};
			$scope.showSub['jeudi'] = false;
			$scope.showSub['vendredi'] = false;
			$scope.showSub['weekend'] = false;
			$scope.showSub['any'] = false;

			$scope.randArray = [];
			$scope.generateRandomPhotos();
		};
		$scope.init();
	}]);