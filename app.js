// Input
let a = document.getElementById("input1");

let b = document.getElementById("input2");
let c = document.getElementById("input3");

let d = document.getElementById("input4");


// Output
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");
let output4 = document.getElementById("output4");

let addition = 0, multiply = 0, smallest = 0, largest = 0;

const calculate = () =>{
    // Sum
    sum();
    // Product
    product();
    // Smallest Number
    smallestNumber();
    // Largest Number
    largestNumber();

}

const sum = () => {
    addition = parseInt(a.value) + parseInt(b.value) + parseInt(c.value) + parseInt(d.value);
    // console.log("sum", addition);
    output1.innerHTML = addition; 
}

const product = () =>{
    multiply = a.value * b.value * c.value * d.value;
    // console.log(multiply);
    output2.innerHTML = multiply;
}

const smallestNumber = () =>{
    smallest = Math.min(a.value,b.value,c.value,d.value);
    // console.log(smallest);
    output3.innerHTML = smallest;
}

const largestNumber = () =>{
    largest = Math.max(a.value,b.value,c.value,d.value);
    // console.log(smallest);
    output4.innerHTML = largest;
}

// RESET
const reset = () =>{
    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
}