
function reverseString(str){
    var reverse = "";
   for(var i=0; i<str.length; i++){
       var char = str[i];
       reverse = char + reverse;
   }
   return reverse;
}


var statement = " Hello Bangladesh.";

var convertreverseString = reverseString(statement)
console.log(convertreverseString);
