var movie1 = {
    title: "Plan 9 from Outer Space",
    genre: "Cult Classic",
    rating: 5,
    showTimes: ["15:00", "19:00", "23:00"]
}

var movie2 = {
    title: "Forbidden Planet",
    genre: "Classic Sci-fi",
    rating: 5,
    showTimes: ["17:00", "21:00"]
}

function getNextShowing(movie) {
    var now = new Date().getTime();

    for (var i = 0; i < movie.showTimes.length; i++) {
        var showTimes = getTimeFromString(movie.showTimes[i]);
        if ((showTimes - now) > 0) {
            return "Next showing of " + movie.title + " is " + movie.showTimes[i];
        }
    }
    return "Sessions are no longer available today" ;
}

function getTimeFromString(timeString){
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes( parseInt(time[2]) || 0 ) ;
    return theTime.getTime();
}

var nextShowing = getNextShowing(movie1);
console.log(nextShowing);

nextShowing = getNextShowing(movie2);
console.log(nextShowing);