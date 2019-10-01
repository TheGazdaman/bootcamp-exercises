const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

// console.log(numbers.length); number of items in array = answer 19;

// console.log(numbers[13]); number at position [13] in array = answer -10;

/* var middle = numbers[Math.floor(numbers.length / 2)];

console.log(middle);  */ // výsledek je -31

// console.log(numbers); outputs every number to the console


/* ret = [];

for (var i = 0; i < numbers.length; i++) {
  
  ret.push(numbers[i] * numbers[i]);
}

console.log(ret); */ // tahle funkce udělá druhou mocninu každého čísla v řadě.

/* ret = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    ret.push(numbers[i])
  }
}

console.log(ret);  */ // vybereme pouze čísla se zápornou hodnotou

/* const ret = [];

for (let i = 0; i < numbers.length; i++) {          // Absolute value of an array items
    if (numbers[i]>=0) {
      ret.push(numbers[i])
    } else {
      ret.push(-numbers[i]);
    }
  }

console.log(ret); */

/* const ret = [];

for (let i = 0; i < numbers.length; i++) {          // Numbers divisible by 3;
    if (numbers[i]% 3 === 0) {
      ret.push(numbers[i])
    } 
    };

  console.log(ret); */

/*   const b = [];

  for (let i= 0; i < numbers.length; i++) {     // vyhodí pouze sudá čísla
    if ((numbers[i] % 2) === 0) {
        b.push(numbers[i]);
    }
} console.log(b); */

/* const ret = [];

for (let i= 0; i < numbers.length; i++) {     // odečte od každého čísla pětku a vrátí její hodnotu
  ret.push(numbers[i] - 5) 
} console.log(ret); */



/* const ret = [];

for (let i= 0; i < numbers.length; i++) {     // odečte od každé druhé mocniny čísla číslo 5 a vrátí její hodnotu
  ret.push((numbers[i]*numbers[i]) - 5) 
} console.log(ret); */

//Chybí mi udělat: Output all the numbers which are greater then their predecessor in the array.

//Chybí mi udělat: Output all the peaks in the array. A peak is a number whose predecessor and succesor are both smaller then the number itself.

/* const ret = [];

for (let i= 0; i < numbers.length; i++) {     // vrátí pouze záporná čísla
  if (numbers[i]< 0) {
    ret.push(numbers[i]);
  } 
} console.log(ret) */


/* let ret = 0; // IMPORTANT - we start with ret = 0;

for (let i= 0; i < numbers.length; i++) {     // vrátí pouze záporná čísla
  ret += numbers[i];
  } 
 console.log(ret) */

/*  let ret = 0;

for (let i= 0; i < numbers.length; i++) {     // Average value in array(poli);
  ret += numbers[i]/numbers.length;
  } 
 console.log(ret) */   

/*  let ret = 0;

for (let i= 0; i < numbers.length; i++) {     // součet kladných hodnot v array(poli);
  if (numbers[i]>=0) 
  {
    ret += numbers[i];
  }
}
 console.log(ret) */

  //First, compute the average number in the array and save the result in variable. Then compute the sum of squared differences from the average. Answer: 6188.1052... tried below...


 /* let ret = 0;
 
  for (let i= 0; i < numbers.length; i++) {     // Average value in array(poli);
  ret += numbers[i]/numbers.length;

  } 
  let aver = 0;
  for (let j = 0; j < numbers.length; j++) {     // odečte od každé druhé mocniny čísla číslo 5 a vrátí její hodnotu
    aver.push((numbers[i]*numbers[i]) - 3.68) 
  } 
  console.log(aver); */


 //Compute the variance of the array. Variance is the average of squared differences from the average. Answer: 325.6897...

 

 // console.log(Math.max(...numbers));     // return the MAX number from the array - using ... spread operator

/* const squareSum = (numbers)=>{
  let sum = 0; i = numbers.length; while (i--) 
  {
      sum += Math.pow(numbers[i], 2);               // Math.pow() umocní číslo, které je před ním 
    } return sum;                                   // tolikrát, kolik je jeho hodnota.
  } */
   

/*   const summation = (num) => {
    
    let result = 0
    for (let i = 1; i <= num; i++)     // For SUMMATION a program that finds 
    result += i                       // the summation of every number GREATER than 0 (i = 1;)
    return result                    //from 1 to num. The number will always be a positive integer                                               
  } */
  
 /*  function century(year) {              // Given a year, return the century it is in.
    // Finish this :)
    return Math.ceil(year/100);
  } */


 // console.log(numbers.length); // function for telling the lenght of an array

//  console.log(numbers.slice(-1)); // get the last element of an array 

const nums = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

const secondMax = () => {

  const max = Math.max(...nums);
  nums.splice(nums.indexOf(max), 1);   // remove max from the array
  Math.max(...nums);         // LOOKING FOR SECOND MAX NUMBER

  console.log(Math.max(...nums));
  }
  
 