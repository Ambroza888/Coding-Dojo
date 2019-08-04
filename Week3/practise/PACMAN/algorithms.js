// // function removeINX(arr,inx){
// //   var newarr = [];
// //   var count = 0;
// //   for (var i = 0; i<arr.length;i++){
// //     if (i == inx){
// //       continue;
// //     }
// //     else if (i > inx){
// //       newarr[i-1] = arr[i];
// //       console.log(newarr);
// //     }
// //     else{
// //       newarr[i] = arr[i];
// //       // console.log(newarr);
// //     }
// //   }
// //   return newarr;
// // }
// // removeINX([1,2,3,4,5,6],2);

// function insertValue(arr,inx,val){
//   var newarr = [];
//   for (var i = 0 ; i < arr.length-1;i++){
//     if (i = inx){
//       newarr[i]= val;
//     }
//     else if (i < inx){
//       newarr[i] = arr[i];
//       console.log(newarr);
//     }
//     else{
//       newarr[i+1] = arr[i];
//       console.log(newarr);
//     }
//   }
// }
// insertValue([1,2,3,4,5,6,7],2,10);


// function popFront(arr){
//   for(var i = 0;i < arr.length-1; i++){
//     arr[i] = arr[i+1]
//     // console.log(arr);
//   }

//   arr.length = arr.length-1;
//   return arr;
// }
// console.log(popFront([1,2,3,4,5,6]));

// function popFrontnewarr(arr){
//   var newarr = [];
//   for (var i =0; i < arr.length-1;i++){
//     newarr[i] = arr[i+1]
//     console.log(newarr)
//   }
//   return newarr;
// }
// console.log(popFrontnewarr([1,2,3,4,5,6]));

// function changeFront(arr,val){
//   var newarr = [];
//   newarr[0] = val;
//   for (var i = 0 ; i < arr.length;i++){
//     newarr[i+1] = arr[i];
//     console.log(newarr);
//   }
//   return newarr;
// }
// changeFront([1,2,3,4,5,6],10)

// function ziping(arr1,arr2){
//   var obj = {};
//   for (var i = 0; i <arr1.length;i++){
//     obj[arr1[i]] = arr2[i];
//     console.log(obj);
//   }
//   return obj;
// }
// ziping([1,2,3,4,5],[10,20,30,40,50]);

// var pa = {};
// pa["veso"] = "WA";
// pa["street"] = "13026";
// pa["mai te shvanah"] = "papichulio";

var veso = {
  name: "veso",
  state: "WA",
  street: "13026",
  room: "small one"
}

// function unzip(obj){
//   var unobj = {keys:[],vals:[]};
//   for (var k in obj){
//     unobj[keys.push(k)];
//     unobj[vals.push(obj[k]];
//   }
//   return unobj;
// }
// console.log(unzip(veso));
var ede = "National Aeronautic Space Administration"

// function acronyms(string){
//   var str = [];
//   var newstring = string.split("");
//   str.push(newstring[0]);
//   for (var i = 1; i <newstring.length;i++){
//     if (newstring[i] == "-" || newstring[i]== " "){
//       str.push(newstring[i+1]);
//       console.log(str);
//     }
//   }
//   str.join();
//   // console.log(str);
//   return str;

// }

// function acronyms(string){
//   var str = [];
//   var workingstr = string.split("");
//   str.push(workingstr[0]);
//   for (var i = 1; i < workingstr.length;i++){
//     if (workingstr[i] == " " || workingstr[i] == "-"){
//       str.push(workingstr[i+1]);
//       // console.log(str);
//     }
//   }
//   str.join();
//   return str;
// }
// console.log(acronyms(ede));

// function palindrome(word){
//   word = word.toLowerCase();
//   // console.log(word);
//   for (var i = 0; i < word.length/2;i++){
//     // console.log(word[i]);
//     if ( word[i] == word[word.length-1-i]){
//       console.log(word[i]);
//       continue;
//     }
//     else{
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palindrome("Madam"));


// function superVocalic(string){
//   var str = string.toLowerCase();
//   var vawl = ["a","e","i","o","u"];
//   for (var i = 0; i< vawl.length; i++){
//     if (str.includes(vawl[i])){
//       continue;
//     }
//     else{
//       return false;
//     }
//   }
//   return true;
// }
// console.log(superVocalic("sequoia"));


function validPareses(string){
  var arr = [];
  var open = {
    "(":")",
    "{":"}",
    "[":"]"
  };
  var close = {
    ")":"(",
    "}":"{",
    "]":"["
  };
  for (var char of string){
    if(open[char]){
      arr.push(char);
    }
    else if (close[char]){
      if (close[char] === arr.pop()){
        return false;
      }
    }
  }
  return arr.length === 0;
}
  console.log(validPareses("[[]]"));