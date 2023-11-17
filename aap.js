const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:



// Progression 2:



// Progression 3:



// Progression 4:



// Progression 5:

const isEvenUsingLambda = number => number%2==0;

// Progression 6:

function square(number){
    return number*number;
}

function findSquareOfNumbers(myArray){
    let squaredArray = myArray.map(square);
    return squaredArray;
}

// Progression 7:

function multiply(myArray){
    return myArray.reduce((mul, number)=>{
        return mul*number;
    },1);
}

function sumOfSquares(myArray){
    return myArray.map(square).reduce((sum,number)=>{
        return sum+number;
    },0)
}
