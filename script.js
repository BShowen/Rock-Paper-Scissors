var buttonSelection = document.querySelectorAll('.btn');
    buttonSelection.forEach( (btn) => {
            btn.addEventListener('click', function(){ 
                playerChoice = btn.id;
                playGame();
            })
        }
);

var computerScore = 0;
var playerScore = 0;
        
function playGame(){

    var roundWinner = gameRound();
    
    if(roundWinner === 'tie'){
        winner = '<p>It was a Tie</p>' ;
    }else if(roundWinner === 'computer'){
        ++computerScore;
        winner = '<p>The computer won</p>' ;
    }else if(roundWinner === 'player'){
        ++playerScore;
        winner = '<p>You won!</p>' ;
    }
    
    var winner;
    var winnerDisplay = document.querySelector('#roundWinnerDisplay');
    winnerDisplay.innerHTML = winner;

    var computerStats = document.querySelector('#computerScore');
    computerStats.innerText = `Computer Score is: ${computerScore}`;

    var playerStats = document.querySelector('#playerScore');
    playerStats.innerText = `Player Score is: ${playerScore}`;
    
    checkToReset();
}

function checkToReset(){
    if(playerScore === 5){
        alert('WOOOO, you won!\n\nPlay again?');
        window.location.reload();
    }else if(computerScore === 5){
        alert('BOOOO, the computer beat you!\n\nPlay again?');
        window.location.reload();
    }
}


function gameRound(){

    var computer = computerChoice();

    if(playerChoice === computer ){
        var winner = 'tie';
    }else if(playerChoice === 'rock'){
        if(computer === 'paper'){
            var winner =  'computer';
        }else{
            var winner = 'player';
        }
    }else if(playerChoice === 'paper'){
        if(computer === 'scissors'){
            var winner = 'computer';
        }else{
            var winner = 'player';
        }
    }else if(playerChoice === 'scissors'){
        if(computer === 'rock'){
            var winner = 'computer';
        }else{
            var winner = 'player';
        }
    }
    return winner ;
}

function computerChoice(){
    var x = Math.random();
    if(x<0.33){
        return 'rock';
    }else if(x < 0.66){
        return 'paper';
    }else{
        return 'scissors';
    }   
}