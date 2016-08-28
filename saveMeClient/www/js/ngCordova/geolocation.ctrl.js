angular.module('geolocation.ctrl', [])

/*  .controller('GeolocationCtrl', function ($scope, $cordovaGeolocation) {

    $scope.getLocation = function () {
      $cordovaGeolocation
        .getCurrentPosition({timeout: 10000, enableHighAccuracy: false})
        .then(function (position) {
          console.log("position found");
          $scope.position = position;
           long = position.coords.longitude
           lat = position.coords.latitude
        }, function (err) {
          console.log("unable to find location");
          $scope.errorMsg = "Error : " + err.message;
        });
    };
  })*/
  
/*  .controller('GeolocationCtrl', function ($scope, $ionicLoading) {
	  
	  google.maps.event.addDomListener(window, 'load', function() {
	        var myLatlng = new google.maps.LatLng(33.450701, 126.570667);
	 
	        var mapOptions = {
	            center: myLatlng,
	            zoom: 16,
	            mapTypeId: google.maps.MapTypeId.ROADMAP
	        };
	 
	        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	 
	        navigator.geolocation.getCurrentPosition(function(pos) {
	            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
	            var myLocation = new google.maps.Marker({
	                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
	                map: map,
	                title: "My Location"
	            });
	        });
	 
	        $scope.map = map;
	    });

  })*/
  
  .controller('GeolocationCtrl', function($scope, $state, $cordovaGeolocation) {
	  $scope.getLocation = function () {

		  var options = {timeout: 10000, enableHighAccuracy: true};
		 
		  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
		    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		 
		    var mapOptions = {
		      center: latLng,
		      zoom: 15,
		      mapTypeId: google.maps.MapTypeId.ROADMAP
		    };
		 
		    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
		 
		  }, function(error){
		    console.log("Could not get location");
		  });
	  };
  
  
});