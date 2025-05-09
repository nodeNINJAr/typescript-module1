{
// intanceof guard
class Animal{
    name:string;
    species:string;


constructor(name:string, species:string){
    this.name=name;
    this.species= species;
}

makeSound(){
    console.log('I am making sound');
}


}


// clild
class Dog extends Animal{
    constructor(name:string, species:string){
        super(name, species);
    }

    makeBark(){
        console.log('i am barking');
    }
}



class Cat extends Animal{
    constructor(name:string, species:string){
        super(name, species);
    }

    makeMea(){
        console.log('i am meaing');
    }
}

// smart way tye handle korar jonno chailr amra function use korte pari
const isDog =(animal:Animal) : animal is Dog=>{
    return animal instanceof Dog;
}
// 
const isCat =(animal:Animal):animal is Cat=>{
   return animal instanceof Cat;
}


// 
const getAnimal =(animal:Animal) =>{
    if(isDog(animal)){
        animal.makeBark();
    }else if(isCat(animal)){
        animal.makeMea();
    }else{
        animal.makeSound()
    }
}



// instance
const dog = new Dog('Dog bhai','Dog');
const cat = new Cat('cat Bhai', 'cat');
getAnimal(dog)

}