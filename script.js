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


var loseCounter = 0;







//var for java
var secondsLeft = 70;




//began test
function beganTest() {
    buttonR.disabled = true;
    secondsLeft
    title.innerHTML = 'Good luck'
  
    
   
    
    setTime()


        function setTime() {

            var timeInterval = setInterval(function () {
                secondsLeft--;
                timeTest.textContent = secondsLeft
                answerBoxEl.addEventListener('click', function (event) {
                    hi = event.target.id
                    console.log(hi);
                    
                    if (secondsLeft === 65) {
                        question2()
    
                    }
                    if (secondsLeft === 60) {
                        question3(hi)
                    }
                    if (secondsLeft === 55) {
                        question4(hi)
                    }
    
                    if (secondsLeft === 0) {
                        clearInterval(timeInterval)
                        title.textContent = "YOU LOST"
                        buttonR.disabled = false;
                        secondsLeft = 70;
                        timeTest.textContent = 5;
                    }
                })



            }, 1000)

        }


   
}

//timer for test


//functions for questions 
function question2(answerBoxEl) {

    questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    answer1El.textContent = "1. JavaScript";
    answer2El.textContent = "2. terimal/bash";
    answer3El.textContent = "3. for loops ";
    answer4El.textContent = "4. console.log";

    console.log(answerBoxEl);

    if (answerBoxEl == "li4") {
        console.log('correct2')
        hi =""
    }
    else {
        console.log("wrong2");
    }


}

function question3() {
    questionEl.textContent = "String values must be enclosed within ___ when being assigned to vaiables";
    answer1El.textContent = "1. commas";
    answer2El.textContent = "2. curly brackets";
    answer3El.textContent = "3. qoutes";
    answer4El.textContent = "4. parenthesis";

    if (answerBoxEl == "li3") {
        console.log('correct3')
    }
    else {
        console.log("wrong3");
    }

}

function question4() {
    questionEl.textContent = "THe condition in an if / else statement is enclosed with ___.";
    answer1El.textContent = "1. qoutes";
    answer2El.textContent = "2. curly brackets";
    answer3El.textContent = "3. parenthesis";
    answer4El.textContent = "4. square brackets";

    if (answerBoxEl == "li1") {
        console.log('correct4')
    }
    else {
        console.log("wrong4");
    }

}


console.log(this)


buttonR.addEventListener('click', beganTest);
navbar.style.textAlign = 'center'
