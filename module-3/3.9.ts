{
// idea
 interface Vehicle1{
    startEngine():void;
    stopEngine():void;
    move():void;
 }
// real implementation
class Car implements Vehicle1 {
    startEngine(): void {
        console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
        console.log(`I am stoping the car engine`);
    }

    move(): void {
        console.log(`I am moving the car`);
    }

    test(){
        console.log(`i am just testing`);
    }
}

// 

const toyotaCar = new Car();

toyotaCar.startEngine();


// abstract class
abstract class Car2{
    abstract  startEngine(): void 
    abstract  stopEngine(): void 
   abstract move(): void 
}

class ToyotaCar extends Car2{
    // 
    startEngine(): void {
        console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
        console.log(`I am stoping the car engine`);
    }

    move(): void {
        console.log(`I am moving the car`);
    }
}


//  const hondaCar = new Car2();
//  hondaCar.startEngine();




// 
}