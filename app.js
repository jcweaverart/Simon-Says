// game buttons and interface nodes
let simonGame = document.getElementById('simonGame');
let screenDiv = document.getElementById('screenText');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let start = document.getElementById('startText');
let blue = document.getElementById('blue');
let red = document.getElementById('red');
let audio = new Audio('blip.wav');

// game variables & counters
let secondCounter = [];
let playerCounter = [];
let gameCounter = [];
let startSwitch = 0;
let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;
let playerTurn = 0;
let rounds = 0;
let correct;
let turnValue; 
let i = 0;

// light button clicking events
green.addEventListener('click', () => {
    if(startSwitch === 1) {
        if(playerCounter.length <= gameCounter.length) {

            playerCounter.push(0);

            //calculate if the combination is correct so far
             for(let i = 0; i < playerCounter.length; i++ ) {
                if(playerCounter[i] === gameCounter[i]) {
                    correct = true;
                } else {
                    correct = false;
                }
            }

            if(correct === true || correct === undefined) {
                audio.play();
                console.log("green");
                //green.style.backgroundColor = '#00ce14';
                green.style.fill = '#00ce14';
                setTimeout(()=> {
                    //green.style.backgroundColor = 'green';
                    green.style.fill = 'green';
                }, 1000);

                if(playerCounter.length === gameCounter.length) {
                    roundUpdate();
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
                        console.log("CONGRATS! You won! Game over");
                        alert("CONGRATS! You won!");
                        gameCounter = [];
                        secondCounter = [];
                        playerCounter = [];
                        turnValue; 
                        i = 0;
                        startSwitch = 0;
                        playerTurn = 0;
                        gamesPlayed ++;
                        gamesWon ++;
                        start.style.color = "white";
                        roundReset(); 
                    }
                    
                }
            } else {
                console.log("Wrong, you lose!");
                alert("Wrong, you lose!");
                        gameCounter = [];
                        secondCounter = [];
                        playerCounter = [];
                        turnValue; 
                        i = 0;
                        startSwitch = 0;
                        playerTurn = 0;
                        gamesPlayed ++;
                        gamesLost ++; 
                        start.style.color = "white";
                        roundReset();
            }
                
        } else {
          console.log("Something messed up here."); 
        }
    }
    else {
        console.log("Click start to begin a new game. The game has not started yet.");
    }
});
red.addEventListener('click', () => {
    if(startSwitch === 1) {
        if(playerCounter.length <= gameCounter.length) {


            playerCounter.push(1);

            //calculate if the combination is correct so far
             for(let i = 0; i < playerCounter.length; i++ ) {
                if(playerCounter[i] === gameCounter[i]) {
                    correct = true;
                } else {
                    correct = false;
                }
            }
            
            if(correct === true || correct === undefined) {
                audio.play();
                console.log('red');
                // red.style.backgroundColor = 'red';
                red.style.fill = 'red';
                setTimeout(()=> {
                // red.style.backgroundColor = '#a30000';
                red.style.fill = '#a30000';
                }, 1000);
            
                if(playerCounter.length === gameCounter.length) {
                    roundUpdate();
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
                        console.log("CONGRATS! You won! Game over");
                        alert("CONGRATS! You won!");
                        gameCounter = [];
                        secondCounter = [];
                        playerCounter = [];
                        turnValue; 
                        i = 0;
                        startSwitch = 0;
                        playerTurn = 0;
                        gamesPlayed ++;
                        gamesWon ++; 
                        start.style.color = "white";
                        roundReset();
                    }  
                }
            } else {
                console.log("Wrong, you lose!");
                alert("Wrong, you lose!");
                        gameCounter = [];
                        secondCounter = [];
                        playerCounter = [];
                        turnValue; 
                        i = 0;
                        startSwitch = 0;
                        playerTurn = 0;
                        gamesPlayed ++;
                        gamesLost ++; 
                        start.style.color = "white";
                        roundReset();
            }
            
        } else {
            console.log("Something went wrong here");
        }
    }
    else {
        console.log("Click start to begin a new game. The game has not started yet.");
    }
});
blue.addEventListener('click', () => {
    if(startSwitch === 1) { 
        if(playerCounter.length <= gameCounter.length) {


            playerCounter.push(2);

            //calculate if the combination is correct so far
             for(let i = 0; i < playerCounter.length; i++ ) {
                if(playerCounter[i] === gameCounter[i]) {
                    correct = true;
                } else {
                    correct = false;
                }
            }
            if(correct === true || correct === false) {
                audio.play();
                console.log("blue");
                //blue.style.backgroundColor = 'blue';
                blue.style.fill = 'blue';
                setTimeout(()=> {
                //blue.style.backgroundColor = '#000b8c';
                blue.style.fill = '#000b8c';
                }, 1000);
            
                if(playerCounter.length === gameCounter.length) {
                    roundUpdate();
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
                        console.log("CONGRATS! You won! Game over");
                        alert("CONGRATS! You won!");
                        gameCounter = [];
                        secondCounter = [];
                        playerCounter = [];
                        turnValue; 
                        i = 0;
                        startSwitch = 0;
                        playerTurn = 0;
                        gamesPlayed ++;
                        gamesWon ++;
                        start.style.color = "white";
                        roundReset();
                    }
                }
            } else {
                console.log("Wrong, you lose!");
                alert("Wrong, you lose!");
                        gameCounter = [];
                        secondCounter = [];
                        playerCounter = [];
                        turnValue; 
                        i = 0;
                        startSwitch = 0;
                        playerTurn = 0;
                        gamesPlayed ++;
                        gamesLost ++;
                        start.style.color = "white";
                        roundReset();
            }
        } else {
            console.log("something went wrong here");
        }
    }
    else {
        console.log("Click start to begin a new game. The game has not started yet.");
    }
});
yellow.addEventListener('click', () => {
    if(startSwitch ===1) {
        if(playerCounter.length <= gameCounter.length) {


            playerCounter.push(3);

            //calculate if the combination is correct so far
             for(let i = 0; i < playerCounter.length; i++ ) {
                if(playerCounter[i] === gameCounter[i]) {
                    correct = true;
                } else {
                    correct = false;
                }
            }
            if(correct === true || correct === undefined) {
                audio.play();
                console.log('yellow');
                //yellow.style.backgroundColor = "yellow";
                yellow.style.fill = "yellow";
                setTimeout(()=> {
                    // yellow.style.backgroundColor = '#9e9000';
                    yellow.style.fill = '#9e9000';
                }, 1000);

                if(playerCounter.length === gameCounter.length) {
                    roundUpdate();
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
                        console.log("CONGRATS! You won! Game over");
                        alert("CONGRATS! You won!");
                        gameCounter = [];
                        secondCounter = [];
                        playerCounter = [];
                        turnValue; 
                        i = 0;
                        startSwitch = 0;
                        playerTurn = 0;
                        gamesPlayed ++;
                        gamesWon ++;
                        start.style.color = "white";
                        roundReset();
                    }
                }
            } else {
                console.log("Wrong, you lose!");
                alert("Wrong, you lose!");
                        gameCounter = [];
                        secondCounter = [];
                        playerCounter = [];
                        turnValue; 
                        i = 0;
                        startSwitch = 0;
                        playerTurn = 0;
                        gamesPlayed ++;
                        gamesLost ++;
                        start.style.color = "white";
                        roundReset();
            }
            
        } else {
            console.log("something went wrong here");
        }
    }
    else {
        console.log("game has not started");
    }
});

