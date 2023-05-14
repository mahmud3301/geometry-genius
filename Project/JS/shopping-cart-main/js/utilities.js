// find input number function
function updateQuantityNumber(isIncrease, inputId){
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const inputNumber = parseInt(inputString);
    let newQuantity;
    if(isIncrease === true){
        newQuantity = inputNumber + 1;
    }
    else{
        if(inputNumber > 0){
            newQuantity = inputNumber - 1;
        }
        else{
            return;
        }
    }
    input.value = newQuantity;
    return newQuantity;
}

// value set function 
function setInnerText(setId, newValue){
    const innerText = document.getElementById(setId);
    if(isNaN(newValue)){
        innerText.innerText = 0;
    }
    else{
            innerText.innerText = newValue;
    }
}

// find Inner Text Number
function getInnerTextNumber(id){
    const getText = document.getElementById(id);
    const innerNumber = parseInt(getText.innerText);
    return innerNumber;
}

// set amount commont function
function calculateTotalAmount(){
    const phoneTotal = getInnerTextNumber('iphone11-price');
    const caseTotal = getInnerTextNumber('case-price');
    const subTotalPrice = phoneTotal + caseTotal;
    setInnerText('product-sub-total', subTotalPrice);
    const taxAmountString = (subTotalPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setInnerText('product-tax-amount', taxAmount);
    const totalPrice = subTotalPrice + taxAmount;
    setInnerText('product-total-price', totalPrice);
}