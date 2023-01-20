window.addEventListener("load", function () {
	this.document.getElementsByTagName("button")[0].addEventListener("click", getlocation);
	this.document.getElementsByTagName("button")[1].addEventListener("click", getdetails);
}); //end of load

function getdetails() {
	mymap.innerHTML = `
    <div id="info">
        <span>Latitude</span>
        <span>${lat}</span>
        <span>Longitude</span>
        <span>${lon}</span>
        <span>Accuracy</span>
        <span>${accuracy}</span>
        <span>Timestamp</span>
        <span>${date}</span>
    </div>`;
}

function getlocation(e) {
	if (navigator.geolocation) navigator.geolocation.getCurrentPosition(getposition, error);
	else alert(error);
}

function getposition(position) {
	//console.log(e.coords);
	console.log(Date(arguments[0].timestamp));
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	accuracy = position.coords.accuracy;
	date = new Date(arguments[0].timestamp);
	var location = new google.maps.LatLng(lat, lon);
	var specs = { zoom: 15, center: location };
	let map = new google.maps.Map(mymap, specs);
	var marker = new google.maps.Marker({
		position: location,
		label: "",
	});

	marker.setMap(map);
}

function error() {
	alert("Please Accept Permissions First");
}
