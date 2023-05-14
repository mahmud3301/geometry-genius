// Generate pin btn events and show pin
document.getElementById('generate-btn').addEventListener('click', function(){
    const pin =  generatePin();
    const pinLength = pin + '';
    const inputField = document.getElementById('display-pin');
    if(pinLength.length === 4){
        inputField.value = pin;
    }
    else{
        generatePin();
    }
})
// input number to matching pin
document.getElementById('calc-body').addEventListener('click', function(e){
    const numbers = e.target.innerText;
    const inputField = document.getElementById('calc-display');
    const newInputNumber = inputField.value + numbers;
    if(isNaN(numbers)){
        if(numbers === 'C'){
            inputField.value = '';
        }
        else if(numbers === '<'){
            const digits = inputField.value.split('');
            digits.pop();
            const newDigits = digits.join('');
            inputField.value = newDigits;
        }
    }
    else{
        inputField.value = newInputNumber;
    }
})
// submit button events
document.getElementById('btn-submit').addEventListener('click', function(){
    pinMatching('display-pin', 'calc-display');
})