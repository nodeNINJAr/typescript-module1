{

// function with generics
const createArray = (param:string) :string[] =>{
    return [param]
}

const createArrayGeneric = <T>(param:T) :T[] =>{
    return [param]
}

const res1 = createArray('bangladesh');
const resGeneric = createArrayGeneric<string>('bangladesh');

// **
type User = {id:number; name:string};
const resGenericObj = createArrayGeneric<User> ({
    id:222,name:'Mr. Pashan'
});

}

{

    // function with generics tuple
    // const createArrayTuple = (param:string) :string[] =>{
    //     return [param]
    // }
    
    const createArrayGenericTuple = <T, Q>(param1:T, param2:Q):[T, Q] =>{
        return [param1, param2
            
        ]
    }
    


    const resGenericTuple = createArrayGenericTuple<string,number>('bangladesh', 122);
    const resGenericTuple1 = createArrayGenericTuple<string,{name:string}>('bangladesh', {name:'Asia'});
    // **
     const addCourseToStudent =<T> (student:T)=>{
         const course = 'Next level development'
         return {
            ...student, 
            course
         }
     }
    
   const student1 = addCourseToStudent({name:'Mr.X', email:'X@gmail.com', devType:'NLDW'});
   const student2 = addCourseToStudent({name:'Mr.Y',email:'Y@gmail.com', devType:'NLDW', hasWatch:'Apple Watch'})

    }