// how the buttons blink 
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
                            audio.play();
                            // green.style.backgroundColor = '#00ce14';
                            green.style.fill = '#00ce14';
                            setTimeout(()=> {
                                // green.style.backgroundColor = 'green';
                                green.style.fill = 'green';
                            }, 1000);
                            break;
                    case 1: 
                            console.log('red');
                            audio.play();
                            // red.style.backgroundColor = 'red';
                            red.style.fill = 'red';
                            setTimeout(()=> {
                                // red.style.backgroundColor = '#a30000';
                                red.style.fill = '#a30000';
                            }, 1000);
                            break;
                    case 2: 
                            console.log("blue");
                            audio.play();
                            //blue.style.backgroundColor = 'blue';
                            blue.style.fill = 'blue';
                            setTimeout(()=> {
                                //blue.style.backgroundColor = '#000b8c';
                                blue.style.fill = '#000b8c';
                            }, 1000);
                            break;
                    case 3: 
                            console.log('yellow');
                            audio.play();
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

let roundUpdate = function() {
    rounds ++;
    screenDiv.innerHTML = rounds;
}

let roundReset = function() {
    rounds = 0;
    screenDiv.innerHTML = rounds;
}

//starting the game. Nothing happens if this doesnt get initiated
start.addEventListener('click', () => {
   if(startSwitch === 0) { 
    startSwitch = 1;
    console.log('Game has been Started');
     if(startSwitch === 1) { 

         start.style.color = "blue";
         roundUpdate();
    
        if(playerCounter.length <= gameCounter.length) {
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

        } else {
            console.log("IDK what happened");
        }
     } else {
        console.log("Something is messed up");
     }    

     if(gamesPlayed > 0) {
        console.log("Welcome to your next game!");
    }   
   } else {
       console.log("Game is already in session");
   }
});

let initiator = function(callback) {};