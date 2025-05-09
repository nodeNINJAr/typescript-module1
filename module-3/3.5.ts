{
// access modifier  
class BankAccount {
    public readonly id:number;
    public name:string;
    // amara private use korle child kinba parents kokhoni access pabo na
    // protected use korle just child er bitore access pabo
    protected _balance :number; // to use private   follow a convention  _ to define property name

// 
constructor(id:number, name:string,balance:number){
      this.id=id;
      this.name= name;
      this._balance= balance;
}

// methood
public addDeposit(amount:number){
  this._balance= this._balance + amount  
}

// 

public getBalnce(){
    return this._balance;
}

// 
getHiddenMethod(){
    return this.getBalnce()
}


}

// 
class StudentAccount extends BankAccount{
    test(){
        this._balance
    }
}


















// 
const goridManusherAccount = new BankAccount(111, 'Mr. gorib', 20);
 goridManusherAccount.addDeposit(100);
 const myBalance = goridManusherAccount.getBalnce();
 console.log(myBalance);


// 
}