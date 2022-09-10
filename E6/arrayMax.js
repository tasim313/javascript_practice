var marks = [45, 475,32, 986, 45, 4, 34,54, 32]
var max = marks[0];

for (var i=0; i<marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element
    }
}

console.log("Highest value is : ", max);