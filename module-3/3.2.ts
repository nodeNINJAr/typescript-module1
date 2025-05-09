{
// oop - inheritence  means child can inheritence from parenrt


class parent {
    name:string;
    age:number;
    address:string;


    constructor(name:string, age:number, address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numberOfHour:number){
        console.log(`${this.name} will sleep for ${numberOfHour}`);
    }



}







class Student extends parent {
    
constructor(name:string, age:number, address:string){
    // for access from child to parents class property
    super(name, age, address);
}


}

const student1 = new Student('hasan', 20, 'uganda')
student1.getSleep(5)
// 

class Teacher extends parent{
    designation:string;

// constuctor

constructor(name:string, age:number, address:string, designation:string){
       super(name,age, address)
     this.designation = designation;
}

takeClass(numOfClass: number){
    console.log(`${this.name} will take ${numOfClass}`);
}

}

const teacher1 = new Teacher("ami",28,'dhaka',"english teacher");
teacher1.getSleep(20);
teacher1.name='alim'












}