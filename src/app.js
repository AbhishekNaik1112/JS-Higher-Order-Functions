const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(start, end){
  let modifiedFood = [];
  for(let foodItem=start; foodItem<end-1; foodItem++){
      modifiedFood.push(foods[foodItem]);
  }
  return modifiedFood;
}
// Progression 2:
function spliced(){
  foods.splice(2,0,"noodles","icecream");
  return foods;
}


// Progression 3:
function isEven(number){
  return number%2==0 ? true:false;
}

function isPrime(number){
  for(let i = 2, s = Math.sqrt(number); i <= s; i++)
      if(number % i === 0) return false; 
  return number > 1;
}

function checkNumber(numberArray, operation){
  modifiedNumberArray = numberArray.filter(operation);
  return modifiedNumberArray;
}
// Progression 4:
function reject(numberArray){
  let nonPrimeNumberArray = [];
  numberArray.forEach(number=>{
      isPrime(number) ? null : nonPrimeNumberArray.push(number); 
  })

  return nonPrimeNumberArray;
}

function nonPrime(numberArray){
  ans = reject(numberArray);
  return ans;
}

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
  

