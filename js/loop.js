// while loop


// var a = 1;
// while(1 <= 10){
//     console.log(a);
//     a ++ ;
// }



// for loop


// for (var j=1; j<=10; j++){
//     console.log(j);
// }

// console.log("new loop")

// for (var k=5; k>=1; k--){
//     console.log(k)
// }


// break statement

// for (var i =1 ; i<=5; i++){
//     if (i == 3){
//         break; //break statement
//     }
//     console.log(i)
// }


//continue and skip statement

// for (var k=1; k<=5; k++){
//     if (k == 4){
//         continue;
//     }
//     console.log(k);
// }

// console.log("End first loop");

// for(var i=1; i<=10; i++){
//     if (i%2 ==1){
//         continue;
//     }
//     console.log(i);
// }

// string loop

// let name = 'Mostasim'

// for (var i=0; i<=7; i++){
//     console.log(`Index : ${i}`);
//     console.log(name[i]);
// }

// let char = 'Hello Bangladesh'
// let len = char.length
// for(var i=0; i<len; i++){
//     console.log(`Index : ${i}`)
//     console.log(char[i])
// }

// array loop

// let food = ['Banana', 'Cake', 'Ice Cream']
// let len = food.length
// for (var i=0; i<len; i++){
//     console.log(`Index : ${i}`)
//     console.log(food[i])
// }


// for-in => String/array/object
// for-off => String/array

let food = ['Banana', 'Cake', 'Ice Cream']
let char = 'Hello Bangladesh'
// object has no index system
let person = {
    name : 'Atif Aslam',
    profession : 'Singer',
    country : "Pakistan",
    age : 40,
}

for (var x in food){
    console.log(x);
}
console.log('new loop ')

for (var x in char){
    console.log(`index : ${x} item ${char[x]}`);
}


for(var y in food){
    console.log(`Index : ${y} and item ${food[y]}`);
}
console.log(" ")
for (var i of food){
    console.log(i);
}

console.log(" ")
for(var i in person){
    console.log(` ${i}: ${person[i]}`);
}