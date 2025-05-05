{
// union type like or ||

// type FrontendDeveloper = 'fakibazDev' | 'juniorDeveloper'
// type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

// type Developer = FrontendDeveloper | FullStackDeveloper


// const newDeveloper : FrontendDeveloper ='juniorDeveloper'

// for better readability need to use Capitalize type name
type User = {
    name:string;
    email:string;
    gender:'male' | 'female' ;
    bloodGroup : '0+' | 'A+' | 'AB+'
}

const user1:User ={
    name:'mehedi',
    email:'mehedi@gmail.com',
    gender:'male',
    bloodGroup:'AB+'
}

// inter section type like and &&
type FrontendDeveloper = {
    skills:string[];
    designation1:'Frontend Developer'
}

type BackendDeveloper = {
    skills:string[];
    designation2:'Backend Developer'
}
type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

 const fullStackDeveloper:FullStackDeveloper ={
    skills:['HTML','CSS','EXPRESS'],
    designation1:'Frontend Developer',
    designation2:'Backend Developer'
 }





}