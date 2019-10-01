const nums = [5, 6, 7, 7, 9, 9, 33,];

let s = 0;

for (let i = 0; i < nums.length; i++) {
  s = s + nums[i]; // jedná se o součet všech čísel - e.g. i = 0 v array na tomto místě je 5, takže s = 0 + 0[5]. Nyní je "s" = 5. Pokračujeme dále. s = 5 + 1[6]; => to je 11. .... až dojdeme k s = 43 + 6[33]; => konečný výsledek je 76;
}

console.log(s);



// new example

const nums = [5, 6, 1, 8, 9, 7, 4, 3, 2];

let m = nums[0];                                
for (let i = 1; i < nums.length; i++) {         // looks for the biggest number and compares - outputs the biggest value and remembers it until bigger is found
  if (nums[i] > m) {
    m = nums[i];
  }
}

console.log(m);

// example 

const nums = [5, 6, 1, 8, 9, 7, 4, 3, 2];

let x = 1;                              
for (let i = nums.length - 1; i > 0; i = Math.floor(i / 2)) {    // začínáme odzadu
    x *= nums[i]
  }

  console.log(x);


  // nejdříve máme index i = 8 - na jeho místě je 2. Dvojku dosadím do rovnice x *= nums[i]. x = 1*2; X je nyní 2.
  // druhý krok je dosadit i = 8 do rovnice i = Math.floor( 8/2). Dostanu 4. i se nyní rovná 4, splňuje podmínku i > 0.
  // třetí krok je dosadit hodnotu, která je na čtvrtém [4] místě v array a to je 9.
  // čtvrtý krok je dosadit do rovnice x*=num[i], x je stále 2, tedy: x = 2*9 => x je nyní 18;
  // pátý krok je i = [4] čtverku dosadit do rovnice 4/2 => i = 2. 
  // na druhém místě je 1. 
  // x = 18 * 1; x = 18;
  // 2/2 je 1 --> i na pozici 1 je 6.
  // x = 18 * 6 => 108;
  // i je nyní 1. Dosadíme do rovnice, vyjde 0,5. Math.floor zaokrouhluje dolů.
  // 0 není větší než 0, operace skončena. 
  // výsledek x =108

