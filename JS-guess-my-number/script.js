'use strict';


// generating the random values for the game logic that start from 1 to 20. the random generator function can only generate values starting from (0 to 19.9999... )

let randomNumber= (Math.round(Math.random()*20)+1);
let score=20;

//tried implementing the offline highscore function to no avail.
let highscore = function Highscore(){
   let getHighscore= window.sessionStorage.getItem('highscore') 
   return Number(getHighscore)                
    
} //

const GameLogic=()=>{
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    console.log('random:',randomNumber, typeof randomNumber)
    //check if there is an input
    if (!guess){
              document.querySelector('.message').textContent="Kindly enter a value";
              console.log('There is no value')

              //when the player guesses the correct number 
            }else if(guess===randomNumber) {
                document.querySelector('.message').textContent="Congratulations. You have got it right. ";
                document.querySelector('body').style.backgroundColor='green';
               
                //further implementation of the offline highscore function.correction needed.
                if(score>highscore){
                    highscore=score
                    window.sessionStorage.setItem('highscore',JSON.stringify(highscore));  
                    document.querySelector('.highscore').textContent=highscore
                }
               // 
           //when guess is high or low
            }else if(guess!==randomNumber){
                if(score>1){
                    document.querySelector('.message').textContent= guess>randomNumber?"Too high. Try again...":"Too low. Try again..."
                    score--;
                    document.querySelector('.score').textContent=`${score}`;
                    }else{document.querySelector('.message').textContent="Game Over"
                    document.querySelector('.score').textContent=0}
              

            }
}; 
//user interaction
document.querySelector(".check").addEventListener('click',GameLogic);

document.querySelector('.again').addEventListener('click',function () {
  // window.
  location.reload()
    
})

