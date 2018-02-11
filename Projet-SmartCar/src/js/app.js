// Your code goes here

//Speed
/*function showSpeed(data) {
  console.log(data);
  var speed = data.average_speed;
  if (speed !== undefined) {
    var speedText = document.getElementById('speed');
    speedText.innerHTML = speed;
  }
};
*/
//gm.info.watchVehicleData(showSpeed, ['average_speed']);
//gm.info.getVehicleData(showSpeed, ['average_speed']);

var map;
function initialize() {
	"use strict";
	var latitude = parseFloat(document.getElementById("latitude").value);
	var longitude = parseFloat(document.getElementById("longitude").value);
	//var n_lat = parseFloat(latitude.toFixed(2));
	//var n_lng = parseFloat(longitude.toFixed(2));
	console.log(latitude, longitude);
var mapOptions = {
  zoom: 8,
  center: {lat: latitude, lng: longitude}
};
map = new google.maps.Map(document.getElementById('map'),
	mapOptions);

var marker = new google.maps.Marker({
  // The below line is equivalent to writing:
  // position: new google.maps.LatLng(-34.397, 150.644)
  position: {lat: latitude, lng: longitude},
  map: map
});
	
	

	
	
	//////////
var infowindow = new google.maps.InfoWindow({
  content: '<p>Marker Location:' + marker.getPosition() + '</p>'
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
});
}

google.maps.event.addDomListener(window, 'load', initialize);


/////////////////////

function Search()
{
	"use strict";
	var latitude = parseFloat(document.getElementById("latitude").value);
	var longitude = parseFloat(document.getElementById("longitude").value);
	
	var mapOptions = {
  zoom: 8,
  center: {lat: latitude, lng: longitude}
};
map = new google.maps.Map(document.getElementById('map'),
	mapOptions);
	
	var marker = new google.maps.Marker({
  // The below line is equivalent to writing:
  // position: new google.maps.LatLng(-34.397, 150.644)
  position: {lat: latitude, lng: longitude},
  map: map
});
	
	//Search	
var searchBox = new google.maps.places.SearchBox(document.getElementById("mapsearch"));

google.maps.event.addListener(searchBox, 'places_changed', function(){
	
	var places = searchBox.getPlaces();
	
	//bounds
	var bounds = new google.maps.LatLngBounds();
	var i, place;
	
	for(i=0; place=places[i];i++)
		{
			console.log(place.geometry.location);
			
			bounds.extend(place.geometry.location);
			marker.setPosition(place.geometry.location);
			
		}
	map.fitBounds(bounds);
	map.setZoom(8);
	
	
	var latitude = place.geometry.location.lat();
	var longitude = place.geometry.location.lng();  
	document.getElementById('latitude').value = latitude;
    document.getElementById('longitude').value = longitude;
	console.log(latitude, longitude);

});	
}
}


///////////////////




gm.info.watchPosition(watchProcessPosition, true)
gm.info.getCurrentPosition(processPosition, true)


function processPosition(position){
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  //var latText = document.getElementById('latText');
  // latText.innerHTML = lat;
  //var lngText = document.getElementById('lngText');
  // lngText.innerHTML lng;
   document.getElementById('latitude').value = lat;
   document.getElementById('longitude').value = lng;
	
   //google.maps.event.addDomListener(window, 'load', initialize);
}

function watchProcessPosition(position){
    "use strict";
	var latitude = parseFloat(document.getElementById("latitude").value);
	var longitude = parseFloat(document.getElementById("longitude").value);
	
	var mapOptions = {
  zoom: 5,
  center: {lat: latitude, lng: longitude}
};
map = new google.maps.Map(document.getElementById('map'),
	mapOptions);
	
  var marker = new google.maps.Marker({
  // The below line is equivalent to writing:
  // position: new google.maps.LatLng(-34.397, 150.644)
  position: {lat: latitude, lng: longitude},
  map: map
});

var infowindow = new google.maps.InfoWindow({
  content: '<p>Marker Location:' + marker.getPosition() + '</p>'
});
	
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
	 document.getElementById('latitude').value = lat;
   document.getElementById('longitude').value = lng;
	console.log(lat, lng);
   //google.maps.event.addDomListener(window, 'load', initialize);
}





