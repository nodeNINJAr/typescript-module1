{
//  generic constraint With keyOff operator
type Vehicle ={
    bike:string;
    car:string;
    ship:string;
}

// 
type Ownor = 'bike' | 'car' | 'Ship' // manually

// same like manually When We need to create union type we can write this
type Ownor2 = keyof Vehicle

const person1 : Ownor ="bike"
const person2 : Ownor2 ='ship'


const getPropertyValue = <X,Y extends keyof X> (obj:X, key:Y)=>{
    return obj[key];
};




const user ={
    name:'mr persian',
    age:25,
    address:"dhaka"
}

const car ={
    model:'toyota 100',
    year:200
}

const result1 = getPropertyValue(car,'model')


// user['age'] =26






}