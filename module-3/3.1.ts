{

// oop
class Animal{
//    public name:string;
//    public species:string;
//    public sound:string;

// parameter properties for simpler code
constructor(public name:string,public species:string, public sound:string)
{
//   this.name = name;
//   this.species= species;
//   this.sound= sound;
}
// methood
makeSound(){
    console.log(`the ${this.name} says ${this.sound}`);
}


}

// instance
const dog = new Animal('German shephard', 'dog','buk buk')
const cat = new Animal('Red cat', 'cat','mea mea')
dog.makeSound();
cat.makeSound()



}