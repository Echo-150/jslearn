



        const score = {
            wins: 0,
            losses: 0,
            ties: 0

        }
        let userdo = 'ro', comdo = 'ro';
        let auto = false;
        

        const savedScore = localStorage.getItem('score');


       



        if (savedScore) {
            const parsedScore = JSON.parse(savedScore);
            score.wins = parsedScore.wins;
            score.losses = parsedScore.losses;
            score.ties = parsedScore.ties;
        }

        function play(userMove) {
            const num = Math.random();
            let move;
            if (num >= 0 && num < 1 / 3) {
                move = 'rock';
            }
            else if (num >= 1 / 3 && num < 2 / 3) {
                move = 'paper';
            }
            else if (num >= 2 / 3 && num < 1) {
                move = 'scissors';
            }
            console.log(`computer move : ${move}`);
            let ans;



            switch (move + userMove) {
                case 'rockrock':
                    ans = 'Tie.';
                    score.ties++;
                    userdo = comdo = 'ro';
                    break;
                case 'paperpaper':
                    ans = 'Tie.';
                    score.ties++;
                    userdo = comdo = 'pa';
                    break;
                case 'scissorsscissors':
                    ans = 'Tie.';
                    score.ties++;
                    userdo = comdo = 'sc';
                    break;
                case 'rockpaper':
                    ans = 'You win!';
                    score.wins++;
                    userdo = 'pa';
                    comdo = 'ro';
                    break;
                case 'paperrock':
                    ans = 'You lose!';
                    score.losses++;
                    userdo = 'ro';
                    comdo = 'pa';
                    break;
                case 'rockscissors':
                    ans = 'You lose!';
                    score.losses++;
                    userdo = 'sc';
                    comdo = 'ro';
                    break;
                case 'scissorsrock':
                    ans = 'You win!';
                    score.wins++;
                    userdo = 'ro';
                    comdo = 'sc';
                    break;
                case 'paperscissors':
                    ans = 'You win!';
                    score.wins++;
                    userdo = 'sc';
                    comdo = 'pa';
                    break;
                case 'scissorspaper':
                    ans = 'You lose!';
                    score.losses++;
                    userdo = 'pa';
                    comdo = 'sc';
                    break;
            }
            document.querySelector('.result').innerHTML = ans;


            localStorage.setItem('score', JSON.stringify(score));

            document.querySelector('.result2').innerHTML = `You picked ${userMove},Computer picked ${move},${ans}<br>
            Current Score:win: ${score.wins}-lose: ${score.losses}-tie: ${score.ties}`;


            document.querySelector('.S1').src = `./image/${userdo}.png`;
            document.querySelector('.S2').src = `./image/${comdo}.png`;
            // alert(`You picked ${userMove},Computer picked ${move},${ans}\nCurrent Score:win: ${score.wins}-lose: ${score.losses}-tie: ${score.ties}`);
        }

        function autoPlay() {
            if(auto === true) {
            document.querySelector('.stop').hidden = false;
            const intervalId = setInterval(() => {
                const userMove = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
                play(userMove);
                if(auto === false){
                    clearInterval(intervalId);
                }
            }, 1000);
        }
    }


        document.body.addEventListener('keydown',(event)=> {
            if (event.key === 'r') {
                play('rock');
            } else if (event.key === 'p') {
                play('paper');
            } else if (event.key === 's') {
                play('scissors');
            }
        });

