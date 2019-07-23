// 1.Setting and Swapping
let myNumber = 42
let myName = 'Veso'
myNumber = 'Veso'
myName = 42
///console.log(myNumber)
///console.log(myName)
//2.Print -52 to 1066
for (var num = -52;num < 1067; num++)
{
  ///console.log(num)
}
///console.log('we are done, good bye')
//3.Don't Worry,Be Happy.
function beCheerful(){
  var hi = 'good morning'
  for (var x = 1 ; x < 99;x++){

    console.log(x + " " + hi)
  }
}
///beCheerful();
//4.Multiples of Three - but Not All
for (var num1 = -300; num1 <1;num1++)
{
  if (num1 == -3 || num1 == -6)
  {
    continue;
  }
  ///console.log(num1)
}
//5. Printing Integers with While
var num2 = 2000;
while (num2 < 5281)
{
  ///console.log(num2)
  num2 = num2 + 1;
}

//7. print and count
for (var num3 = 512 ; num3 < 4097; num3++){
  if (num3 % 5 == 0){
    ///console.log(num3)
  }
}
//8. Multiples of Six
var num4 = 6;
while (num4 < 60000){
  ///console.log(num4)
  num4 = num4 + 1;
}
//9. Counting , the Dojo way
for (var num5 = 1 ; num5 <101; num5++){
  if (num5 % 5 === 0){
    ///console.log('Coding')
  }
  if (num5 % 10 === 0){
    ///console.log('Dojo')
  }else{
    ///console.log(num5)
  }
}
//10. What Do you Know?
function incoming(){
  hi = "incoming"
  console.log(hi)
}
///incoming();
//11. Whoa,That Sucker's Huge...
function sum6(){
  var sum6log = 0;
  for (var sum6= -300000; sum6 < 300000; sum6++){
    sum6log = sum6log + sum6;
  }
  console.log(sum6log)
}
///sum6();
//12.You Say it's your Birthday

for (var bir = 1;bir<=12;bir++){
  if (bir !=12){
    //console.log(bir + " " + 'Just Another day')
 }
  else{
    //console.log('How did you know that is December ?')
  }
}
//13.LEAP YEAR
function leapy(){
  for (var i = 1;i <366;i++){
    if (i % 4 == 0 && i % 100 ==0){
      console.log('It is leap year')
    }
  }
}
///leapy()

//1 BIGGIE SIZE

function Biggie(){
  for (var z = 0; z < Array.length){
    if (Array[z] > 0){
      Array[z] = 'big'
    }
  }
}
//2. Print Low,Retrun High
var max = arr[0];
var min = arr[0];
for (var l = 0; l < arr.length; l++){
  if (min > arr[l]){
    min = arr[l]
    console.log(min)
  }
  if (max < arr[l]){
    max = arr[l]
    return max
  }

}
//3. Double Vision
function double(){
  for(var c =0 ; c < arr.length;c++){
    arr[c] = arr[c] * arr[c]
    return arr[c]
  }
}