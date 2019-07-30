// function resetNegatives(arr){
//   for (var i = 0; i < arr.length;i++){
//     if (arr[i] < 0){
//       arr[i] = 0;
//     }
//   }
//   return arr;
// }

// console.log(resetNegatives([1,2,-1,-3]));
// function moveForward(arr){

//   for (var i = 0; i< arr.length ;i++){  
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = 0;
//   return arr;
// }
// console.log(moveForward([1,2,3,4]));

// function reverArray(arr){
//   var newarr= [];
//   for (var i = arr.length; i >= 0; i--){
//     newarr.push(arr[i]);
//     console.log(arr[i]);
//   }
//   return newarr;
// }
// console.log(reverArray([1,2,3,4,5]));

// function reverseArr (arr){
//   for (var i = 0 ; i < arr.length/2; i++){
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length -1 -i] = temp;
//   }
//   return arr
// }
// console.log(reverseArr([2,3,4,5,6]));

// function duplicate(arr){
//   var newarr = [];
//   for (var i = 0 ; i < arr.length; i++){
//     newarr.push(arr[i]);
//     newarr.push(arr[i]);
//     console.log(newarr);
//   }
//   return newarr
// }
// console.log(duplicate([1,2,3]))


// function makeItBig(arr){
//   for(var i = 0; i<arr.length;i++){
//     console.log(arr[i]);
//     if (arr[i] > 0){
//       arr[i] = "big"      
//     }
//   }
//   return arr;
// }
// console.log(makeItBig([1,-3,-5,-2,4,5,6]))

// function printLowReturHigh(arr){
//   var max = arr[0];
//   var min = arr[0];
//   for (var i = 1; i < arr.length; i++){
//     if ( arr[i] > max)
//     max = arr[i];
//     else if (arr[i] < min){
//       min = arr[i];
//     }
//   }
//   console.log(min);
//   return max;
// }
// console.log(printLowReturHigh([10,20,5,3,2,40,-4]));

// function returThesecondtoLast(arr){
//   console.log(arr[arr.length - 2]);
//   for (var i = 0 ; i < arr.length; i++){
//     if (arr[i] % 2 !==0){
//       return arr[i];
//     }
//   }
// }
// console.log(returThesecondtoLast([2,2,2,5,0,0,8,2]))

// function doubleArr(arr){
//   var newarr = [];
//   for(var i = 0; i<arr.length;i++){
//     arr[i] = newarr.push(arr[i]*arr[i]);
//   }
//   return newarr;
// }
// console.log(doubleArr([1,2,3,4]));

// function countPositives(arr){
//   var count = 0;
//   for (var i = 0; i < arr.length;i++){
//     if (arr[i] > 0){
//       count = count + arr[i];
//     }
//   }
//   arr[arr.length-1] = count;
//   return arr;
// }
// console.log(countPositives([1,1,1-1,1,1,1]));
// function evenAndOdds(arr){
//   for (var i = 0; i < arr.length; i++){
//     if (arr[i] % 2 !==0){
//       if (arr[i+1] %2 !==0){
//         if (arr[i+2]% 2 !==0){
//           console.log('That is Odd!');
//         }
//       }
//     }
//     if(arr[i] % 2 === 0){
//       if(arr[i+1] % 2 === 0){
//         if(arr[i+2] %2 === 0){
//           console.log("that is Even More")
//         }
//       }
//     }
//   }
// }
// evenAndOdds([1,5,3,4,4,4,1,3,3,4,4,4,4,4,4]);
// function incrementTheSeconds(arr){
//   for (var i = 0; i < arr.length;i++){
//     if (i % 2 !==0){
//       arr[i] = arr[i] +1;
//     }
//   }
//   return arr;
// }
// console.log(incrementTheSeconds([1,10,1,1,1,1,1]));

// function bla(arr){
//   for (var i = arr.length-1; i > 0 ;i--){
//     arr[i] = arr[i-1].length;
//     console.log(arr)
//   }
//   // arr[0] = arr[0].length;
//   return arr;
// }
// console.log(bla(["hello","dojo","awesome"]));

// function addSeven(arr){
//   var newarr = [];
//   for (var i = 0; i < arr.length; i ++){
//     newarr.push(arr[i]+7);
//   }
//   return newarr;
// }
// console.log(addSeven([1,2,3]))

// function reverse(arr){
//   for (var i = 0; i < arr.length/2;i++){
//     temp = arr[i];
//     arr[i] = arr[arr.length -1 -i];
//     arr[arr.length - 1 - i] = temp;
//   }
//   return arr;
// }
// function reverse2(arr){
//   var newarr = [];
//   for (var i = arr.length-1; i >= 0;i--){
//     newarr.push(arr[i]);
//   }
//   return newarr;
// }
// console.log(reverse2([3,1,6,4,2]))

// function absolutfined(arr){
//   for (var i = 0 ; i < arr.length; i++){
//     arr[i] = -Math.abs(arr[i])
//   }
//   return arr;
// }

// console.log(absolutfined([1,-3,5,100]));

