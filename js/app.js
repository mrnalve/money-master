document.getElementById('calculate').addEventListener('click', () => {
    let incomeValue = parseInt(document.getElementById('income').value);
    let foodValue = parseInt(document.getElementById('food').value);
    let rentValue = parseInt(document.getElementById('rent').value);
    let clothesValue = parseInt(document.getElementById('clothes').value);
    // Total cost of amount
    let totalExpenses = foodValue + rentValue + clothesValue;
    let totalExpensesField = document.getElementById('totalExpensesValue');
    totalExpensesField.innerText = totalExpenses;
    // current balance amount
    let currentBalanceField = document.getElementById('currentBalance');
    currentBalanceField.innerText = incomeValue - totalExpenses;
});

// saving button
document.getElementById('saving').addEventListener('click', () => {
    let incomeValue = parseInt(document.getElementById('income').value);
    // saving amount
    let savingAmountNumber = parseInt(document.getElementById('savingAmountNumber').value)
    let savingAmountField = document.getElementById('savingAmountField');
    savingAmountField.innerText = (savingAmountNumber / 100) * incomeValue;
    // remaining balance
    let currentBalance = parseInt(document.getElementById('currentBalance').innerText);
    let remainingBalance = document.getElementById('remainingBalance');
    remainingBalance.innerText = currentBalance - parseInt(savingAmountField.innerText)
})