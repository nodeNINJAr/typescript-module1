{
// interface - generic

interface Developer<T, X = null> {
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear:number
    }
   smartWatch : T;
   bike?:X;

}


// 

type EmilabWAtch = {
  brand:string;
  model:string;
  display:string;
}
const poorDeveloper : Developer <EmilabWAtch > = {
   name:'Mehedi',
   computer:{
     brand:'Asus',
     model:'X-255UR',
     releaseYear:2015
   },
   smartWatch :{
    brand:'Emilab',
    model:'kx66',
    display:'amoled'
   }
};


// interface appleGadgth
interface AppleWAtch {
  brand:string;
  model:string;
  heartTrack:boolean,
  sleepTrack:boolean,
}

interface YamahaBike {
  model:string;
  engineCapacity:string
}


// rich developer
const richDeveloper : Developer <AppleWAtch, YamahaBike> = {
    name:'Rich Dev',
    computer:{
      brand:'Hp',
      model:'Y-25UR',
      releaseYear:2018,
    },
    smartWatch :{
     brand:'Apple Watch',
     model:'Something',
      heartTrack:true,
     sleepTrack:true,
    }
 };
// 





}