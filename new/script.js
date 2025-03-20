let numS;
let numM;
let shouldExit = true;
while (isRunning){
  numS = prompt("Enter first numner: ");
  numM = prompt("Enter second numner: ");

  if (numS.toLowerCase() == 'exit' || numM.toLowerCase() == 'exit'){
    break;
  }

  const num1 = parseInt(numS);
  const num2 = parseInt(numM);

  if (typeof num1 !== 'number' || typeof num2 !== 'number'){
    console.log("Invalid inout, please type numbers");
    console.log();
  } else{
    const total = num1 + num2;
    console.log('Total = ${total}');
    console.log();
  
  }
}
