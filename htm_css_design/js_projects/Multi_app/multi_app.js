
// create random numbers between (0,10)
// Also, make integer
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const CorrectAns = num1 * num2;

// update score value in local storage
// 'parse' to convert string into number
// make it 'let', so it can change

let score = JSON.parse(localStorage.getItem("score")); 

// if there is no score
if (!score){
    score=0;
}


//get elements from html
const scoreEl = document.querySelector('#score');
const questionEl = document.querySelector('#question');
const inputEl = document.querySelector('#input');
const formEl = document.querySelector('#form');

//display
questionEl.textContent = `What is ${num1} multiply ${num2} ?`;
scoreEl.textContent = `score: ${score}`;

//take input when clicking
formEl.addEventListener("submit", ()=> {

    const userAns = +inputEl.value ;// adding '+', to convert the string value into number
    

    //check
    if (userAns === CorrectAns) {
        //increase score
        score++;
        UpdateLocalStorage();
    }
    else{
        //decrease score
        score--;
        UpdateLocalStorage();
    }
    

});


//to prevent website from refreshing and the score be always = 0
//we shoul create 'localstorage' and store the score.

function UpdateLocalStorage() {

    //set variable name in localstorage = 'score'
    //Also, the browser will not allow you to store numbers,
    //so you should convert it into strings for security purposes by using 'json.stringify'
    localStorage.setItem("score", JSON.stringify(score));
};

// clear local storage when opening browser
localStorage.clear();












