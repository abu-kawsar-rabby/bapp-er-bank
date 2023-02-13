function getInputValueById(inputId) {

    const userInputElement = document.getElementById(inputId);
    const userInputValueString = userInputElement.value;
    if (userInputValueString === "") {
        alert("You Can't use emply Value!");
        return 0;
    }

    // clear deposit input field------- 
    userInputElement.value = '';

    if (isNaN(userInputValueString)) {
        alert('please input a number');
        return false;
    }
    else {
        const userInputValue = parseFloat(userInputValueString);

        if (userInputValue < 0) {
            alert("You Can't use Negative Value!");
            return false;
        }
        return userInputValue;
    }
}
// function to update innertext
function getTextValueById(inputId) {
    const textValueElement = document.getElementById(inputId);
    const textValueString = textValueElement.innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}
function setTextValueById(elementId, newValue) {
    const setTextValue = document.getElementById(elementId);
    setTextValue.innerText = newValue;
}


/*
deposit section
*/
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositInput = getInputValueById('deposit-input');
    const previousTotalDeposit = getTextValueById('total-deposit');
    const currentBalance = getTextValueById('current-balance');

    const currentTotalDeposit = newDepositInput + previousTotalDeposit;
    const currentTotalBalance = currentBalance + newDepositInput;

    setTextValueById('total-deposit', currentTotalDeposit);
    setTextValueById('current-balance', currentTotalBalance);
})



/* 
withdraw section
*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawInput = getInputValueById('withdraw-input');
    const previousTotalWithdraw = getTextValueById('total-withdraw');
    const currentBalance = getTextValueById('current-balance');


    const currentTotalWithdraw = previousTotalWithdraw + newWithdrawInput;
    const currentTotalBalance = currentBalance - newWithdrawInput;

    if (currentBalance < newWithdrawInput) {
        alert("You Don't have enough Balance for withdraw.");
        return;
    }

    setTextValueById('total-withdraw', currentTotalWithdraw);
    setTextValueById('current-balance', currentTotalBalance);
})
