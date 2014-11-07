'use strict';

angular.module('controllers')
	.controller('FanfraleCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
		var fetchFanfares = function() {
			$http.get("https://spreadsheets.google.com/feeds/list/1emnNWK2RcXzH3usLdn6at9r6z_QnPefPk8FZJzkkjBY/od6/public/full?alt=json")
				.success(function(data) {
					$scope.fanfares = retrieveEntriesFromRawData(data);
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
					shortName: cell.gsx$shortname.$t,
					longName: cell.gsx$longname.$t,
					url: cell.gsx$url.$t,
					photo: cell.gsx$photo.$t,
					description: cell.gsx$description.$t
				});
			});
			return entries;
		};

		$scope.init = function() {
			fetchFanfares();
		};
		$scope.init();
	}]);