{
 // polimorfisom is shoing different different ruup
class Person {
    getSleeep(){
        console.log(`i am sleeping for 8 hour per day`);
    }
}

// 
class Student extends Person {
    getSleeep(){
        console.log(`i am sleeping for 7 hour per day`);
    }
}
// 

class Developer extends Person {
    getSleeep(){
        console.log(`i am sleeping for 6 hour per day`);
    }
}
// 
const getSleepHours =(param:Person)=>{
   param.getSleeep()
}
// instance
const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();
getSleepHours(person2)


class Shape{
    getArea():number{
        return 0;
    }
}

// ** pi* r*r
class Circle extends Shape{
    radius:number;
    constructor(radius:number){
        super();
        this.radius = radius;
    }

    // 
    getArea(): number {
       return Math.PI* this.radius * this.radius
    }
}

// area

class Rectangle extends Shape{
       height:number;
       width:number;

    constructor(height:number, width:number){
        super();
        this.height =height;
        this.width = width
    }

    // 
    getArea(): number {
       return this.height * this.width;
    }
}



const getShapeArea =(param:Shape)=>{
    console.log(param.getArea());
}


// 
const shape1 = new Shape();
const shape2 = new Circle(10)
const shape3 = new Rectangle(10,20)
 getShapeArea(shape3)

// 
}