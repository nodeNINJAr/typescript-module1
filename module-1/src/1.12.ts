{
    // nullable type 
    const searchName =(value:string | null)=>{
           if(value){
              console.log('searching');
           }else{
              console.log('there is nothing to search');
           }
    }

  searchName(null)




//   unknon type of
const getSpeedMeterPerSecond = (value:unknown)=>{
      if(typeof value === 'number'){
          const convertedSpeed =(value * 1000)/3600
          console.log(`rhe speed is ${convertedSpeed} ms^-1`);
      }else if(typeof value === 'string'){
         const  [res, unit]= value.split(' ');
         const convertedSpeed = (parseFloat(res)* 1000/ 3600);
         console.log(`The Speed Is ${convertedSpeed} ms^-1`);
      }else{
        console.log('wrong input');
      }
}

getSpeedMeterPerSecond(null)


// never type thats means its not returning anything

const throwError =(msg:string):never=>{
    throw new Error(msg)
}
throwError('error ho geyea')
}