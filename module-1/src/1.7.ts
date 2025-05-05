{

// spreed oparetor
// rest oparetor
// destructuring


// learn spreed oparetor

const bros1 : string[]= ['mir', 'firoz','mizan'];
const bros2 : string[] = ['tonmoy', 'nahid', 'rahat']

bros1.push(...bros2);

const mentors1 = {
    typescript:'mezba',
    redux:'mir',
    dbms:'mizan'
}

const mentors2 = {
    prisma:'firoz',
    next:'tonmoy',
    cloud:'nahid',
}
 const mentorList = {
    ...mentors1,...mentors2
 }

//  rest oparetor
const greetFriends = (...firends:string[]){
    return `my all firends ${firends}`
}

greetFriends('ami', 'tmi','jemi','oremi' ,'jmi' )

}