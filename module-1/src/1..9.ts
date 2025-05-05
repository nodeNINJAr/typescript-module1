{

//**type alias write like this
type Student ={
    name:string;
    age:number;
    gender:string;
    // optional type if the item is not available
    contactNo?:string;
    address:string;   
}


// ** we can also write type alias like this
// const student1 :{
//     name:string;
//     age:number;
//     gender:string;
//     contactNo:string;
//     address: string;
// } = {
//     name:'mehedi',
//     age:50,
//     gender:'male',
//     contactNo:'01998217980',
//     address:'ctg'
// }

// 
const student1:Student = {
    name:'mehedi',
    age:50,
    gender:'male',
    contactNo:'01998217980',
    address:'ctg'
}

// 
const student2:Student = {
   name:'mir',
   age:50,
   gender:'male',
   address:'dhaka'
}

// type alias

type UserName = string
type IsAdmin = boolean

const userName : UserName ='mh ridoy'
const isAdmin : IsAdmin = true



// type in function
type Add = (num1:number, num2:number) => number
const add:Add = (num1, num2)=>num1+num2



















}