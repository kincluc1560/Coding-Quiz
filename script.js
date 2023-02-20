var time = $('#float-right');
var display = $('.display');
var linebreak = $("<br>");
var header = $('<h1>');
var p = $('<p>');

main();

function main() {
    header.text('Coding Quiz Challenge');
    p.text('Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!');
    var startBtn = $('<button>');
    startBtn.text("Start Quiz");

    display.append(header);
    display.append(p);
    display.append(startBtn);
    display.append(startBtn);

    startBtn.on('click', function () {
        var timeLeft = 75;
        var timer = setInterval(function() {
            if(timeLeft < 0) {
                window.location.href='./highscores.html';
            }
            time.text('Time: ' + (timeLeft));
            timeLeft -= 1;
        }, 1000);
        header.text('Question 1');
        p.remove();
        startBtn.remove();
    });
}