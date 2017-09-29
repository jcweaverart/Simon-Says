//set Difficulties 
let easy = document.getElementById('easy');
//easy.textContent = 'E';
easy.addEventListener('click', () => {
    currentSpeed = speeds[0];
});
let hard = document.getElementById('hard');
// hard.innerHTML = 'H';
hard.addEventListener('click', () => {
    currentSpeed = speeds[1];
});


let currentSpeed = 1000;
let speeds = [4000, 1000];
