//Click Event Handler for Calculate Button
document
    .getElementById("calculate-button")
    .addEventListener("click", function() {
        const playerMoney = playerTotalAmount().toFixed(2);

        const playerTotalMoney = document.getElementById("player-total-money");
        playerTotalMoney.innerText = playerMoney;
    });

//Click Event Handler for Calculate Total Button
document
    .getElementById("total-calculate-button")
    .addEventListener("click", function() {
        const playerMoney = playerTotalAmount();

        const managerMoney = InputFieldValue("input-manager-money");

        const coachMoney = InputFieldValue("input-coach-money");

        const totalMoney = (playerMoney + coachMoney + managerMoney).toFixed(2);

        const totalCalculationMoney = document.getElementById(
            "total-calculation-money"
        );
        totalCalculationMoney.innerText = totalMoney;
        const makeEmptyPerPlayerField = makeEmptyInputField(
            "input-per-player-money"
        );
        const makeEmptyManagerField = makeEmptyInputField("input-manager-money");
        const makeEmptyCoachField = makeEmptyInputField("input-coach-money");
    });