/* CHAPTER # 21 - 25 */
//Task # 01
// var FN = prompt("Enter your First Name ");
// var LN = prompt("Enter your last name ");
// var fullName = FN + " " + LN;
// alert("Welcome "+ fullName);

//Task # 02
// var mob = prompt("Enter your favourite mobile phone model");
// document.write("My favourite phone is: "+ mob);
// document.write("<br/>Length of string: "+mob.length);

//Task # 03
// var str = "Pakistani";
// document.write("String: "+str);
// document.write("<br/>Index of 'n' "+str.indexOf("n"));

//Task # 04
// var str = "Hello World";
// document.write("String: "+str);
// document.write("<br/>Last Index of 'l' "+str.lastIndexOf("l"));

//Task # 05
// var str = "Pakistani";
// document.write("String: "+str);
// document.write("<br/>Character at indext 3: "+str.charAt(3));

//Task # 06
// var FN = prompt("Enter your First Name ");
// var LN = prompt("Enter your last name ");
// var fullName = FN.concat(' ', LN);
// alert("Welcome "+ fullName);

//Task # 07
// var city = "Hyderabad";
// document.write("City: "+city);
// var replace = city.replace("Hyder", "Islam")
// document.write("<br/>After replacement: " + replace);

//Task # 08
// var msg = "Ali and Sami are best friends. They play cricket and football together";
// for(var i=0; i<msg.length; i++){
//     if(msg.slice(i, i+3) === "and"){
//         msg = msg.replace("and", "&");
//     }
// }
// document.write(msg);

//Task # 09
// var str = "472";
// document.write("Value: "+ str);
// document.write("<br/>Type: "+ typeof(str));
// var num = parseInt(str);
// document.write("<br/>Value: "+ num);
// document.write("<br/>Type: "+ typeof(num));

//Task # 10
// var input = prompt("Enter input");
// document.write("User Input: "+input);
// document.write("<br/>Upper case: "+ input.toUpperCase());

//Task # 11
// var input = prompt("Enter input");
// document.write("User Input: "+input);
// var title = input.charAt(0).toUpperCase() + input.slice(1);
// document.write("<br/>Upper case: "+ title);

//Task # 12
// var num = 35.36;
// document.write("Number: "+num)
// var str = String(num);
// for(var i=0; i<str.length; i++){
//     if(str[i] == '.'){
//         str = str.replace('.','');
//     }
// }
// document.write("<br/>Result: "+str);

//Task # 13
// var username = prompt("Enter your username: ");
// for(var i=0; i<username.length; i++){
//     if(username[i].charCodeAt(0) == 33 || username[i].charCodeAt(0) == 44 || username[i].charCodeAt(0) == 46 || username[i].charCodeAt(0) == 64){
//                username = prompt("Enter valid username: ");
//     }
// }

//Task # 14
// var A = ["cake","apple pie", "cookies", "chips", "patties"];
// var search = prompt("Welcome to abc bakery, what do you want to order sir/ma'am?");
// search = search.toLowerCase();
// var available = false;
// for(var i = 0; i<A.length; i++){
//     if(search === A[i]){
//         document.write("Cookie is available at index " + i + " in our bakery");
//         available = true;
//     }
// }
// if(available == false){
//     document.write("We are sorry. "+search+ " is <b>not available</b> in our bakery");
// }

//Task # 15
// var password = prompt("Enter PAssword: ");

//     for(var i =0 ; password.length<=6 ; i++){
//         if((password[0].charCodeAt(0) >= 48 && password[0].charCodeAt(0) <= 57)){
//            alert("Password can not begin with a number");   
//            password = prompt("Invalid! Enter password again...");
//         }
//         else if(!(password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 89) || !(password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122) || !(password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) ){
//             alert("Password should contain alphabets and numbers");   
//             password = prompt("Invalid! Enter password again...");
//         }
//    }
//    while(password.length>6){
//     alert("Password is longer than 6 characters");
//     password = prompt("Please Enter valid password");
// }

//Task # 16
// var uni = "University of Karachi";
// uni = uni.split("");
// for(var i =0 ; i<uni.length; i++){
//     document.write(uni[i]+"<br/>");
// }

//Task # 17
// var input = prompt("Enter a word");
// document.write("User Input: "+input);
// var lastChar = input[input.length-1];
// document.write("<br/>Last Character of input: "+ lastChar);

//Task # 18
// var str = "The quick brown fox jumps over the lazy dog";
// str = str.split(" ");
// var count=0;
// for(var i=0; i<str.length; i++){
//     if(str[i].toLowerCase() == "the"){
//         count++;
//     }
// }
// document.write("There are "+count+" occurrence(s) of word 'the'");

