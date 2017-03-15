/**
 * Created by Alexander on 15.03.2017.
 */

var ourCoords = {
    latitude: 47.624851,
    longitude: -122.52099
}

window.onload = getMyLocation;

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError)
    } else {
        alert("Oops no geolocation support")
    }
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var div = document.getElementById("location");
    div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;

    var km = computeDistance(position.coords, ourCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";

    showMap(position.coords);
}

//Диагностика
function displayError(error) {
    var errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    }

    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    var div = document.getElementById("location");
    div.innerHTML = errorMessage;
}

//вычисление
function computeDistance(startCoords, destCoords) {
    var startLadRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);

    var destLadRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);

    var radius = 6371;//радиус Земли в км

    var distance = Math.acos(Math.sin(startLadRads) * Math.sin(destLadRads) +
            Math.cos(startLadRads) * Math.cos(destLadRads) *
            Math.cos(startLongRads - destLongRads)) * radius;

    return distance;
}

function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI) / 180;
    return radians;
}

//google map
var map;

function showMap(coords) {
    var googleLatAndLong = new google.maps.LatLng(latitude, longitude);
    var mapOption = {
        zoom: 10,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOption);
}