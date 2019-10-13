

document.addEventListener('DOMContentLoaded', () => {
  
  const container = document.querySelector('.container');
  let snails = [];
   
  fetch('http://bootcamp.podlomar.org/api/snails/6')
    .then(response => response.json())
    .then(snails => {
      for (const snail of snails) {
        const slimak = new Snails(snail.name, snail.speed, snail.color);
        slimak.mount(container);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 32) {
        for (const snail of snails) {
          snail.move();
        }
      }
    });
});