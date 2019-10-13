document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    const timer1 = new Timer (60);
    timer1.mount(app);

})