let secretNumber=Math.floor(Math.random()*100)+1;
let guessCount=0;

function checkGuess(){
    const userGuess=Number(document.getElementById("guessInput").value);
    const message= document.getElementById("message");
    const attempt= document.getElementById("attempt");

    guessCount++;
    if(userGuess>secretNumber){
        message.textContent="Too high! Try Again";
    }else if(userGuess<secretNumber){
        message.textContent="Too Low! Try Again";
    }else{
        message.textContent=`Correct!You gussed it in ${guessCount}tries`
    }
    attempt.textContent=`Guesses:${guessCount}`;
}
