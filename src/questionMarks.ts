// Ternary operator --> ?
// Nullish operator --> ?? {nullish shudhu null/undefined er khetre kaj kore}
// Optional chaining



//* Ternary Operator

const ageCalculator = (age: number) => {

    // if(age >= 21){
    //     console.log("You are Eligible");
    // }
    // else {
    //     console.log("You are not Eligible !");
    // }

    const result = age >= 21 ? 'You are Eligible' : 'You are not Eligible !';
    return result;
    
};

// console.log(ageCalculator(25)); 

//* Nullish Operator

const age = undefined;
// const age = 25;

const ageResultNullish = age ?? 'Please give your age'

// console.log(ageResultNullish);


//* Optional Chaining

const user : {
    Name: string;
    Roll: number;
    Address ? : string
} = {
    Name: "Ahmed",
    Roll: 101,
}

const userDetails = user?.Address;

console.log(userDetails);