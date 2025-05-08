{
    // utility types
    // pick what Want to pick
    type Person ={
        name:string;
        age:number;
        email?:string;
        contactNo: string;
    }
    
    type NameAge = Pick<Person, 'name'| 'age'| 'email'>
    //omit what Want to except
    type ContactInfo = Omit <Person, 'name' | 'age'>
    // Required for all data required
    type PersonRequired = Required <Person>

    // partials
    type PersonPartial = Partial<Person>
    // readonly
    type PersonReadOnly = Readonly<Person>
    const person1:PersonReadOnly={
        name:'mr. y',
        age:20,
        contactNo:'017'
    }

    // person1.name='Mr.Yz'

    // Record
    // type MyObj ={
    //     a:string;
    //     b:string;
    // }

type MyObj = Record<string,string> // 1st key cheking and 2nd value type checking
// unknown
const emptyObj :Record<string, unknown> ={}

// 
const obj1 : MyObj ={
     a:'aa',
     b:'bb',
     c:'cc',
     d:'dd'
}


}