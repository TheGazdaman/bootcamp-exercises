document.addEventListener('DOMContentLoaded', () => {
  
  const container = document.querySelector('.container');

  fetch('http://bootcamp.podlomar.org/api/snails/5')
    .then(response => response.json())
    .then(snails => {
      for (const snail of snails) {
        const slimak = new Snails(snail.name, snail.speed, snail.color);
        slimak.mount(container);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 32) {
        console.log("spacebar");
        for (let snail of snails) {
          snail.move();
        }
      }
    });
});