//set Difficulties 
let easy = document.getElementById('easyText');
//easy.textContent = 'E';
easy.addEventListener('click', () => {
    currentSpeed = speeds[0];
});
let hard = document.getElementById('hardText');
// hard.innerHTML = 'H';
hard.addEventListener('click', () => {
    currentSpeed = speeds[1];
});


let currentSpeed = 1000;
let speeds = [4000, 1000];
