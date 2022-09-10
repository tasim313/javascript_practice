var numbers = [1,2,3,4,5,4,3,56,4,67,43,56,43,21]

var uniquenumber = []

for(var i=0; i<numbers.length; i++){
    var element = numbers[i];
    var index = uniquenumber.indexOf(element)
    if (index == -1){
        uniquenumber.push(element);
    }
}
console.log(uniquenumber);