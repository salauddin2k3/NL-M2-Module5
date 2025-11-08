

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

console.log("Arr Is:", arr, " : ", "Squire Array is:", squireArr);


