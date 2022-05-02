function p01Func()
{
  document.getElementById("problem").innerHTML="<p>Table of a given number</p>"
}
function checkUncheck1()
{

  var a = parseInt(prompt("Please enter a number: ", ""));
  var outputObj=document.getElementById("output");
 var i = 1;

  while(i<=10)

  {
    outputObj.innerHTML = outputObj.innerHTML + a + "*" + i + "=" + a*i + "<br><br>";
    i = i + 1;
  }
}

function p02Func()
{
  document.getElementById("problem").innerHTML="<p>Even between 1 and an input number.</p>"
}
function checkUncheck2()
{


  var a = parseInt(prompt("please enter a number: ", ""));
  var outputObj=document.getElementById("output");
  outputObj.innerHTML = "Even numbers:" 
  var i = 1;

  while(i<=a)
  {
    if(i%2==0)
    {
     
      outputObj.innerHTML = outputObj.innerHTML + i + ", ";
    }
    i= i + 1;
  }
}
function p19Func() 
{

  
  document.getElementById("problem").innerHTML="<p>sum of two number</p>"
}
function checkUncheck19()
{
  var w = parseInt(prompt("enter a number 1: ")); 
  var h = parseInt(prompt("enter a number 2: ")); 
  var s = w + h;

  document.getElementById("output").innerHTML = "sum: " + s;
}

function p20Func()
{

  document.getElementById("problem").innerHTML="<p>area of traingle</p>"
}
function checkUncheck20()
{
  var a = parseInt (prompt("enter a number 1: ")); 
   var b = parseInt(prompt("enter a number 2: ")); 
   var c = parseInt(prompt("enter a number 3: ")); 

   var p = (a+b+c)/2;
   var h = Math.sqrt(p*(p-a)*(p-b)*(p-c)).toFixed(2);
   
   document.getElementById("output").innerHTML = "area: "  + h;
}
  
function p03Func()
{
  document.getElementById("problem").innerHTML="<p>roots of equation</p>"
}
function checkUncheck3()
{

  var a = parseInt (prompt("enter a number 1: ")); 
   var b = parseInt(prompt("enter a number 2: ")); 
   var c = parseInt(prompt("enter a number 3: ")); 
  var d = Math.sqrt(b*b-(4*a*c));
  var e = (-b + d)/ (2*a);
  var f = (-b - d)/ (2*a);

  document.getElementById("output").innerHTML = "one root: "  + e.toFixed(2)+ "<br/>" + "Another" + f.toFixed(2) ;
}

 
function p04Func()
{
  document.getElementById("problem").innerHTML="<p>checking roots of an equation</p>"
}
function checkUncheck4()
{

  var a = parseInt (prompt("enter a number 1: ")); 
  var b = parseInt(prompt("enter a number 2: ")); 
  var c = parseInt(prompt("enter a number 3: ")); 

  var x1 = b*b;
  var x2 = 4*a*c;
  

     if(x1==x2)
     {
         roots= "its roots are identical"   ;

     }
     else if(x1>x2)
     {
          roots = "it has two distinct roots";
     } 
         else
        {
           roots = "it has no real roots";
        }
        
        document.getElementById("output").innerHTML = roots;
}


function p05Func()
{

  document.getElementById("problem").innerHTML="<p>checking grades for number of percentage you scored</p>"
}
function checkUncheck05()
{
  var a = parseInt (prompt("enter a number 1: ")); 
  if  (a>89)
  {
    ans="A+";
  }
   else if  (a>79)
  {
   ans="A";
  }
  else if  (a>69)
  {
   ans="B+";
  }
  else if  (a>64)
  {
   ans="B";
  }
  else if  (a>59)
  {
   ans="C+";
  }
  else if  (a>54)
  {
   ans="C";
  }
  else if  (a>49)
  {
   ans="D+";
  }
  else if  (a>44)
  {
   ans="D";
  }
  else if  (a>39)
  {
   ans="E";
  }
   else 
  {
   ans="F";
  }

  {
    document.getElementById("output").innerHTML = ans;
  }
}

