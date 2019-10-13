const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
const makeList = (arr) => {

  const resultDisplayArray = arr.map(val => `<li class="text-warning">${val}</li>`);

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

// GET TEMPERATURE

function makeClass() {

  class Thermostat {
    constructor(fahrenheit) {
      this._tempCelsius = 5/9 * (fahrenheit - 32);
    } 
    get temperature() {
      this._tempCelsius;
    }

    set temperature (newTemp) {
      this._tempCelsius = newTemp;
    }
  }
  
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C