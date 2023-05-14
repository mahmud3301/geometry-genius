function generatePin(){
    const pin = Math.round(Math.random()*10000);
    return pin;
}
function pinMatching(generatePin, userInput){
    const generatePinValue = document.getElementById(generatePin).value;
    const userInputValue = document.getElementById(userInput).value;
    const correctMsg = document.getElementById('correct-msg');
    const inCorrectMsg = document.getElementById('incorrect-msg');
    if(generatePinValue === userInputValue){
        if(userInputValue === ''){
            correctMsg.style.display = 'none';
            inCorrectMsg.style.display = 'none';
        }
        else{
            correctMsg.style.display = 'block';
            inCorrectMsg.style.display = 'none';
        }
    }
    else{
        correctMsg.style.display = 'none';
        inCorrectMsg.style.display = 'block';
    }
}