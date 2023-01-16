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
var btnHighScores = document.querySelector('#btnscores');
var nameInput = document.querySelector('#name');
var btnSubmitScore = document.querySelector('#Submit-score');
var scoreListEl = document.querySelector('#scoreList')
var container3 = document.querySelector('.high-score');

var loseCounter = 0;
var winCounter = 0;
var secondsLeft = 70;
var timerCount;
var timer;
var hi;
var higscoreList = [];


//began test
function beganTest() {
    containerEL.style.display = 'flex'
    container3.style.display = 'none';
    scoreEL.style.display = "none";
    buttonR.disabled = true;
    btnHighScores.disabled = true;
    btnSubmitScore.disabled = false;
       btnSubmitScore.textContent = 'submit'

    title.innerHTML = 'Good luck'
    timerCount = 5;

    setTime()
    an()

}
//set timer
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
            btnHighScores.disabled = false;
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
//questions
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
            winCounter += 1;
            WorC.style.color = "green";
        }
        else {
            console.log("wrong2");
            WorC.textContent = "INCORRECT";
            WorC.style.color = "red";
            loseCounter += 1;
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

function init() {
    container3.style.display = 'none';
    scoreEL.style.display = "none";
    var storedplayers = JSON.parse(localStorage.getItem('players'))
   if (storedplayers !== null){
    higscoreList = storedplayers;
   }
renderTohighscore()

}


//scoreboard
function renderTohighscore(){
    scoreListEl.innerHTML = "";
    container3.style.display = 'flex'
    containerEL.style.display = "none"
    scoreEL.style.display = 'none'
    
    for (var i = 0; i < higscoreList.length; i++){
        var higscoreL = higscoreList[i];
        var li = document.createElement('li');
        li.textContent = higscoreL;
        li.setAttribute('class', i);
        scoreListEl.appendChild(li)
        
    }

}
function scoreboard() {
    btnHighScores.style.display = false;
    containerEL.style.display = "none"
    scoreEL.style.display = "flex"
    win.innerHTML = winCounter
    lose.innerHTML = loseCounter
    
}

//btn event listeners

buttonR.addEventListener('click', beganTest);
btnHighScores.addEventListener('click', renderTohighscore)
btnSubmitScore.addEventListener('click',function(event){
   
   
    event.preventDefault();
   
    // var user = nameInput.value.trim()
    var name = document.querySelector('#name').value.trim();
    
    if (name === "" ){
        alert("please enter a name and make sure its less then 7 char")
        return
    }else{
        name = (name +" "+ loseCounter+ "/4" );
        localStorage.setItem('name', name);
        localStorage.setItem('loss',loseCounter);
        localStorage.setItem('correct',winCounter)
        higscoreList.push(name);
       storeList()
       btnSubmitScore.disabled = true;
       btnSubmitScore.textContent = 'uploaded'

        // renderTohighscore()
    }
} )
function storeList(){
    localStorage.setItem('players', JSON.stringify(higscoreList))
}
// btnHighScores.addEventListener('click',Showhighscore)
navbar.style.textAlign = 'center'
init()
