console.log('Select Option : \n1. Add \n2.Subtract \n3.Multiply \n4. Divide')

var number1 = prompt("Enter Your First Number : ")
var number2 = prompt("Enter Your Second Number : ")
var option = prompt('Choise an operation : ')
var result = null

number1 = parseInt(number1)
number2 = parseInt(number2)
option = parseInt(option)

var number1Con = isNaN(number1)
var number2Con = isNaN(number2)
var optionCon = isNaN(option)



if (number1Con || number2Con || optionCon){
    console.log ('Invalid Input !')
}else{
    switch (option) {
        case 1: result = number1 + number2
            break;
        case 2 : result = number1 - number2
             break;
        case 3 : result = number1 * number2
             break;
        case 4 : result = number1 / number2
             break;
        default:
            break;
    }
    if (result == null){
        console.log('No result !')
    }else{
        console.log("Result :" + result)
    }
}

