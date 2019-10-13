let isPalindrome = (string) => {
  string = string.toLocaleLowerCase();
  if(Array.from(string).toString() === Array.from(string).reverse().toString()) {
    console.log(true)
  } else console.log(false);
};


isPalindrome(); 
