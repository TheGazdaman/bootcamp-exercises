const snail = '';

class Slimaci {
  constructor (name, speed, color) {
    this.name = name;
    this.speed = speed;
    this.color = color;
  }



  render() {
    this.element = document.createElement('div');
    this.element.className = 'snail';
    this.element.innerHTML = (

    );
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  } 

  update() {
    const counter = this.element.querySelector('');

  }
}