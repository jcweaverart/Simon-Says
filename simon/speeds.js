//set Difficulties 
let easy = document.getElementById('easy');
easy.addEventListener('click', () => {
    currentSpeed = speeds[0];
});
let expert = document.getElementById('hard');
expert.addEventListener('click', () => {
    currentSpeed = speeds[1];
});
let currentSpeed = 1000;
let speeds = [4000, 1000];
