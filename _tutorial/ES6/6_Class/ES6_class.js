// Class

class Person {
    constructor(region_, gender_) { // create and initialize class instance 
                                    //  - region_, gender_ : property
        this.region = region_
        this.gender = gender_
    } 

    greetings(val = 'an-nyeong') { //function
        console.log(val)
    }
}

let korean = new Person('Korea', 'male')
console.log(korean)
korean.greetings()


// Expected
// Person {region: 'Korea', gender: 'male'}
// an-nyeong

class American extends Person {
    constructor(region_, gender_, language_){
        super(region_, gender_) // super : follow parent's initializing rule
        this.language = language_
    }

    greetings(val = 'hello') {
        console.log(val)
    }
}

let american = new American('USA', 'female', 'English')
console.log(american)
american.greetings()

// Expected
// American {region: 'USA', gender: 'female', language: 'English'}
// hello