/* CHAPTER # 26 - 30 */
//Task # 01
// var num = parseFloat(prompt("Enter the number"));
// document.write("number: "+num);
// document.write("<br/>round off value: "+Math.round(num));
// document.write("<br/>floor value: "+Math.floor(num));
// document.write("<br/>ceil value: "+Math.ceil(num));

//Task # 02
// var num = parseFloat(prompt("Enter the negative number"));
// document.write("number: "+num);
// document.write("<br/>round off value: "+Math.round(num));
// document.write("<br/>floor value: "+Math.floor(num));
// document.write("<br/>ceil value: "+Math.ceil(num));

//Task # 03
// var number = parseInt(prompt("Enter a positive/negative number: "));
// document.write("absolute value of "+number+" is "+Math.abs(number));

//Task # 04
// var random = Math.random()*6;
// document.write("Random dice value: "+Math.ceil(random));

//Task # 05
// var toss = Math.random()*2;
// toss = Math.ceil(toss);
// if(toss==1){
//     document.write(toss);
//     document.write("<br/>random coin value: Heads");
// }
// else {
//     document.write(toss);
//     document.write("<br/>random coin value: Tails");
// }

//Task # 06
// var random = Math.random()*100 -1 ;
// random = Math.ceil(random);
// document.write("random number between 1 and 100: "+random);

//Task # 07
// var weight = parseFloat(prompt("Enter your weight: "));
// document.write("The weight of user is "+weight +" Kilograms")

//Task # 08
// var secretNum = Math.random()*9;
// secretNum = Math.ceil(secretNum);
// var guess = prompt("Enter any number between 1 to 10");
// if (guess == secretNum){
//     document.write("Congratulations!");
// }
// else{
//     document.write("Sorry! wrong");
// }

/* CHAPTER # 31 - 34*/
//tASK # 01
// var currentDate = new Date();
// document.write(currentDate);

//Task # 02
// var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December" ];
// var currentDate = new Date();
// var theMonth = currentDate.getMonth();
// document.write("Current Month: "+months[theMonth]);

//Task # 03
// var day = ["Sun", "Mon", "Tue","Wed", "Thur", "Fri", "Sat"];
// var now = new Date();
// document.write("Today is "+day[now.getDay()]);

//Task # 04
// var now = new Date();
// var today = now.getDay();
// if(today == 0 || today == 6){
//     document.write("It's Fun day");
// }

//Task # 05
// var now = new Date();
// var date = now.getDate();
// if(date<16){
//     document.write("First fifteen days of the month");
// }
// else{
// document.write("Last days of the month");
// }

//Task # 06
// var now = new Date();
// document.write("Current Date: "+now);
// document.write("<br/>Elapsed milliseconds since January 1, 1970: "+now.getTime());
// document.write("<br/>Elapsed minutes since January 1, 1970: "+now.getTime()/60000);

//Task # 07
// var now = new Date();
// var hour = now.getHours();
// if(hour<12){
//     document.write("It's AM");
// }
// else {
//     document.write("It's PM");
// }

//Task # 08
// var laterDate = new Date("May 31, 2020");
// document.write("Later Date: "+laterDate);

//Task # 09
// var now = new Date();
// var Ramdan = new Date("April 24, 2020");
// var dayNow = now.getTime()
// var FirstRamdan = Ramdan.getTime();
// var diff = dayNow - FirstRamdan;
// var dDiff = diff / (1000*60*60*24);
// dDiff = Math.floor(dDiff);
// document.write(dDiff);

//Task # 10
// var refDate = new Date("December 05, 2015");
// refSec = refDate.getTime();
// var begDate = new Date("January 01, 2015");
// begSec = begDate.getTime();
// var sdeff = refDate - begDate;
// var seconds = sdeff/1000;
// document.write("On reference date "+refDate+", "+seconds+" seconds had passed since beginning of 2015 i-e: "+begDate);

//Task # 11
// var now = new Date();
// document.write("current date: "+ now);
// var hour = now.getHours()-1;
// now.setHours(hour);
// document.write("<br/>1 hour ago, it was "+now);

//Task # 12
// var now = new Date();
// var year = now.getFullYear()-100;
// now.setFullYear(year);
// alert("100 years back, it was "+now );

//Task # 13
// var age = parseInt(prompt("Enter your age"));
// var date = new Date();
// var year = date.getFullYear()-age;
// document.write("Your age is "+age);
// document.write("<br/>Your birth year is "+year);

