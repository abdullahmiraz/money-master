function getInputFieldValueById(inputId) {
    return parseFloat(document.getElementById(inputId).value);
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = (getInputFieldValueById('income-input'));

    const foodExpense = (getInputFieldValueById('food-expense'));
    const rentExpense = (getInputFieldValueById('rent-expense'));
    const clothesExpense = (getInputFieldValueById('clothes-expense'));
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    document.getElementById('total-expense-amount').innerText = totalExpense;

    const currentBalance = incomeInput - totalExpense;

    const totalBalanceNow = document.getElementById('total-balance-amount').innerText;
    if (totalBalanceNow >= 0 && !isNaN(totalBalanceNow)) {
        document.getElementById('total-balance-amount').innerText = currentBalance;
    }


})

document.getElementById('save-btn').addEventListener('click', function () {
    const incomeInput = (getInputFieldValueById('income-input'));
    const savingAmount = incomeInput * (getInputFieldValueById('save-input') / 100);
    if (!isNaN(savingAmount)) {
        document.getElementById('saving-amount').innerText = savingAmount.toFixed(2);
    }

    const totalBalanceAmount = document.getElementById('total-balance-amount').innerText;
    if (isNaN(totalBalanceAmount) || totalBalanceAmount <= 0) {
        alert("invalid input"); return;
    } else {
        document.getElementById('remain-balance').innerText = (totalBalanceAmount - savingAmount).toFixed(2);
    }

})