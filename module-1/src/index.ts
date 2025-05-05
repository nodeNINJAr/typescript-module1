{

    // normal function in typescript
function add(num1:number, num2:number):number/* return type */  {
    return num1+num2;
}
add(2,2); 

// arrow 
const addArrow =(num1:number, num2:number):number => num1+num2

// function in object is called method
const poorUser={
   name:'mehedi',
   balance:0,
   // this function called method
   addBalance(balance:number):string{
       return `My new balance is : ${this.balance + balance}`
   }
}

const arr:number[] = [1,4,10]
const newArray = arr.map((elem:number)=> elem*elem);


}