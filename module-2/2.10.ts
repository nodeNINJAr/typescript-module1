{
// mapped types 
const arrayOfNumbers : number[]  = [1,5,7]


// const arrayOfString : String[] = ['1','5',' 7']
const arrayOfString:string[] = arrayOfNumbers.map((num)=>
                          num.toString()
);
console.log(arrayOfString);
type AreaNumber ={
    height:number;
    width:number;
}


type Height = AreaNumber['height']
// type AreaString ={
//     height:string;
//     width:string;
// }




// map type look up
type AreaString<T> = {
    [key in keyof T]: T[key]
 }
 
const area1 : AreaString<{height:string; width:number }> = {
    height:'100',
    width:50
}



}