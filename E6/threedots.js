const ages = [12, 14, 18, 20, 22]
const ages2 = [11, 17, 21]
const ages3 = [18, 48, 32]

const allages = ages.concat(ages2).concat(ages3);
console.log(allages);


const allAges = [...ages, ...ages2, 5, ...ages3];
console.log(allAges);

const business = 650; 
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib)
console.log(maximum)

const takaPoisa = [650, 450, 250];

const maximum2 = Math.max(...takaPoisa);
console.log(maximum2)
