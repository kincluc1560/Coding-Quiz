var time = $('#float-right');
var display = $('#display');
var linebreak = $("<hr>");
var header = $('<h1>');
var p = $('<p>');

start();

function start() {
    header.text('Coding Quiz Challenge');
    p.text('Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!');
    var startBtn = $('<button>');
    startBtn.addClass('button');
    startBtn.text("Start Quiz");
    var ans1 = $('<button>');
    var ans2 = $('<button>');
    var ans3 = $('<button>');
    var ans4 = $('<button>');
    var timeLeft = 75;

    display.append(header);
    display.append(p);
    display.append(startBtn);

    startBtn.on('click', function () {
        setInterval(function() {
            if(timeLeft < 0) {
                window.location.href='./highscores.html';
            }
            time.text('Time: ' + (timeLeft));
            timeLeft -= 1;
        }, 1000);
        question1();
    });

    function question1() {
        document.getElementById("display").style.textAlign = "left";
        header.text('Commonly used data types DO NOT include:');
        p.remove();
        startBtn.remove();

        ans1.text('1. strings');
        ans2.text('2. booleans');
        ans3.text('3. alerts');
        ans4.text('4. numbers');
        display.append(ans1);
        display.append(ans2);
        display.append(ans3);
        display.append(ans4);

        ans1.on('click', function() {
            timeLeft -= 10;
            question2();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans2.on('click', function() {
            timeLeft -= 10;
            question2();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans3.on('click', function() {
            question2();
            display.append(linebreak);
            display.append(p);
            p.text("Correct!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans4.on('click', function() {
            timeLeft -= 10;
            question2();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });
    }

    function question2() {
        header.text('The condition in an if / else statement is enclosed within _____.');
        ans1.text('1. quotes');
        ans2.text('2. curly brackets');
        ans3.text('3. parenthesis');
        ans4.text('4. square brackets');

        ans1.on('click', function() {
            timeLeft -= 10;
            question3();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans2.on('click', function() {
            timeLeft -= 10;
            question3();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans3.on('click', function() {
            question3();
            display.append(linebreak);
            display.append(p);
            p.text("Correct!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans4.on('click', function() {
            timeLeft -= 10;
            question3();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });
    }
}