function p06Func()
{

  document.getElementById("problem").innerHTML="<p>reverse of the digit</p>"
}
function checkUncheck06()
{

  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
  var b;
  outputObj.innerHTML="number: "+a+"<br><br>its digits: ";

  while (a>0)
  {
     b = a % 10;
     outputObj.innerHTML=outputObj.innerHTML +b+ "," ;
     a = parseInt(a/10);
  }
}

function p07Func()
{

  document.getElementById("problem").innerHTML="<p>number of 7's in digit</p>"
}
function checkUncheck07()
{

  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML="number: "+ a +"<br><br>no of 7's: "  ;
  var b = 0 ;
  var counter =0;
  while(a>0)
  {
     b=a%10;
     a=(a - b)/10;
     if (b == 7)
     {
       counter++;
     }
     
   }
 outputObj.innerHTML=outputObj.innerHTML +counter ;
 outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
 document.getElementsByTagName("button")[0].setAttribute("disabled","true");

}

function p08Func()
{

  document.getElementById("problem").innerHTML="<p>sum of all digits</p>"
}
function checkUncheck08()
{

  var outputObj=document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML="number: "+ a +"<br><br>sum of digits: "  ;
  var b = 0 ;
  var sum =0;
  while(a>0)
  {
     b=a%10;
     a=(a - b)/10;
     sum = sum + b;
     
     
   }
 outputObj.innerHTML=outputObj.innerHTML +sum ;
 outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

function p09Func()
{
  document.getElementById("problem").innerHTML="<p>Is the number is equal to its reverse </p>"
}
function checkUncheck09()
{
var outputObj=document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML="number: "+ a +"<br><br>"+"equal to its reverse? ";
  var b = 0 ;
  var check = a;
  var r=0;
  while(a>0)
  {
    b=a%10;
    a=(a - b)/10;
    r=r*10+b;

     
   }
   if (r== check)
   {
     outputObj.innerHTML=outputObj.innerHTML + "yes" ; 
   }   
   else
   {
    outputObj.innerHTML=outputObj.innerHTML + "no" ;
   }
   outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

function p10Func()
{
  document.getElementById("problem").innerHTML="<p> Factorial of a number entered</p>"
}
function checkUncheck10()
{

  var outputObj=document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML="number: "+ a +"<br><br>" + a + "!: "  ;
  var b = 1 ;
  
  
  while(a>0)
  {
     b=b*a;
     a=a-1;
     
   }

     outputObj.innerHTML=outputObj.innerHTML + b ;
     outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
     document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

function p11Func()
{
  document.getElementById("problem").innerHTML="<p>Fibonacci series</p>"
}
function checkUncheck11()
{
var outputObj=document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML="number: "+ a +"<br><br>" + "fibonacci : 0,1,"  ;
  
  var secondLast = 0;
  var last = 1;
  var newvalue = 0; 

  for (var i=1;i<a-1;i++)
  {
     newvalue = secondLast + last;
      secondLast=last;
      last=newvalue;
      
     outputObj.innerHTML=outputObj.innerHTML + newvalue +",";  
  }
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

function p12Func()
{
  document.getElementById("problem").innerHTML="<p>traingle with nested loops </p>"
}
function checkUncheck12()
{

  var outputObj=document.getElementById("output");
  var a = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML="number :"+a +"<br><br>"  ;

  outputObj.style.fontSize='11px';
  outputObj.style.textAlign='left';
  
  
   for(var i=0 ; i<a;i++)
    {
      for(var j=0 ; j<=i ; j++)
       {
         outputObj.innerHTML=outputObj.innerHTML  +"xx " ;  
       }
       outputObj.innerHTML=outputObj.innerHTML+"<br>";
   }
   outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

function p13Func()
{
  document.getElementById("problem").innerHTML="<p>Determines if a natural number is prime or not </p>"
}
function checkUncheck13()
{

  var num = parseInt(prompt("Please enter a number: ", ""));
  prime = true;
 var d = 2;

 while(prime == true && d <= num/2)
 {
     if(num % d == 0)
     {
         prime = false;
     }
     else
     {
         d = d + 1;
     }
 }
    if(prime == true)
    {
        alert(num + " is prime");
    }
    else{
        alert("it is not prime");
    }
}

function p14Func()
{
 
  document.getElementById("problem").innerHTML="<p> Is sum of the first 4 numbers is equal to sum of the last 4 numbers </p>"
}
function checkUncheck14()
{

  var sum1 = 0;
  var sum2 = 0;

  for(i = 1; i <= 4; i ++)
  {
      var num = parseInt(prompt("enter a number: "));
      sum1 = sum1 + num;
  }
  for(i = 1; i <= 4; i ++)
  {
      var num = parseInt(prompt("enter a number: "));
      sum2 = sum2 + num;
  }
  if(sum1 == sum2)
  {
      alert("yes");
  }
  else
  {
      alert("no");
  }
}

function p15Func()
{
  document.getElementById("problem").innerHTML="<p> Receives natural numbers until a 0 is entered or number of positive values is more than twice negative ones   </p>"
}
function checkUncheck15()
{

  var p = 0;
  var n = 0;

  do
  {
      var num = parseInt(prompt("enter a number:"));
      if(num > 0)
      {
          p = p + 1;
      }
      else if( num < 0)
      {
          n = n + 1;
      }
  }

  while(num !=0 && p <= 2*n )
}

function p16Func()
{
  document.getElementById("problem").innerHTML="<p> Is number of negative values in the first half is equal to the number of positive values in the second half </p>"
}
function checkUncheck16()
{

  var cnt1 = 0;
  var cnt2 = 0;

  for(i = 1; i <= 4; i ++)
  {
      var num = parseInt(prompt("enter a number: "));
      if(num < 0)
      {
          cnt1 = cnt1 + 1;
      }
  }

  for(i = 1; i <= 4; i ++)
  {
      var num = parseInt(prompt("enter a number: "));
      if(num > 0)
      {
          cnt2 = cnt2 + 1;
      }
  
      }

      if(cnt1 == cnt2)
      {
          alert("yes");

      }
      else
      {
          alert("no");
      }
}

function p17Func()
{
  document.getElementById("problem").innerHTML="<p> All prime numbers less than or equal to a certain input </p>"
}
function checkUncheck17()
{

  var num = parseInt(prompt("enter a number: ")); 
    var outputObj=document.getElementById("output");
    outputObj.innerHTML = "output:";

    for(i = 2;i <= num; i ++)
    {
        if(prime(i) == true)
        {
            outputObj.innerHTML = outputObj.innerHTML + i + ", ";
        }
    }

}

function prime(i)
{
    flag = true;
    var d = 2;

    while(flag == true && d <= i/2)
    {
        if(i % d == 0)
        {
            flag = false;
        }
        d = d + 1;
    }
    return flag;
}

function p18Func()
{
    document.getElementById("problem").innerHTML="<p> All prime numbers less than or equal to a certain input and which has digit 7 in it. </p>"
  }
  function checkUncheck18()
  {

    var num = parseInt(prompt("enter a number: ")); 
    var outputObj=document.getElementById("output");
    outputObj.innerHTML = "output:";

    for(i = 2;i <= num; i ++)
    {
        if(prime(i) == true && i == has7(i))
        {
            outputObj.innerHTML = outputObj.innerHTML + i + ", ";
        }
    }
}

function has7(i)
{
    var t = i;
    var r = 0;
    var cnt = 0;

    while(i != 0)
    {
        r = i % 10;

        if(r == 7)
        {
            cnt = cnt + 1;
        }
        i = Math.floor( i/10);
    }

    if(cnt > 0)
    {
        return t;
    }
}


















