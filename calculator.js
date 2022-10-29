//This is JS calculator for the Zuri Assignment
console.log("WELCOME TO  THE JAVSCRIPT CALCULATO!")

const addition = () => {
  const data = prompt("Enter the numbers you wish to add seperated by commas followed by space!");
  const d = data.split();
  console.log(data);  
  console.log(d)
  
}

console.log("1- Addition, 2- Subtraction, 3- Division, 4-Multiplication, 5- Modulus Operation")

//This function request what operation the user wants to carry out
const whatOperation = function (){
  const option = Number(prompt("Which Operation would you like to perfor?"));
  
  return Number(option)
}

whatOperation()  // Calling the function
//const options = [1, 2, 3, 4, 5]

//Checking if the operation choosen is valid!
// while (!options.includes(option)){
//   console.log("Invalid Entry!")
//   whatOperation()
// }

switch (option){
  case 1: addition();
  case 2: subtraction();
  case 3: division();
  case 4: multiplication();
  case 5: modulus();
  default: {
    console.log("Invalid Entry!");
    whatOperation()    
  };
    break
}
