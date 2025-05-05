{


    // destructuring
const user ={
    id:666,
    name:{
        firstName:'mehedi',
        middleName:'hasan',
        lastName:'ridoy'
    },
    contactNo:'017999999999',
    address:'bangladesh',
}

const {contactNo,name:{middleName:midname},} = user;

// array destructuring

const myFriends = ['chandler', 'joey','ross','rachel']

const [ , b,...rest] = myFriends;












}