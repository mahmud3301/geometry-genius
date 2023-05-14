// step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    // step 7
    withdrawField.value = '';

    if(isNaN(newWithDrawAmount)){
        alert('Please Provide a number');
        return;
    }
    // step 3
    const withdrawTotalElement = document.getElementById('withDraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    // step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithDrawAmount > previousBalanceTotal){
        alert('Tou don not have money that you want');
        return;
    }

        // step 4
        const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
        withdrawTotalElement.innerText = currentWithdrawTotal;


    // step 6
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})