'use strict';

angular.module('controllers')
	.controller('NewsCtrl', ['$scope', '$http', '$routeParams', '$location', '$sce', function ($scope, $http, $routeParams, $location, $sce) {
		$scope.fetchNewsPosts = function() {
			$http.get("https://spreadsheets.google.com/feeds/list/11RTUyltO23n3zf5euv4DIt6dok9kV0ZxvXUlqr-7464/od6/public/full?alt=json")
				.success(function(data) {
					$scope.allPosts = retrieveEntriesFromRawData(data);
					$scope.pastPosts = filterPastPosts($scope.allPosts);
				}).error(function(data, status) {
					console.log("error: " + data);
				});
		};

		var retrieveEntriesFromRawData = function(rawData) {
			var cells = rawData.feed.entry;
			var entries = [];
			_.each(cells, function(cell) {
				entries.push({
					id: cell.gsx$id.$t,
					title: cell.gsx$title.$t,
					author: cell.gsx$author.$t,
					date: moment(cell.gsx$date.$t, "YYYY-MM-DD"),
					content: $sce.trustAsHtml(cell.gsx$content.$t)
				});
			});
			return entries;
		};

		var filterPastPosts = function(posts) {
			return _.filter(posts, function(post) {
				return moment(post.date).diff(moment()) <= 0;
			});
		};

		$scope.init = function() {
			$scope.fetchNewsPosts();
		};
		$scope.init();
	}]);