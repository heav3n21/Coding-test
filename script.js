//document var from dom
var navbar = document.querySelector('.navBar');
var buttonR = document.querySelector('#btnScript');
var title = document.querySelector('.title')
var timeTest = document.querySelector('#Time');
var answer1El = document.querySelector('#li1')
var answer2El = document.querySelector('#li2')
var answer3El = document.querySelector('#li3')
var answer4El = document.querySelector('#li4')
var questionEl = document.querySelector('#question')
var containerEL = document.querySelector('.container')
var answerBoxEl = document.querySelector('#answerBox')
var win = document.querySelector('.win');
var lose = document.querySelector('.loss');
var Rightanswer;
var scoreEL = document.querySelector('#container2');
var WorC = document.querySelector('.WorR');
var btnHighScores = document.querySelector('btnScores');
var nameInput = document.querySelector('#name');
var btnSubmitScore = document.querySelector('#Submit-score');

var loseCounter = 0;
var winCounter = 0;
var secondsLeft = 70;
var timerCount;
var timer;
var hi;








//var for java




//began test
function beganTest() {
    buttonR.disabled = true;
    title.innerHTML = 'Good luck'
    timerCount = 75;

    setTime()
    an()

}

function d() {
    console.log(timerCount)
}

function setTime() {

    var time = setInterval(function () {
        timerCount--;
        timeTest.textContent = timerCount

        if (timerCount === 65) {
            question2()

        }
        if (timerCount === 55) {
            question3()
        }
        if (timerCount === 45) {
            question4()
        }

        else if (timerCount === 0) {
            clearInterval(time)
            title.textContent = "YOU LOST"
            buttonR.disabled = false;
            secondsLeft = 70;
            timeTest.textContent = 5;
            scoreboard()
            setlosses()
            
        }



    }, 1000)



}
//timer for test
function an() {
    answerBoxEl.addEventListener('click', function (event) {
        hi = event.target.id
        console.log(hi);


    })
}


//functions for questions 
function question2() {

    questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    answer1El.textContent = "1. JavaScript";
    answer2El.textContent = "2. terimal/bash";
    answer3El.textContent = "3. for loops ";
    answer4El.textContent = "4. console.log";

    console.log(hi);
    console.log(typeof timerCount)
    setTimeout(()=> {
        if (hi == "li4") {
            console.log('correct2')
            WorC.textContent = "CORRECT";
            WorC.style.color = "green";
        }
        else {
            console.log("wrong2");
            WorC.textContent = "INCORRECT";
            WorC.style.color = "red";
        }
},10000)

}

function question3() {
    questionEl.textContent = "String values must be enclosed within ___ when being assigned to vaiables";
    answer1El.textContent = "1. commas";
    answer2El.textContent = "2. curly brackets";
    answer3El.textContent = "3. qoutes";
    answer4El.textContent = "4. parenthesis";
    setTimeout(()=> {

    if (hi == "li3") {
        console.log('correct3')
        WorC.textContent = "CORRECT";
        WorC.style.color = "green";
        winCounter += 1;
    }
    else {
        console.log("wrong3");
        WorC.textContent = "INCORRECT";
        WorC.style.color = "red";
        loseCounter += 1;
    }
},10000)

}

function question4() {
    questionEl.textContent = "THe condition in an if / else statement is enclosed with ___.";
    answer1El.textContent = "1. qoutes";
    answer2El.textContent = "2. curly brackets";
    answer3El.textContent = "3. parenthesis";
    answer4El.textContent = "4. square brackets";
    setTimeout(()=> {
    if (hi == "li1") {
        console.log('correct4')
        WorC.textContent = "CORRECT";
        WorC.style.color = "green";
        winCounter += 1;
    }
    else {
        console.log("wrong4");
        WorC.textContent = "INCORRECT";
        WorC.style.color = "red";
       loseCounter+= 1;
    }
},10000)
}

//setwins and losses
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem('winCount', winCounter);
}
function setlosses() {
    lose.textContent = loseCounter;
    localStorage.setItem('loseCount', loseCounter);
}
//wins and losses
function getWins() {
    var storedWins = localStorage.getItem('winCount')
    if (storedWins === null) {
        winCounter = 0;
    } else {
        winCounter = storedWins;
    }
    winCounter.textContent = winCounter;
}
function getLosses() {
    var storedLosses = localStorage.getItem('loseCount');
    if (storedLosses === null) {
        loseCounter = 0;

    } else {
        loseCounter = storedLosses;
    }
    loseCounter.textContent = loseCounter;
}
function init() {
    scoreEL.style.display = "none "
}


//scoreboard
function scoreboard() {
    containerEL.style.display = "none"
    scoreEL.style.display = "flex"
    win.innerHTML = winCounter
lose.innerHTML = loseCounter
  
}


buttonR.addEventListener('click', beganTest);
btnSubmitScore.addEventListener('click',function(event){
    event.preventDefault();
    
} )
// btnHighScores.addEventListener('click',Showhighscore)
navbar.style.textAlign = 'center'
// init()
