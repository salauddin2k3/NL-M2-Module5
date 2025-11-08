

const poorUser = {
    Name: "Ahmed",
    Balance: 0,
    addBalance(newBalance: number): number{
        const totalBalance = this.Balance + newBalance;
        return totalBalance;
    },
};

// console.log(poorUser.addBalance(100));

// console.log(poorUser);


const arr : number[] = [2, 3, 4, 5, 6, 7];

const squireArr : number[] = arr.map((element : number) => element * element);

// console.log("Arr Is:", arr, " : ", "Squire Array is:", squireArr);


//* Spread Operator

const friend1 : string[] = ['Abul', 'Kabul', 'Babul'];

const friend2 : string[] = ['Hablu', 'Bablu', 'Dablu'];

const friend3 : string[] = ['Kodu', 'Modhu', 'Jodu'];

const friendsSpread = [...friend1, ...friend2, ...friend3];

// console.log(friendsSpread);


//* Rest operator

// const restOperator = (...friends : string[]) => {
//     friends.forEach((friend : string) => console.log(friend))
// };

// restOperator('Abul', "dabul")


//* Destructuring > array

const deArrFriends: string[] = ['abul', 'kabul', 'Babul'];

const [, a] = deArrFriends;
const [, , b] = deArrFriends;

// console.log(b, a);

//* Destructuring > obj

const deObjUser = {
    id: 101,
    name: {
        firstName : 'abul',
        lastName: 'mia',
        middleName: {
            fromFather: 'Dabluuu',
            fromMother: 'Babluuuuu'
        }
    }

};

// const {name : {firstName}} = deObjUser;
const {name : {middleName : {fromMother}}} = deObjUser;

// console.log(id);
// console.log(firstName);
// console.log(fromMother);



//* Union and Intersection

type User1 = {
    Name: string,
    Age: Number,
};

type User2 = {
    Address: string,
    Contact: Number,
};

type AllUser = User1 | User2;

const user : AllUser = {
    Address: 'Salah',
    Contact: 1571,
}







