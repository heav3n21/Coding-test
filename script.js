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
var Rightanswer;
var UserAnswer = '';

answerBoxEl.addEventListener('click', function(event){
  
    UserAnswer = event.target
    console.log(UserAnswer);
    
    return UserAnswer
})
//var for java
var secondsLeft = 70;

//began test
function beganTest(){
    buttonR.disabled = true;
    secondsLeft 
   title.innerHTML = 'Good luck'
   setTime();
}
//timer for test
function setTime(){var timeInterval = setInterval(function(){
    secondsLeft--;
    timeTest.textContent = secondsLeft
    if (secondsLeft === 65){
        question2()
    }
    if (secondsLeft === 60){
        question3()
    }
    if (secondsLeft === 55){
        question4()
    }

if (secondsLeft === 0){
   clearInterval(timeInterval)
   title.textContent = "YOU LOST"
   buttonR.disabled = false;
   secondsLeft = 70;
   timeTest.textContent = 5;
}

},1000)

}


//functions for questions 
function question2(){
    
    questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    answer1El.textContent = "1. JavaScript";
    answer2El.textContent = "2. terimal/bash";
    answer3El.textContent = "3. for loops ";
    answer4El.textContent = "4. console.log";
  console.log(answerBoxEl);

    
}

function question3(){
    questionEl.textContent = "String values must be enclosed within ___ when being assigned to vaiables";
    answer1El.textContent = "1. commas";
    answer2El.textContent = "2. curly brackets";
    answer3El.textContent = "3. qoutes";
    answer4El.textContent = "4. parenthesis";
}

function question4(){
    questionEl.textContent = "THe condition in an if / else statement is enclosed with ___.";
    answer1El.textContent = "1. qoutes";
    answer2El.textContent = "2. curly brackets";
    answer3El.textContent = "3. parenthesis";
    answer4El.textContent = "4. square brackets";
}


console.log(this)


buttonR.addEventListener('click', beganTest);
navbar.style.textAlign = 'center'