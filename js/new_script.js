// find the largest number

// var n1 = prompt("First Number : ")
// var n2 = prompt('Second Number : ')
// var n3 = prompt('Third Number : ')

// n1 = parseInt(n1)
// n2 = parseInt(n2)
// n3 = parseInt(n3)

// if (n1 >= n2 && n1 >= n3){
//     console.log(`${n1} is the largest number`)
// }else if(n2 >= n3 && n2 >= n1){
//     console.log(`${n2} is the largest number`)
// }else if (n3 >= n1 && n3 >= n2){
//      console.log(`${n3} is the largest number`)
// }else{
//     console.log('Insert Wrong Number')
// }

//nested if condition

// if (n1 >= n2){
//     if (n1 >= n3){
//         console.log(`${n1} is the largest number`)
//     }else {
//         console.log(`${n3} is the largest number`)
//     }
// }else{
//     if (n2 >= n3){
//         console.log(`${n2} is the largest number`)
//     }else{
//         console.log(`${n3} is the largest number`)
//     }
// }


// console.log("Select an option:\na. option 1 \nb. option 2 \nc. option 3 \nd. option 4")

// choice = prompt()

// var text

// switch (choice) {
//     case 'a': text = 'Option 1 Selected !'
//         break;
//     case 'b' : text = 'Option 2 Selected !'
//           break;
//     case 'c': text='Option 3 Selected !'
//         break;
//     case 'd': text='Option 4 Selected !'
//         break;
//     default:
//         text = 'No option is selected !'
//         break;
// }

// console.log(text)


//Grade calculation

var number = prompt('What is your number?')

number = parseInt(number)

var grade

if (number <= 100 && number >= 80){
    grade = 'A+'
}else if (number < 80 && number >=70){
    grade = 'A'
}else if (number < 70 && number >= 60){
    grade = 'A-'
}else if (number < 60 && number >= 50){
    grade = 'B'
}else if(number < 50 && number >= 40){
    grade = 'C'
}else if (number < 40 && number >=33){
    grade = 'D'
}else if (number <33 && number >=0 ){
    grade = 'F'
}else{
    console.log('Invalid Input')
}

console.log(grade)