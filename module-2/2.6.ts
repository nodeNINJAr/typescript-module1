{
//its called constraints means defauld extended type
 // **
 const addCourseToStudent =<T extends {id:number; name:string;email:string;devType:string}> (student:T)=>{
    const course = 'Next level development'
    return {
       ...student, 
       course
    }
}


    const student3 = addCourseToStudent({id:66, name:"mr z",email:'kr@gmail.com', devType:'NLDW'})


// 
const student1 = addCourseToStudent<{
      id:number;
      name:string;
      email:string;
      devType:string;
}>({
    id:222,
    name:'Mr.X',
     email:'X@gmail.com', 
     devType:'NLDW'
    });
const student2 = addCourseToStudent({
    id:555,
    name:'Mr.Y',
    email:'Y@gmail.com',
    devType:'NLDW',
    hasWatch:'Apple Watch'
    })


}