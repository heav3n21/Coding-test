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

//var for java
var secondsLeft = 70;





//began test
function beganTest(){
    buttonR.disabled = true;
    secondsLeft 
   title.innerHTML = 'Good luck'
   setTime();
   

}
//function to replace 
function replaceContent(a,b,c,d,e){
    questionEl.textContent = a;
    answer1El.textContent = b;
    answer2El.textContent = c;
    answer3El.textContent = d;
    answer4El.textContent = e

} 
//timer for test
function setTime(){var timeInterval = setInterval(function(){
    secondsLeft--;
    timeTest.textContent = secondsLeft

if (secondsLeft === 0){
   clearInterval(timeInterval)
   title.textContent = "YOU LOST"
   buttonR.disabled = false;
   secondsLeft = 70;
   timeTest.textContent = 5;
}




},1000)

}
answerBoxEl.addEventListener('click', function(event){
    console.log(event.target)
    return event
})

buttonR.addEventListener('click', beganTest);

navbar.style.textAlign = 'center'
//functions for questions 
function question2(){
    questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
    answer1El.textContent = "1. JavaScript"
answer2El.textContent = "2. terimal/bash"

}

function question3(){}

function question4(){}


console.log(this)

