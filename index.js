console.log("testing js");
console.log("Hello \n World");

// strings

let string = "abcd"

console.log(string.endsWith("d"));
console.log(string.toLocaleUpperCase());
console.log(string.substring(1));
console.log(string.substring(1, 2));

// objects using keys and values

const person = {
    name: "Diane Kemunto",
    age: 24,
    sign: "Libra",  
};

console.log(person);
console.log(person.age);
console.log(person.name);

const map = new Map();
map.set(456, "hello");
map.set(123, "world");
console.log(map.get(123));
console.log(map.size);

// arrays

let array = [1,2,3,4,6];
array.push(7);

console.log(typeof array);

// functions

function addTwo(number = 5){
     return number + 2;
}

console.log(addTwo(1));

function callFunction(func, param){

    console.log("+++++++++++++++++++++++++++++++++++++++++");
    console.log(func(param))
    ;

}

// callFunction(addTwo, 10);
console.log(callFunction(addTwo, 10));


// loops

for (let i = 0; i < 4; i++){
    console.log(i);
    console.log("===================");

    if (i == 1){
        continue
    }

    console.log(i);
}

const obj = {
    name: "Justus",
    course: "Frontend Expert"
};

for (oo in obj){
    console.log(oo, obj[oo]);
}

// conditionals

const myNym = 2;

switch(myNym){
    case 1:
        console.log("it was 1");
        break;

    case 2:
        console.log("it was 2");
        break;

    default:
        console.log("default");


}