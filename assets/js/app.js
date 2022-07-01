var startBtn = document.querySelector('#start-button') //start button element

var answer1El = document.getElementById('answer1'); //answer 1 element
var answer2El = document.getElementById('answer2'); //answer 2 element
var answer3El = document.getElementById('answer3'); //answer 3 element
var answer4El = document.getElementById('answer4'); //answer 4 element
var htmlTimeEl = document.getElementById(countdownTime); //shows the countdown in the HTML
var countdownTime = 60; //time the countdown starts with


// hidden answers
answer1El.style.display = 'none';
answer2El.style.display = 'none';
answer3El.style.display = 'none';
answer4El.style.display = 'none';

var questions = {
    correct: {
        0 : 'The "split" method splits a string into what?'; // button - 0
        1 : 'A "for loop" consists of how many parts?'; // button - 2
        2 : 'Which window pop-up are you able to type in?'; //button - 1
        3 : 'What is NOT considered a primitive data type?'; //button - 
    }
}

var answers = {
    answers: {
        0 : {
            0: 'Arrays',
            1: 'Boolean statements',
            2: 'Smaller Strings',
            3: 'Special Characters'},
        1 : {
            0: 'One',
            1: 'Two',
            2: 'Three',
            3: 'Four'},
        2 : {
            0: 'Alert',
            1: 'Promt',
            2: 'Confirm',
            3: 'Advertisement'},
        3 : {
            0: 'Boolean',
            1: 'Variable',
            2: 'String',
            3: 'Number'},
        }

    }

startBtn.addEventListener('click', function() {
    console.log('it clicks')
}
)