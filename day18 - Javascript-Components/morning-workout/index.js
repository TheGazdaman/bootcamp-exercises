document.addEventListener('DOMContentLoaded', () => {
 
  document.addEventListener('click', (e) => {
    const min = document.querySelector('#counter');       // tady selektujeme horní počítadlo, které stojí pro minimum
    const max = document.querySelector('#maximum');       // tady selektujeme horní počítadlo, které stojí pro maximum
 
  
    if (e.target.id === 'minus' && min.textContent > 0) {
      min.textContent -= 1;              // tady říkáme co se stane, když je kliknuto minus
      document.querySelector('#knob').style.width = `${(parseInt(min.textContent)/ parseInt(max.textContent))* 100}%`;
      // tady selektujeme #knob a jeho šířku - proto style.width - výsledek je string - proto parse int - a šířka je v procenctech - proto se to násobí 100 a na konci jsou procenta, aby počítač věděl o co se jedná.
    } else if (e.target.id === 'plus' && min.textContent < 10 ) {
      min.textContent++;                 // tady říkáme co se stane, když je kliknuto plus
      document.querySelector('#knob').style.width = `${(parseInt(min.textContent)/ parseInt(max.textContent))* 100}%`;
    }
  });
});