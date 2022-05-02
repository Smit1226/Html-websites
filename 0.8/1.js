window.onload = function(){
        // Array to hold the button names, which will be displayed on the website
        var buttonCaption = ["Table", "Even number", "Roots ", "checking roots", "checking grades",
							 "reverse", "no of 7's", "sum", "no equal to reverse", "All Factorial",
							 "Fibonacci", "traingle loops", "prime", "sum of first 4 and last 4",
                      "recieve numbers untill 0", "neg and positive equal", "prime numbers", "prime number with 7", "sum ","area of traingle","multiplication",
                       "Number of Digits", "Palindrome", "Num Pyramid",
							 "* Pyramid", "Add Array", "Prime Array", "Odd in Array",
							 "Mod without mod", "pattern",
							  "pow of 5", "Sum of Digits", "Countdown","Sum 10 to 30","Convert to base 2",
             "Power of ab without pow","LCM","GCD","Sum of n primes","square"];
        // Loop till the number of button you want
        for (var i = 0; i < 40; i++){

              var newButton = document.createElement("button"); // Creates the button element
              $("nav").append(newButton); // Add it in the navigation section of your Html Code
              $(newButton).attr("id", "button" + (i+1));  // Assings Id to button corresposnding to its order
              $(newButton).html(buttonCaption[i]);  // Gets the name of the button and assing it
              $(newButton).attr("onClick", "execute("+i+");") // add onClick event to each button
              $(newButton).attr("class", "button"); // add class to button
        }
}
function execute(problemId) {
        // Array which holds the discription of each problem
        var descriptionOfProblem = ['Multiplication Table','even no btn 1 to n','roots of equation','Checking Roots','grades','reverse of number',"no of 7's", "sum", "no equal to reverse", "All Factorial",
        "Fibonacci", "traingle loops", "prime", "sum of first 4 and last 4",
        "recieve numbers untill 0", "neg and positive equal", "prime numbers", "prime number with 7", "sum ","area of traingle",'Multiply 5 numbers',
        'Finding The Number of Digits',
        "Checking For Palindrome",'Number Pyramid','Star Pyramid','Sum of Elements of Array','Counting Prime Numbers in an Array','Display Odd Number in Array',
        'Modulo Without Using Modulo',
        'pattern of n numbers',
        'How Many power of 5 are there in a Number',
        'Sum of digits','CountDown','Sum of 10 to 30', 
        'Convert base to 2', 'Power of a to b without using power function','LCM','GCD','Sum of n Primes',
      'square of n rows'];
		
        document.getElementById("description").innerHTML= "<p> Computational thinking problem for a program to "+descriptionOfProblem[problemId] +"</p>"; // Getting the corresponding description of the problem from discription array
        
        
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

function checkUncheck19()
{
  var w = parseInt(prompt("enter a number 1: ")); 
  var h = parseInt(prompt("enter a number 2: ")); 
  var s = w + h;

  document.getElementById("output").innerHTML = "sum: " + s;
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

function checkUncheck21()
{
  var mu=1;
  for(var i=1; i<=5; i++)
  {
    var num = parseInt(prompt("enter the number:",""));
    mu=num*mu;
  }
  alert(mu);
}
function checkUncheck22()
{
  var num = parseInt(prompt("enter the number:",""));
  var count=0;

  do{
    num=Math.floor(num/10);
    count++;
  }
  while(num!==0)
  alert(count);
}
function checkUncheck23()
{
  var rem = 0;
  var b = 0;
  var num = parseInt(prompt("enter the number:",""));
  var a = num;
  while(num>0)
  {
    rem=num%10;
    num=Math.floor(num/10);
    b=b*10+rem;
  }
  if(a==b)
  {
    alert("The number "+a+" is a pelindrome" );
  }
  else
  {
    alert("The number "+a+" is not a pelindrome" );
  }


}
function checkUncheck24()
{
  var a;
  var n=prompt("enter a no for the no of rows in a pattern");
  for(var i=1; i<=n; i++)
  {
    for(var j=1; j<=i; j++)
    {
      document.write(j+" ");
    }
    document.write("<br/>");
  }

}

function checkUncheck25()
{
  
  var n=parseInt(prompt("enter a no for the no of rows in a pattern",""));
  for(var i=1; i<=n; i++)
  {
    for(var j=1; j<=i; j++)
    {
      document.write('*');
    }
    document.write("<br/>");
  }

}
function checkUncheck26()
{
  var n=parseInt(prompt("enter the number of elements in array",""));
  myArray =new Array(n)
  for(i=0;i<num;i++)
  {
    myArray[i]=parseInt(prompt("enter the "+(i+1)+" element;"," "));
  }
  sum=0;
  for(i=0;i<myArray.length;i++)
  {
    sum=sum+myArray[i];
  }
  alert(sum);
}
function checkUncheck27()
{
  var count=0;
  var num= parseInt(prompt("Enter the number of elements of the array:",""));
  function prime(num)
  {
    var flag="true";
    var d=2;
    while(flag=="true" && d<=num/2)
    {
      if(num%d == 0)
      {
        flag ="false";

      }
      d=d+1;

    }
    return flag;
  }
  a=new Array(num)
  for(i=0;i<num;i++)
  {
    a[i]=parseInt(prompt("add numbers in array:"));
  }
  for(i=0;i<num;i++)
  {
    if(prime(a[i])=="true")
    {
      count++;
    }
  }
  alert(count);
}
function checkUncheck28()
{
  var num=parseInt(prompt("enter the number of elements in array",""));
  a=new Array(num)
  for(i=0;i<num;i++)
  {
    a[i]=parseInt(prompt("add numbers in array"));
  }
  for(i=0;i<num;i++)
  {
    if(a[i]%2!=0)
    {
      document.write(a[i]);
    }
  }

}
function checkUncheck29()
{
  var num=parseInt(prompt("enter the number",""));
  var num=parseInt(prompt("enter the divisor",""));
  while(num>div)
  {
    num=num-div;
  }
  alert(num);
}
function checkUncheck30()
{
  {
  
  
    var no = parseInt(prompt("please enter a number: ", ""));
    var outputObj=document.getElementById("output");
  
  
    for (i=1;i<=no;i++)
    {              	
      if(i%2==0)
        {
  
          for (j=no;j>=1;j--)
          {
            outputObj.innerHTML = outputObj.innerHTML + j ; 
            
          }	
       }
        else
        {
  
          for (j=1;j<=no;j++)
          {
            outputObj.innerHTML = outputObj.innerHTML + j ;
            
          }
        }
        outputObj.innerHTML = outputObj.innerHTML + "<br>";
        
        
  
    }
  }
}
function checkUncheck35()
{
  var a= parseInt(prompt("enter a number",""));
  while(a!=0)
  {
    var rem=a%2;
    a=Math.floor(a/2);
    document.write(rem+" ");
  }

}
function checkUncheck31()
{
  var a = parseInt(prompt("enter a number",""));
  var counter=0;
  var c=a;
  var b;
  while(c!=0)
  {
    b=c%10;
    if(b==5)
    {
      counter++;
    }
    c=parseInt(c/10);
  }
  alert(counter);
}
function checkUncheck32()
{
  var c= parseInt(prompt("enter a number",""));
  var sum=0;
  var b;
  while(c!=0)
  {
    b=c%10;
    sum=sum+b;
    c=parseInt(c/10);
  }
  alert(sum);
}
var i=20;
function checkUncheck33()
{
  alert(i);
  i--;
  if(i<0)
  {
    alert("boom");
  }

}
function checkUncheck34()
{
  var sum=0;
  for(var i=10; i<=30; i++)
  {
    sum=sum+i;
  }
  alert(sum);
}
function pow(a,b)
{
  var ans=a;
  var inc=a;
  var i;
  var j;
  if(b==0)
  {
    ans=1;
  }
  for(i=1; i <b; i++)
  {
    for(j=1; j<a; j++)
    {
      ans= ans + inc;
    }
    inc=ans;
  }
  return ans;
}
function checkUncheck36()
{
  var base=parseInt(prompt("enter base",""));
  var power=parseInt(prompt("enter power",""));
  var ans=pow(base,power);
  alert(ans);
} 
function checkUncheck37()
{
  var a= parseInt(prompt("enter a number:",""));
  var b= parseInt(prompt("enter a number:",""));
  var d = 1;
  var c;
  var p = 0;
  while(p==0)

  {
    if(d%a==0&&d%b==0)
    {
      c=d;
      p=1;

    }
    d++;
  }
  alert(c);
}
function checkUncheck38()
{
  var a= parseInt(prompt("enter a number:",""));
  var b= parseInt(prompt("enter a number:",""));
  var d = 1;
  var c;
  while(d<=a&&d<=b)

  {
    if(a%d==0&&b%d==0)
    {
      c=d;
      

    }
    d++;
  }
  alert(c);
}
function checkUncheck39()
{
  var a = parseInt(prompt("enter a number:",""));
  var ans=prime(a);
  alert(ans);
}
function prime(n)
{
  var num=0;
  var prime = "true";
  for(var i=2; i<=n; i++)
  {
    prime="true";
    for(var j=2; j<i; j++)
    {
      if(i%j==0)
      {
        prime="false";
        break;
      }
    }
    if(prime=="true")
    {
      num = num + i;
    }
  }
  return num;
}
function checkUncheck40()
{
  var a= parseInt(prompt("enter number of rows",""));
  var ans="";
  for(var row =1; row <=a; row++)
  {
    for(var col=1; col<=a; col++)
    {
      ans=ans+"# ";
    }
    ans=ans+"\n";
  }
  alert(ans);
}