{
// type guards
type Alphanumaric = string | number;


// type of ---> type guard
const add = (param1:Alphanumaric, param2:Alphanumaric):Alphanumaric=>{
    // 
   if(typeof param1 ==='number' && typeof param2 ==='number'){
    return param1 + param2
   }else{
    return param1.toString() + param2.toString()
   }
   
} 
// 

// in guard

// 
type NormalUser ={
    name:string
}

type AdminUser ={
    name:string;
    role:'admin'
}

const getUser = (user:NormalUser | AdminUser) =>{
    if('role' in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`);
    }else{
        console.log(`My name is ${user.name} and my role is user`);
    }
}


// 
const normalUser ={
   name:"Mr. Normal User"
}

const adminUser:AdminUser ={
    name:"Mr. Admin ",
    role:'admin'
}

getUser(adminUser)





}