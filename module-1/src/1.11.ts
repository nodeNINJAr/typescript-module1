{

// ternary oparetor || optinal oprator || nullish coalescing opatretor
const age: number = 15;
 if(age>= 18){
    console.log('adult');
 }else{
    console.log('not adult');
 }
// turnery oparetor
const isAdult = age >= 18? 'adult':'not adult'
console.log(isAdult);
// nullish oparetor means is the data type is null or undefiend then it ill be give the result if not then not giving 
const isAuthenticated = '';

const result1 = isAuthenticated ?? 'guest'
const result2 = isAuthenticated ? isAuthenticated : 'guest'
console.log({result1},{result2});

type User ={
    name:string;
    address:{
        city:string;
        road:string;
        presentAddress:string;
        permanentAddress:string;
    }
}

const user :User = {
    name:'mehedi',
    address:{
        city:'dhaka',
        road:'Aesome road',
        presentAddress:'dhaka'
    }
}


const permanentAddress = user?.address?.permanentAddress ?? 'no permanent Address';
console.log({permanentAddress});

    
}