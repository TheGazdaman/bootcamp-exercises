/* const trianglArea = (w, h,) => {
  return w * h / 2;
}; */

/* const trianglArea = (w, h,) =>  w * h / 2; */

/* const square = (a) => a * a;

const hypotenuse = (a, b) => (Math.sqrt((a * a) + (b * b))); */


/* const salary = (pay, hours, days) => pay * hours * days;

const taxedSalary = (sal, tax) => (sal) * (1 - tax);

console.log(taxedSalary); */

/* const bar = (x) => {
  return x * 2;
}

const foo = (y) => {
  return y(20);
}

console.log(foo(bar));  */

/* Greet */

/* const greet = () => {
  console.log('Hello Michal');
}; */

/* SetTimer function */
/*
setInterval(greet, 5000); */

/*
const x = 20;

const foo = (y, x) => y(x * x);

console.log(foo(x => x + x, x)); */


const attitude = (original, replacement, source) => {
  (source) => source.replace(original, replacement);
};

const snakify = attitude(/The Millenials/ig, 'Snake people');

console.log(snakify('The Millenials are always up to something.'));
