
let secretNumber = Math.trunc(20 * Math.random() + 1);
let highscore = 0;
let time = [0, 0] ;


document.querySelector('.again').addEventListener('click', function () {
    time = [0, 0];
    secretNumber = Math.trunc(20 * Math.random() + 1);;
    document.querySelector('score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.getElementById('timer').innerHTML = '';
    document.querySelector('.check').style.backgroundColor = '#f1356d';
    

});

document.querySelector('.check').addEventListener('click', () => {

    let guess = document.querySelector('.guess').value;
  
    let timer =  setInterval(() => {
        time[1] ++ ;
        if (time[1] % 60 == 0) {
            time[0] ++ ;
                    } 
     document.getElementById('timer').innerHTML = ` ${time[0]} : ${time[1]} `
       
    }, 2000 );
     
    this.style.backgroundColor = 'black';

    if (!guess) {
        document.querySelector(".message").textContent = "Not a Valid input";
    }
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "You guessed it Right";
        document.querySelector('.number').style.width = '30rem'
        document.querySelector("body").style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        if (highscore < document.querySelector('.score').textContent) highscore = document.querySelector('.score').textContent;
        
        document.querySelector('.highscore').textContent = highscore;
    }
    else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high";
        document.querySelector('.score').textContent--;
       

    }


    else {
        document.querySelector(".message").textContent = "Too low ";
        document.querySelector('.score').textContent--;
    }

    if (document.querySelector('.score').textContent <= 0) {
        document.querySelector(".message").textContent = "You lost the Game";
        clearInterval(timer);
        document.getElementById('timer').innerHTML = '';
        document.getElementById('hiddenResult').textContent = secretNumber;
        this.style.backgroundColor = '#f1356d';
    }

});