//Task # 14
// var date = new Date();
// var m = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
// var customerName = "ABC Customer";
// var Month = date.getMonth();
// var units = 410;
// var chargePerUnit = 16
// var lateFees = 350;
// var netAmount = units * chargePerUnit;
// var grossAmount = netAmount + lateFees; 
// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: "+customerName);
// document.write("<br/>Month: "+m[Month]);
// document.write("<br/>Number of units: "+units);
// document.write("<br/>charges per unit: "+chargePerUnit);
// document.write("<br/><br/>Net Amount Payable (within due date): "+netAmount.toFixed(2));
// document.write("<br/>Late Payment surcharges: "+lateFees);
// document.write("<br/>Gross Amount Payable (after Late fees): "+grossAmount.toFixed(2));

/* CHAPTER # 35 - 38 */
//Task # 01
// function currentDate(){
//     var d = new Date();
//     return d;
// }
// document.write(currentDate());

//Task # 02
// function full_name(FN, LN){
//     var FullName = FN + " " + LN;
//     alert("Welcome "+FullName );
// }
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// full_name(firstName, lastName);

//Task # 03
// function sum(num1,num2){
//     var result = num1 + num2;
//     return result;
// }
// var n1 = parseInt(prompt("Enter num 1: "));
// var n2 = parseInt(prompt("Enter num 2: "));
// alert(sum(n1, n2));

//Task # 04
// function calculator(num1, num2, op){
//     var result;
//     if(op == '+'){
//         result = num1 + num2;
//     }
//     else if (op == '-'){
//         result = num1 - num2;
//     }
//     else if (op == '*'){
//         result = num1 * num2;
//     }
//     else if (op == '/'){
//         result = num1 / num2;
//     }
//     return result;
// }
// var n1 = parseInt(prompt("Enter number 1: "));
// var n2 = parseInt(prompt("Enter number 2: "));
// var o = prompt("Enter number 1: ");
// alert(calculator(n1,n2,o));

//Task # 05
// function square(num){
//     return num*num;
// }
// alert(square(6));

//Task # 06
// function factorial(num){
//     var i = num-1;
//     while(i!=0){
//         num = num * i;
//         i--;
//     }
//     return num;
// }
// var fact = parseInt(prompt("Enter the number: "));
// alert(factorial(fact));

//Task # 07
// function counting(start, end){
//     for(var i = start; i<=end; i++){
//         document.write(i + "<br/>");
//     }
// }
// var num1 = parseInt(prompt("Enter starting number: "));
// var num2 = parseInt(prompt("Enter ending number: "));
// counting(num1, num2);

//Task # 09
// function AreaOfRect(width, height){
//     var area = width * height;
//     document.write(area + "<br/>");
// }
// AreaOfRect(3, 6);
// var w = 5;
// var h = 20;
// AreaOfRect(w, h)

//Task # 10
// function palindrom(str){
//     var i =0;
//     var j = str.length-1;
//     var isTrue = false;
//     while(str[i] == str[j] ){
//         i++;
//         j--;
//         if(i == j){
//             document.write("String is palindrom");
//             isTrue = true;
//             break;
//         }
//     }
//     if(isTrue == false){
//         document.write("String is not palindrom");
//     }
// }
// var str = prompt("Enter a string");
// palindrom(str);

//Task # 11
// function letterConverter(str){
//     var words = str.split(" ");
//     for(i = 0; i<words.length ; i++){
//     var firstChar = words[i].slice(0,1).toUpperCase();
//     var otherChar = words[i].slice(1);
//     words[i] = firstChar + otherChar;
//     document.write(words[i] + " ");
//     }
// }
// letterConverter("the quick brown fox");

//Task # 12
// function largestWord(str){
//     var index;
//     var word = str.split(" ");
//     var count = 0;
//     for(var i = 0; i<word.length; i++){
//         for(var j =0 ; j < word.length ; j++){
//             if(word[i].length >= word[j].length){
//            count++;
//             }
//         }
//         if(count == word.length){
//             index = i;
//         }
//         count = 0;
//     }
// document.write(word[index]);
    
// }
// var input = prompt("Enter a sentence to check longest word");
// largestWord(input);

//Task # 13
// function frequencyOfAlpha(str, alpha){
//     var count =0;
//     for(var i =0; i<str.length; i++){
//         if(str[i] == alpha){
//             count++;
//         }
//     }
//     return count;
// }
// var str = prompt("Enter a string");
// var alpha = prompt("Enter an alphabet");
// var c = frequencyOfAlpha(str,alpha);
// document.write("Occurence of "+alpha+" in "+str+ " is "+ c + " times ");

//Task # 14
// function calcCircumference(rad){
//     var cir = 2 * 3.14 * rad;
//     document.write("The circumference is "+cir + "<br/>");
// }
// function calArea(rad){
//     var area = 3.14*rad*rad;
//     document.write("The area is "+ area);
// }
// var radius = parseFloat(prompt("Enter radius: "));
// calcCircumference(radius);
// calArea(radius);