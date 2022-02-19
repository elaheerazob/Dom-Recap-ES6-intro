const add =(num1,num2) => num1 + num2;
const sum =add(15,16);
console.log(sum);




const name =() => 'razob';
const getName =name();
console.log(getName);

const number =(num1,num2) =>{
    const sum = num1 + num2;
    const deff = num1 - num2;
    const total = sum + deff;
    return total;
}
const numbetall =number(15,20)
console.log(numbetall);