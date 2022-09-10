var n = parseInt(prompt("Enter the number of terms: "))
var sum = 0
var series = ''

for (var i=1; i<=n; i++){
    sum += i*i
    series += (i*i).toString()
    if (i == n){
        continue
    } 
    series += '+'
}

console.log(`${series} = ${sum}`)
