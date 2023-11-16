const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
const modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

// Progression 2:
function spliced() {
  foods.splice(2, 0, "noodles", "icecream");
  return foods;
}
console.log(spliced());



// Progression 3:


// Progression 4:


// Progression 5:
const isEvenUsingLambda = (num) => num % 2 === 0;
console.log(isEvenUsingLambda(4));
console.log(isEvenUsingLambda(7)); 

// Progression 6:
function findSquareOfNumbers(array) {
    return array.map((num) => num * num);
  }
  console.log(findSquareOfNumbers(myArray));
  
// Progression 7:
function multiply(array) {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);  //reduce
  }
  console.log(multiply(myArray)); 

  function sumOfSquares(array) {
    return array.reduce((sum, num) => sum + num * num, 0);    //map with reduce
  }
  console.log(sumOfSquares(myArray)); 
  

