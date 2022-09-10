
function checkPrimeNumber(n){
    for (i=2;   i<n-1 ; i++){
        console.log(i, n%i); 
        if (n%i ==0){
            return ('Not a  prime number');
            
        }
        else{
            return ('Number is prime number');
        }
    }
}

var result = checkPrimeNumber(11);
console.log(result);