// function hungry(arr){
//   var count = 0;
//   for (i = 0 ; i < arr.length;i++){
//     if( arr[i] === "food"){
//       console.log("yummy");
//     }
//     else{
//       count++;
//       }
//   }
//   if(count === arr.length){
//     console.log('I am Hungry')
//   }
// }
// hungry(["no","no","no"]);

// function hungry(arr){
//   var count = 0;
//   for (i = 0 ; i < arr.length;i++){
//     if( arr[i] === "food"){
//       console.log("yummy");
//     }
//     else{
//       count++;
//     }
//   }
//   if(count === arr.length){
//     console.log('I am Hungry')
//   }
// }
// hungry(["no","no","food"]);


// function swapTowardCenter(arr){
//   for (var i = 0; i < arr.length/2 ;i++){
//     var temp = arr[i];
//     arr[i] = arr[arr.length -1];
//     arr[arr.length -1] = temp;
//     var temp2 = arr[2];
//     arr[2] = arr[arr.length-3];
//     arr[arr.length-3] = temp2; 
//   }
//   return arr;
// }

// console.log(swapTowardCenter(["true",42,"Ada",2,"pizza"]));

// var array = [true,42,"Ada",2,"pizza"];
// var nums = [1,2,3,4,5,6];
// function swapTowardCenter(arr){
//   var temp = arr[0]; 
//   arr[0] = arr[arr.length-1];
//   arr[arr.length-1] = temp;
//   var temp2 = arr[2];
//   arr[2] = arr[arr.length-3];
//   arr[arr.length-3] = temp2;
//   return arr;
// }
// console.log(swapTowardCenter(array));
// console.log(swapTowardCenter([1,2,3,4,5,6]))

// function scaleArray(arr,num){
//   for (var i = 0 ; i < arr.length;i++){
//     arr[i] = arr[i] * num;
//   }
//   return arr;
// }
// console.log(scaleArray([1,2,3],5))

// function sigma(num){
//   var sum = 0;
//   for (var i = num ; i > 0; i--){
//     console.log(i)
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(sigma(5))

// function factorial(num,opt){
//   var sum = 0;
//   for(var i = num ; i >= 1;i --){
//     if (opt === "+"){
//       sum = sum + i;
//       console.log(sum);
//     }
//     else if(opt === "-"){
//       sum = i - (i-1);
//       console.log(sum)
//     }
//     else if(opt === "*"){
//       sum = i * (i-1);
//       console.log(sum);
//     }
//     else if(opt === "/"){
//       sum = i / (i-1);
//       console.log(sum)
//     }
//   }
//   return sum;
// }

// console.log(factorial(5,"+"));

// function add(num){
//   var sum = 0;
//   for (var i = num; i > 0; i --){
//     sum = sum + i;
//   }
//   return sum;
// }
// function subst(num){
//   var sum = 0;
//   for (var i = num ; i >=1 ; i--){
//     sum = i - (i-1);
//     console.log(sum);
//   }
//   return sum;
// }
// function multi(num){
//   var sum = 0;
//   for (var i = num ; i >=1 ; i--){
//     sum = i * (i-1);
//   }
//   return sum;
// }
// function devide(num){
//   var sum = 0;
//   for (var i = num ; i >=1 ; i--){
//     sum = i / (i-1);
//   }
//   return sum;
// }

// function factorial(num,opt){
//   var obj = {"+" : add(num), "-": subst(num) ,"*": multi(num) , "/" : devide(num)}
// return obj[opt];
// }

// console.log(factorial(5,"*"));

// function fib(n){
//   var arr = [0,1];
//   for (var i = 2; i <= n;i++){
//     arr.push(arr[i-2] + arr[i-1]);
//     console.log(arr);
//   }
//   return arr[n];
// }
// console.log(fib(4));

// function secondToLast(arr){
//   for (var i = 0;i < arr.length;i++){
//     if (arr.length >= 4){
//       return arr[arr.length - 2];
//     }
//     else{
//       return null;
//     }
//   }
// }
// console.log(secondToLast([42, true, 4, "Liam", 7]));


// function nthTolast(arr,num){
//   for (var i = 0; i < arr.length; i++){
//     if (arr.length >= 5){
//       return arr[arr.length - num];
//     }
//     else{
//       return null;
//     }
//   }
// }
// console.log(nthTolast([5,2,3,6,4,9,7],3))



// function doubletrouble(arr){
//   var newarr = [];
//   for (var i = 0; i < arr.length ; i ++){
//     newarr.push(arr[i]);
//     newarr.push(arr[i]);
//   }
//   return newarr;
// }
// console.log(doubletrouble([3,4, "Ulysses", 42, false]));


// function doubletrouble(arr){
//   for (var i = 0; i < arr.length; i ++){
//     if(i % 2 == 0){
//       arr[i+1] = arr[i];
//     }
//   }
//   return arr;
// }
// console.log(doubletrouble([3,4, "Ulysses", 42, false]));

// function fib(n){
//   if (n == 0 || n == 1){
//     return n;
//   }
//   return fib(n-2) + fib(n-1);
// }
// console.log(fib(5));