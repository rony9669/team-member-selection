//Function for selecting favourite member and make a order list item.

function memberList(playerId) {
    let temp = document.getElementById("list-id");
    let tempLength = temp.children.length;

    if (tempLength < 5) {
        let list = document.getElementById("list-id");
        let firstName = document.getElementById(playerId).innerText;
        let entry = document.createElement("li");
        entry.appendChild(document.createTextNode(firstName));
        let lastResult = list.appendChild(entry);
    } else {
        alert("You can select maximum 5 member");
    }
}

//Function for disabling a button
let count = 0;

function disableButton(btn) {
    let totalCount = count++;
    if (totalCount < 5) {
        const buttonId = document.getElementById(btn.id);
        const buttonDisable = (buttonId.disabled = true);
        buttonId.style.backgroundColor = "red";
        buttonId.innerText = "SELECTED";
    } else {
        document.getElementById(btn.id).disabled = false;
    }

    console.log(count);
}

//Function for read input field value

function InputFieldValue(InputFieldId) {
    const money = document.getElementById(InputFieldId);
    const moneyInString = money.value;
    const moneyInNumber = parseFloat(moneyInString);

    if (Math.sign(moneyInNumber) === -1) {
        alert("Input Value can not be negative");

        return;
    }

    return moneyInNumber;
}

//Function for getting player total cost

function playerTotalAmount() {
    const perPlayerMoney = InputFieldValue("input-per-player-money");

    let temp = document.getElementById("list-id");
    let tempLength = temp.children.length;

    const playerMoney = perPlayerMoney * tempLength;
    return playerMoney;
}

function makeEmptyInputField(inputId) {
    const emptyField = (document.getElementById(inputId).value = "");
    return emptyField;
}