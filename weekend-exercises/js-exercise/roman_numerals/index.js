//const roman = prompt('Type in number from 1 - 4000.');


const numberCheck = () => {
    const roman = document.querySelector('.typing').value;
      if (Number.isNaN(parseInt(roman, 10))) {
        return 'Invalid input.';
      } 
      if (roman.length > 4) {
        return 'Number is too long.'
      }
      if (parseInt(roman, 10) > 4000) {
        return 'Number is out of range';
      }

      let numeral = '';
      switch (roman[roman.length - 1]) {
          case '1': numeral = 'I';
            break;
          case '2': numeral = 'II';
            break;
          case '3': numeral = 'III';
            break;
          case '4': numeral = 'IV';
            break;
          case '5': numeral = 'V';
            break;
          case '6': numeral = 'VI';
            break;
          case '7': numeral = 'VII';
            break;
          case '8': numeral = 'VIII';
            break;
          case '9': numeral = 'IX';
            break;
            default:
      }  
      if (roman.length >= 2) {
        switch (roman[roman.length - 2]) {
          case '1': numeral = `X${numeral}`;
            break;
          case '2': numeral = `XX${numeral}`;
            break;
          case '3': numeral = `XXX${numeral}`;
            break;
          case '4': numeral = `XL${numeral}`;
            break;
          case '5': numeral = `L${numeral}`;
            break;
          case '6': numeral = `LX${numeral}`;
            break;
          case '7': numeral = `LXX${numeral}`;
            break;
          case '8': numeral = `LXXX${numeral}`;
            break;
          case '9': numeral = `XC${numeral}`;
            break;
              default:
      }
    }
      if (roman.length >= 3) {
        switch (roman[roman.length - 3]) {
          case '1': numeral = `C${numeral}`;
            break;
          case '2': numeral = `CC${numeral}`;
            break;
          case '3': numeral = `CCC${numeral}`;
            break;
          case '4': numeral = `CD${numeral}`;
            break;
          case '5': numeral = `D${numeral}`;
            break;
          case '6': numeral = `DC${numeral}`;
            break;
          case '7': numeral = `DCC${numeral}`;
            break;
          case '8': numeral = `DCCC${numeral}`;
            break;
          case '9': numeral = `CM${numeral}`;
            break;
            default:
      }
    }
      if (roman.length === 4) {
        switch (roman.length - 4) {
          case '1': numeral = `M${numeral}`;
            break;
          case '2': numeral = `MM${numeral}`;
            break;
          case '3': numeral = `MMM${numeral}`;
            break;
          case '4': numeral = `MMMM${numeral}`;
            break;
            default:
        }
      }
      return numeral;
    }
  const toRoman = () => {
    const rome = document.querySelector('.result');
    rome.textContent = '';
    rome.textContent = numberCheck();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button');
    btn.addEventListener('click', toRoman);
  })



//window.alert(numberCheck(roman));