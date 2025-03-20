/*const toggleBtn = document.getElementById("toggle-menu");

function toggleNavigationMenu() {
    const navigationMenu = document.querySelector("aside.left");
    navigationMenu.classList.toggle("hidden");
}

function closeNavigationMenu() {
    const navigationMenu = document.querySelector("aside.left");
    navigationMenu.classList.add("hidden");
}

toggleBtn.onclick = toggleNavigationMenu;



let product = 8*5;
document.writeln(product); */


//loops//
/*for loop*/
//const cars = ['bmw', 'audi', 'benz', 'ferarri', 'audi'];

//for (let index = 0; index < 5; index++){
 // const car = cars[index];
  //document.writeln(car + '<br>');
//}

// while loop
/*let index = 0;
while(index < cars.lenght){
  const car = cars[index];
  document.writeln(car + '<br>');
  index++;
}
document.writeln('Exited<br>');*/

//const content = document.getElementById("content");

//content.style = "background-color: aqua;";

//class Bird {
   // fly(){
    //    console.log("flying")
   // }
//}

//content.textContent = "";
//console.log(content.classList);
//['child', 'content']

//content.className = "hidden";

//content.classList.add("hidden");
//content.classList.remove("hidden");
//content.classList.contains("hidden"); // true or false
//content.classList.toggle(""); // checks then removes or add


//content.style.fontSize = "10px";
//content.style.color = "red";
//const button = document.getElementById("toggle");

//function toggleContent () {
    //content.classList.toggle("hidden");
    //if (content.classListcontains("hidden")){
     //   content.classList.remove("hidden");
   // }
   // else {// class hidden is not present
     //   content.classList.add("hidden");
   // }
//}
//toggleContent(); // calling the function, tell the fucntion to run or execute
//button.onClick = toggleContent;

//console.log("scontent.childNodes");

//content.innerHTML = "<script>alert(bazenga)</script>"
//content.inerHTML = "<p style = ''> lorem lorem";

//content.textContent = 'hello hello hello '
//content

//document.addEventListener("DOMContentLoaded", function(){
   // document.querySelector("nav").onclick = function(){
      //  alerts("(Internl")
  //  }
//})



/////write a program that finds the total of two numbers only exiting when a user inputs'exit'//////
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

