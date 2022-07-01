var startBtn = document.querySelector('#start-button') //start button element

var answer1El = document.getElementById('answer1'); //answer 1 element
var answer2El = document.getElementById('answer2'); //answer 2 element
var answer3El = document.getElementById('answer3'); //answer 3 element
var answer4El = document.getElementById('answer4'); //answer 4 element


// hidden answers
answer1El.style.display = 'none';
answer2El.style.display = 'none';
answer3El.style.display = 'none';
answer4El.style.display = 'none';





startBtn.addEventListener('click', function() {
    console.log('it clicks')
}
)