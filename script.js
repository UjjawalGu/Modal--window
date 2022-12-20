'use strict';
let secret = Math.trunc(Math.random()*20)+1;
let score = 20;
//document.querySelector('.secret').textContent=secret;

document.querySelector('.Submit').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);

    console.log(guess ,typeof guess);

    if(!guess){
        document.querySelector('.value').textContent= 'No number';
    }
    else if(guess===secret){
        document.querySelector('.value').textContent= 'Correct Number';
        document.querySelector('.secret').textContent=secret;
        document.querySelector('.high-score').textContent=score;
        

    }
    else if(guess>secret){
        document.querySelector('.value').textContent= 'Too High!';
score--;
document.querySelector('.score').textContent=score;
    }
    else if(guess<secret){
        document.querySelector('.value').textContent= 'Too low!';
    score--;
    document.querySelector('.score').textContent= score;
    }
     
});

console.log("secret"); 



