// JavaScript code for Task 1
// Learning Objective 1: use of sub-algorithm (aka function) with zero parameters
// Learning Objective 2: use of Math.random()

function myFunction() {
  var p = document.getElementById("mydata");

  //call a sub-algorithm to return a random number in [0,1)
  var num = generateNum();

 if (num < 0.5)
 {
   document.getElementById("mydata").innerHTML = "HEADS";
 }
 else 
 {
  document.getElementById("mydata").innerHTML = "TAILS";
 }

}

// a sub-algorithm to return a random number
// pre-conditions: none
// post-conditions: returns a random number in [0,1)
function generateNum() 
{
  
  return Math.random();

  /*TODO 2: implement the body of the function here to return a random number between 0 and 1*/

}

