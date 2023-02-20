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
    var ansC = $('<button>');
    var timeLeft = 75;
    var question = 1;
    var gameOver = false;

    display.append(header);
    display.append(p);
    display.append(startBtn);

    startBtn.on('click', function () {
        setInterval(function() {
            if(timeLeft < 0) {
                window.location.href='./highscores.html';
            }
            time.text('Time: ' + (timeLeft));
            if(!gameOver) {
                timeLeft -= 1;
            }
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
        ansC.text('3. alerts');
        ans3.text('4. numbers');

        display.append(ans1);
        display.append(ans2);
        display.append(ansC);
        display.append(ans3);

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

        ansC.on('click', function() {
            question2();
            display.append(linebreak);
            display.append(p);
            p.text("Correct!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans3.on('click', function() {
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
        ansC.text('3. parenthesis');
        ans3.text('4. square brackets');

        ans1.on('click', function() {
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
            question3();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ansC.on('click', function() {
            question3();
            display.append(linebreak);
            display.append(p);
            p.text("Correct!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans3.on('click', function() {
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

    function question3() {
        header.text('Arrays in JavaScript can be used to store _____.');
        ansC.remove();
        display.append(ansC);
        ans1.text('1. numbers and strings');
        ans2.text('2. other arrays');
        ans3.text('3. booleans');
        ansC.text('4. all of the above');

        ans1.on('click', function() {
            question4();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans2.on('click', function() {
            question4();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans3.on('click', function() {
            question4();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ansC.on('click', function(event) {
            question4();
            display.append(linebreak);
            display.append(p);
            p.text("Correct!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });
    }

    function question4() {
        header.text('String values must be enclosed within _____ when being assigned to variables.');
        ans3.remove();
        display.append(ans3);
        ans1.text('1. commas');
        ans2.text('2. curly brackets');
        ansC.text('3. quotes');
        ans3.text('4. parenthesis');

        ans1.on('click', function() {
            question5();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans2.on('click', function() {
            question5();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ansC.on('click', function() {
            question5();
            display.append(linebreak);
            display.append(p);
            p.text("Correct!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans3.on('click', function() {
            question5();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });
    }

    function question5() {
        header.text('A very useful tool used during development and debugging for printing content to the debugger is:');
        ansC.remove();
        display.append(ansC);
        ans1.text('1. JavaScript');
        ans2.text('2. terminal / bash');
        ans3.text('3. for loops');
        ansC.text('4. console.log');

        ans1.on('click', function() {
            gameOver = true;
            saveScore();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans2.on('click', function() {
            gameOver = true;
            saveScore();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ans3.on('click', function() {
            gameOver = true;
            saveScore();
            display.append(linebreak);
            display.append(p);
            p.text("Wrong!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });

        ansC.on('click', function() {
            gameOver = true;
            saveScore();
            display.append(linebreak);
            display.append(p);
            p.text("Correct!");
            setInterval(function() {
                linebreak.remove();
                p.remove();
            }, 5000);
        });
    }

    function saveScore() {
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ansC.remove();
        time.text("Time: " + timeLeft);
        header.text("All done!");
        var initals = $('<input>');
        var submit = $('<button>');
        submit.addClass('button');
        submit.text('Submit');
        display.append($('<p>').text('Your final score is ' + timeLeft + '.'));
        display.append($('<p>').text('Enter initals: ').addClass('init'));
        display.append(initals);
        display.append(submit);
        submit.on('click', function() {
            console.log('Initials: ', initals.val());
            window.location.href='./highscores.html';
            highScores();
        });
    }
}

function highScores() {}