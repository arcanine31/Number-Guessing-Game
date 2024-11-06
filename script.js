// generate random number
let randomNumber = Math.floor(Math.random() * 101);
let correctCounter = 0;

function guessNumber(){
    let guessedNumber = document.getElementById("number-input").value;

    if (guessedNumber == randomNumber) {
        if (correctCounter == 10){
            alert("Congratulations You win");
            correctCounter = 0;
        }else {
            correctCounter++;
            alert("You guess the right number")
            randomNumber = Math.floor(Math.random() * 101);
        }
    } else{
        if (guessedNumber < randomNumber){
            alert("You need to guess higher");
        } else if (guessedNumber > randomNumber){
            alert("You need to guess lower")
        }
    }
    
    
    // alert(randomNumber + " " + guessedNumber);
}