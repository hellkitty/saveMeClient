angular.module('starter.controllers', [])

.controller('PulseCtrl', function($scope) {})
.controller('GPSCtrl', function($scope) {})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
