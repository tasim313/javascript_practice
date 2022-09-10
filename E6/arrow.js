    // function doubleIt(num){
    //     return num*2;
    // }

    // const doubleIt = function(num){
    //     return num*2;
    // }

    const doubleIt = num => num *2;

    const result = doubleIt(50);
    console.log(result);

    const add = (x, y) => x + y;
    
    const result2 = add(50 ,70)
    console.log(result2);

    const give =() => 5;
    const result3 = give();
    console.log(result3);


    const doMath = (x, y) =>{
        const sum = x + y;
        const diff = x - y;
        const result = sum * diff;
        return result;
    }

const result4 = doMath(100, 70)
console.log(result4)