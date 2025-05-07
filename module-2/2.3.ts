{
  
// generic type dynamic type
type GenericArray<T> = Array<T>


// const rollNumbers: number[] = [2,6,7];
const rollNumbers: GenericArray<number> = [2,6,7]; // generic type

// const mentors: string[] = ['mr.x', 'mr.y', 'mr.z'];
const mentors: GenericArray<string> = ['mr.x', 'mr.y', 'mr.z']; // generic type

// const boolArray : boolean[] =[true, false, true];
const boolArray : GenericArray<boolean> =[true, false, true] // generic type


// array of obj using dynamic type
const user: GenericArray<{name:string; age:number}> = [
    {
        name: 'mehedi',
        age:100,
    },
    {
        name:'ridoy',
        age:50,
    }
]

// generice touple
type GenericTuple<X,Y> =[X, Y]
const manush : GenericTuple<string, string> = ['mr.x', 'mr.y']

const UserithID : GenericTuple<number, {name:string, email:string}> = [125, {
        name:'mehedi',
        email:'ha@gmail.com'
    }]
















}