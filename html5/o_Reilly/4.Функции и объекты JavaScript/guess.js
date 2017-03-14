

function checkGuess(guess) {
    var answers = ["red",
        "green",
        "blue",];

    var index = Math.random() * answers.length;

    if (guess == answers[index]) {
        answers = "You're right! I was thinking of " + answers[index];
    } else {
        answers = "Sorry, I was thinking of " + answers[index];
    }

    return answers;
}

console.log(checkGuess("red"));