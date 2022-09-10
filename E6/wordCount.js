var spech ="I am good person. I don't   snore at night   ";
console.log(spech.length);
var count = 0;
for (var i=0; i<spech.length; i++){
    var char = spech[i];
    if (char == " " && spech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);