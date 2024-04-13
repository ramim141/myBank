function handleDeposit() {
    var inputvalue = document.getElementById("deposit-input").value;
    var convertedInputValue = convertToNumber(inputvalue);

    var depositAmount = document.getElementById("deposit-Amount").innerText;
    var convertedDepositAmount = convertToNumber(depositAmount);

    var sum = convertedInputValue + convertedDepositAmount;

    document.getElementById("deposit-Amount").innerText = sum;

    updateTotal(sum);

    // Clear input field
    document.getElementById("deposit-input").value = "";
}

function handleWithdraw() {
    var inputWithdraw = document.getElementById("withdraw-input").value;
    var convertedInputWithdraw = convertToNumber(inputWithdraw);

    var withdrawAmount = document.getElementById("withdraw-Amount").innerText;
    var convertedWithdrawAmount = convertToNumber(withdrawAmount);

    var totalAmount = document.getElementById("Total-amount").innerText;
    var convertedTotalAmount = convertToNumber(totalAmount);

    if (convertedInputWithdraw > convertedTotalAmount) {
        alert("You have insufficient balance!");
        return;
    }

    var sum = convertedInputWithdraw + convertedWithdrawAmount;

    document.getElementById("withdraw-Amount").innerText = sum;

    updateTotal(-convertedInputWithdraw);

    // Clear input field
    document.getElementById("withdraw-input").value = "";
}

function convertToNumber(value) {
    return parseFloat(value) || 0; // Convert to number or default to 0 if not a valid number
}

function updateTotal(amount) {
    var totalAmountElement = document.getElementById("Total-amount");
    var totalAmount = convertToNumber(totalAmountElement.innerText);

    totalAmount += amount;

    document.getElementById("Total-amount").innerText = totalAmount;
}
