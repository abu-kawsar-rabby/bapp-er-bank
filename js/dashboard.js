/* 
deposit section
*/
document.getElementById('deposit-btn').addEventListener('click', function(){


    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountString = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // deposit total update------

    const depositTotalElement = document.getElementById('deposit-total');
    const prevDepositTotalString = depositTotalElement.innerText;
    console.log(prevDepositTotalString);
    const prevDepositTotal = parseFloat(prevDepositTotalString);

    const currentTotalDeposit = prevDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentTotalDeposit;

    // clear deposit input field------- 
    depositInput.value = '';

    // current balance update--------

    const currentBalanceElement = document.getElementById('current-balance');
    const currentBalanceString = currentBalanceElement.innerText;
    const currentBalance = parseFloat(currentBalanceString);
    
 
    currentBalanceElement.innerText = currentBalance + newDepositAmount;
})

/* 
withdraw section
*/

document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get the input as a number--
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // total withdraw update

    const prevWithdrawElement = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = prevWithdrawElement.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);

    prevWithdrawElement.innerText = prevWithdrawTotal + newWithdrawAmount;

    // current total balance update 
    const currentBalanceElement = document.getElementById('current-balance');
    const currentBalanceString = currentBalanceElement.innerText;
    const currentBalance = parseFloat(currentBalanceString);
    console.log(currentBalance)
    

    currentBalanceElement.innerText = currentBalance - newWithdrawAmount;

    // clear the field
    withdrawInput.value ="";

})
