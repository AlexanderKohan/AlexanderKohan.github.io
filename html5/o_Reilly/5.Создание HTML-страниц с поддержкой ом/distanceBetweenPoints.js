/**
 * Created by Alexander on 15.03.2017.
 */

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