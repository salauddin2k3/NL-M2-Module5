

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

const restOperator = (...friends : string[]) => {
    friends.forEach((friend : string) => console.log(friend))
};

restOperator('Abul', "dabul")


