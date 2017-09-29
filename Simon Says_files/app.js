let simonGame = document.getElementById('simonGame');
let green = document.getElementById('green');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let start = document.getElementById('start');
let screenDiv = document.getElementById('screenDiv');

let gameCounter = [];
let secondCounter = [];
let playerCounter = [];
let turnValue; 
let i = 0;
let startSwitch = 0;
let playerTurn = 0;


//clicking colors and building the playerCounter array
green.addEventListener('click', () => {
    if(startSwitch === 1) {
        if(playerCounter.length < gameCounter.length) {

            //check to see if there is a match

            for(let i = 0; i < gameCounter.length; i++) {
                if(playerCounter[i] === gameCounter[i]) {
                    alert("correct");
                }
                else {
                    alert('wrong');
                }
            }

            //

            playerCounter.push(0);
            console.log("green");
            //green.style.backgroundColor = '#00ce14';
            green.style.fill = '#00ce14';
            setTimeout(()=> {
                //green.style.backgroundColor = 'green';
                green.style.fill = 'green';
            }, 1000);
        } else {
            console.log("playerCounter is full!");
            if(gameCounter.length < 5) {
                initiator(gameLoop);
                gameLoop();
                //if(gameCounter.length < 10) {
                    // secondCounter.push(1);
                // }
                secondCounter.push(1);
                i = 0;
                playerCounter = [];
            } else {
                console.log("Game over");
            }
        }
    }
    else {
        console.log("game has not started");
    }
});
red.addEventListener('click', () => {
    if(startSwitch === 1) {
        if(playerCounter.length < gameCounter.length) {

            //check to see if there is a match

            for(let i = 0; i < gameCounter.length; i++) {
                if(playerCounter[i] === gameCounter[i]) {
                    alert("correct");
                }
                else {
                    alert('wrong');
                }
            }

            //


            playerCounter.push(1);
            console.log('red');
            // red.style.backgroundColor = 'red';
            red.style.fill = 'red';
            setTimeout(()=> {
            // red.style.backgroundColor = '#a30000';
            red.style.fill = '#a30000';
            }, 1000);
        } else {
            console.log("playerCounter is full!");
            if(gameCounter.length < 5) {
                initiator(gameLoop);
                gameLoop();
                //if(gameCounter.length < 10) {
                    // secondCounter.push(1);
                // }
                secondCounter.push(1);
                i = 0;
                playerCounter = [];
            } else {
                console.log("Game over");
            }
        }
    }
    else {
        console.log("game has not started");
    }
});
blue.addEventListener('click', () => {
    if(startSwitch === 1) { 
        if(playerCounter.length < gameCounter.length) {

            //check to see if there is a match

            for(let i = 0; i < gameCounter.length; i++) {
                if(playerCounter[i] === gameCounter[i]) {
                    alert("correct");
                }
                else {
                    alert('wrong');
                }
            }

            //

            playerCounter.push(2);
            console.log("blue");
            //blue.style.backgroundColor = 'blue';
            blue.style.fill = 'blue';
            setTimeout(()=> {
            //blue.style.backgroundColor = '#000b8c';
            blue.style.fill = '#000b8c';
            }, 1000);
        } else {
            console.log("playerCounter is full!");
            if(gameCounter.length < 5) {
                initiator(gameLoop);
                gameLoop();
                //if(gameCounter.length < 10) {
                     // secondCounter.push(1);
                // }
                secondCounter.push(1);
                i = 0;
                playerCounter = [];
            } else {
                console.log("Game over");
            }
        }
    }
    else {
        console.log("game has not started");
    }
});
yellow.addEventListener('click', () => {
    if(startSwitch ===1) {
        if(playerCounter.length < gameCounter.length) {

            //check to see if there is a match

            for(let i = 0; i < gameCounter.length; i++) {
                if(playerCounter[i] === gameCounter[i]) {
                    alert("correct");
                }
                else {
                    alert('wrong');
                }
            }

            //

            playerCounter.push(3);
            console.log('yellow');
            //yellow.style.backgroundColor = "yellow";
            yellow.style.fill = "yellow";
            setTimeout(()=> {
                // yellow.style.backgroundColor = '#9e9000';
                yellow.style.fill = '#9e9000';
            }, 1000);
        } else {
            console.log("playerCounter is full!");

            if(gameCounter.length < 5) {
                initiator(gameLoop);
                gameLoop();
                //if(gameCounter.length < 10) {
                    // secondCounter.push(1);
                // }
                secondCounter.push(1);
                i = 0;
                playerCounter = [];
            } else {
                console.log("Game over");
            }
        }
    }
    else {
        console.log("game has not started");
    }
});

// how the buttons blink and the push of their values to certain arrays
let colorBlink = function() {

    if(startSwitch === 1) {
        //generate random number, store in "turnValue" and push "turnvalue" value to gameCounter array
        turnValue = Math.floor(Math.random() * 4);
        console.log(turnValue);
        gameCounter.push(turnValue);


        for(i = 0; i < gameCounter.length; i++) {
            (function(i) {
                setTimeout(function() {
                // switch: blink certain color under a random number from 0-3
                    switch(gameCounter[i]) {
                    case 0: 
                            console.log("green");
                            // green.style.backgroundColor = '#00ce14';
                            green.style.fill = '#00ce14';
                            setTimeout(()=> {
                                // green.style.backgroundColor = 'green';
                                green.style.fill = 'green';
                            }, 1000);
                            break;
                    case 1: 
                            console.log('red');
                            // red.style.backgroundColor = 'red';
                            red.style.fill = 'red';
                            setTimeout(()=> {
                                // red.style.backgroundColor = '#a30000';
                                red.style.fill = '#a30000';
                            }, 1000);
                            break;
                    case 2: 
                            console.log("blue");
                            //blue.style.backgroundColor = 'blue';
                            blue.style.fill = 'blue';
                            setTimeout(()=> {
                                //blue.style.backgroundColor = '#000b8c';
                                blue.style.fill = '#000b8c';
                            }, 1000);
                            break;
                    case 3: 
                            console.log('yellow');
                            // yellow.style.backgroundColor = "yellow";
                            yellow.style.fill = "yellow";
                            setTimeout(()=> {
                                // yellow.style.backgroundColor = '#9e9000';
                                yellow.style.fill = '#9e9000';
                            }, 1000);
                            break;
                    default:
                            console.log("failure");
                    }
                }, 1000 * i);
            }(i));
        }
    }
};

// the game iteration of blinks durring rounds
let gameLoop = function() {
    setTimeout(() => {
        i++;
        console.log(gameCounter);
        console.log(secondCounter);
        colorBlink();
        if(i < secondCounter.length) gameLoop();
    }, currentSpeed);
}

//starting the game. Nothing happens if this doesnt get initiated
start.addEventListener('click', () => {
    startSwitch = 1;
    console.log('Game has been Started');
});

let initiator = function(callback) {};

/* start.addEventListener('click', () => {
    if(gameCounter.length < 5) {
        initiator(gameLoop);
        gameLoop();
        secondCounter.push(1);
        i = 0;
    } else {
        console.log("Game over");
    }
}); */

