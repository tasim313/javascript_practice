const person = {name: "Jack William", age: 17, job: 'facebooker', gfName: 'Ema watson', address: "kochu Khet", phone:'01717112211', friends:['Tom hanks', 'Tom cruise', 'Tom yarn']}
// const gfName = person.gfName;
// const phone = person.phone;
const { phone, gfName, salary, address } = person
console.log(gfName, phone, salary, address)
console.log(address, gfName,salary, phone)
console.log(gfName, phone)

const friends = ['Sakib', 'Tamim', 'Mushi', 'Imrurl', 'Nurul', 'Akbor', 'Shamim', 'Taskin']
const [choto, boro, ...restfriends] = friends;
console.log(choto, boro)
console.log(restfriends)

const complexObject = {
    name: "abc",
    info:{
        address: 'Kolabagan',
        leader: 'Tiger'
    }
}

const {leader} = complexObject.info;
console.log(leader);