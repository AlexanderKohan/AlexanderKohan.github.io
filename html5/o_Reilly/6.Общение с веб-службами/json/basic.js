/**
 * Created by Alexander on 17.03.2017.
 */

var plan9Movie = new Movie("Plan 9 from Outer Space", "Cult Classic", 2,
    ["3:00pm", "7:00pm", "11:00pm"]);

var jsonString = JSON.stringify(plan9Movie);
alert(jsonString);

alert(jsonString);

var jsonMovieObject = JSON.parse(jsonString);
alert("JSON Movie is " + jsoriMovieObject.title);