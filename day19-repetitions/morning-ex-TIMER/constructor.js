
class Timer {
  constructor (value) {
    this.value = value;
  }

  updateCounter () {
    const myTimer = document.querySelector('#counter');
    myTimer.textContent = `${seconds}`;
  }

  runTimer () {
    if (seconds < 60) {
      seconds++;
      updateCounter();
    } 
  }

  start () {
    if (intervalID === null) {
      intervalID = setInterval(runTimer, 1000);
    } else {
      clearInterval(intervalID);
      intervalID = null;
    }
  }

  reset () {
    seconds = 0; 
    minutes = 0;
    clear.textContent = 0;
    clearInterval(intervalID); 
    }  

  btnUp () {
    if (seconds < 60) {
      seconds++;
      updateCounter();
    }
  }

  btnDown () {
    if (seconds > 0) {
      seconds--;
      updateCounter();
  }
  }

  render () {
    this.element = document.createElement('div');
    this.element.className = 'square';
    this.element.innerHTML = (`
    <div class="btn-reset"><p>RESET</p></div>

    <div class="arrow-up"><p>UP</p></div>

    <div id="label" class="label">
        <span id="counter">00<span>:</span>00<span>s</span>
    </div>

    <div class="arrow-down"><p>DOWN</p> </div>

    <div class="btn-start-stop"><p>START/<br>STOP</p> </div>
    `);

    const plus = this.element.querySelector('.arrow-up');
    plus.addEventListener('click', () => {
      this.btnUp();
    })

    const minus = this.element.querySelector('.arrow-down');
    minus.addEventListener('click', () => {
      this.btnDown();
    })

    this.update();
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }
}


 