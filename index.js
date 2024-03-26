#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let pin = 4096;
async function actions() {
    let selection = await inquirer.prompt({
        name: "action",
        type: "list",
        choices: ["Check balance", "Withdraw"],
        message: "What do you want to do?"
    });
    if (selection.action == "Check balance") {
        console.log(`Your account balance: ${balance}`);
    }
    else {
        let withdrawel = await inquirer.prompt({
            name: "withdrawelAmount",
            type: "number",
            message: "How much do you want to withdraw?"
        });
        if (balance >= withdrawel.withdrawelAmount) {
            balance -= withdrawel.withdrawelAmount;
        }
        else {
            console.log("Insufficent balance.");
        }
        ;
        console.log(`Your balance is: ${balance}`);
    }
    ;
}
;
let authentication = await inquirer.prompt({
    name: "enteredPin",
    type: "number",
    message: "Enter your Pin"
});
if (authentication.enteredPin == pin) {
    actions();
}
else {
    console.log("Incorrect Pin.");
}
;
