var time = $('#float-right');
var display = $('#display');
var scores = $('#scores');
var linebreak = $("<hr>");
var bar = $('#bar');
var header = $('<h1>');
var p = $('<p>');
var initals = $('<input>');
var timeLeft = 0;
var count = 0;
var gameOver = true;
var pInitals = [];
var pScores = [];

start();

function start() {
    scores.text("View Highscores");

    scores.on('click', function () {
        highScores();
    });

    document.getElementById("display").style.textAlign = "center";
    timeLeft = 0;
    header.text('Coding Quiz Challenge');
    var info = $('<p>');
    info.text('Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!');
    var startBtn = $('<button>');
    startBtn.addClass('button');
    startBtn.text("Start Quiz");
    var ans1 = $('<button>');
    var ans2 = $('<button>');
    var ans3 = $('<button>');
    var ansC = $('<button>');
    gameOver = true;

    bar.append(scores);
    bar.append(time);
    display.append(header);
    display.append(info);
    display.append(startBtn);

    startBtn.on('click', function () {
        gameOver = false;
        timeLeft = 75;
        setInterval(function() {
            if(timeLeft < 0) {
                highScores();
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
        info.remove();
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
        var submit = $('<button>');
        submit.addClass('button');
        submit.text('Submit');
        display.append($('<p>').text('Your final score is ' + timeLeft + '.'));
        display.append($('<p>').text('Enter initals: ').addClass('init'));
        display.append(initals);
        display.append(submit);
        submit.on('click', function() {
            count++;
            highScores();
        });
    }
}

function highScores() {
    document.getElementById("display").style.textAlign = "left";
    display.empty();
    scores.remove();
    time.remove();
    display.append(header);
    var name = '';
    name += initals.val();
    initals.val('');
    header.text('Highscores');
    if(count > 0) {
        pScores.push(timeLeft);
        pInitals.push(name);
        for(var i = 0; i < count; i++) {
            var score = $('<p>');
            score.text((i+1) + '. ' + pInitals[i] + ' - ' + pScores[i]);
            score.addClass('score');
            display.append(score);
        }
    }
    var quiz = $('<button>');
    var resetScores = $('<button>');
    quiz.addClass('button');
    resetScores.addClass('button');
    quiz.on('click', function() {
        display.empty();
        start();
    });
    resetScores.on('click', function() {
        display.empty();
        count = 0;
        pInitals = [];
        pScores = [];
        highScores();
    });
    quiz.text('Go Back');
    resetScores.text('Clear Highscores');
    display.append(quiz);
    if(count > 0) {
        display.append(resetScores);
    }
}