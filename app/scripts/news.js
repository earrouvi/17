'use strict';

angular.module('controllers')
	.controller('NewsCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
		$scope.fetchNewsPosts = function() {
			$http.get($location.host() + '/api/newsPost')
				.success(function(data) {
					console.log(data.posts[0].content);
				}).error(function(data, status) {
					console.log(data);
				});
		};

		$scope.init = function() {
			$scope.fetchNewsPosts();
		};
		$scope.init();
	}]);