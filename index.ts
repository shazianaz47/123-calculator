#! /usr/bin/env node
import inquirer from "inquirer";

const answere = await inquirer.prompt([
  { massage: "Enter First number", type: "number", name: "firstNumber" },
  { massage: "Enter Second number", type: "number", name: "secondNumber" },
  {
    massage: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statement (if else)
if(answere.operator=== "Addition"){
    console.log(answere.firstNumber + answere.secondNumber);
}else if(answere.operator=== "Subtraction"){
    console.log(answere.firstNumber - answere.secondNumber);
}else if(answere.operator=== "Multiplication"){
    console.log(answere.firstNumber * answere.secondNumber);
}else if (answere.operator=== "Division"){
    console.log(answere.firstNumber / answere.secondNumber);
}else{
    console.log("Please select valid operator")
    }   


