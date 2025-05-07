{
// 
 

//type vs interface
 type User1 ={
    name:string;
    age:number;

 };

type UserWithRole1 = User1 & {role : string}

const user1: UserWithRole1 ={
    name:'mehedi',
    age:100,
    role:'admin',
}


 type rollNumber = number

//  interface
 interface User2 {
    name:string;
    age: number;
 }

// 
interface UserWithRole2 extends User2{
    role:string;
}

 const user1: UserWithRole2 ={
    name:'mehedi',
    age:60,
    // role:'manager'
 }


//  js ---> object, array --> object function --> object
// array declear in type
type Roll1 = number[];


// array decclear in interface
interface Roll2 {
 [ index : number] : number
}

const rollNumber:Roll2 = [1,2,6];
// better for cleaner code
type Add=(num1: number, num2:number)=> number
// 
interface Add2 {
    (num1:number, num2:number): number
}

// 
const add:Add2 =(num1 , num2) => num1 + num2












// 
}