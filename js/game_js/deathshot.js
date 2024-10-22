var background_deathshot = document.getElementById('game_back3_deathshot');
var background_deathshot2 = document.getElementById('game_back2_deathshot');
var backgroundpauser_deathshot = document.getElementById('backgroundpauser_deathshot');

var pause_menu_deathshot = document.getElementById('pause_menu_deathshot');

var deathshot_menu_container = document.getElementById('deathshot_menu_container')

var ball_deathshot = document.getElementById('ball_deathshot')
var ball_deathshot2 = document.getElementById('ball_deathshot2');
var ball_deathshot3 = document.getElementById('ball_deathshot3');


var ticker_data_deathshot = document.getElementById('ticker_data_deathshot');
var score_deathshot = document.getElementById('score_deathshot');
var accuracy_deathshot = document.getElementById('accuracy_deathshot')
var time_deathshot = document.getElementById('time_deathshot');

var resume_deathshot = document.getElementById('resume_deathshot');
var restart_deathshot = document.getElementById('restart_deathshot');

var deathshot_system_container = document.getElementById('deathshot_system_container');

var game_over_deathshot=0;

var deathshot_pause_button = document.getElementById('deathshot_pause_button');

var deathshot_time = 58;
var timerInterval; //  the interval ID

var deathshot_ground = document.getElementById('deathshot_ground');


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var clicking_page = document.getElementById('clicking_page');
var deathshot_page = document.getElementById('deathshot_page')
var exit_deathshot = document.getElementById('exit_deathshot');

//game starter
background_deathshot.addEventListener('click',function(){
    background_deathshot.style.display = 'none';
    backgroundpauser_deathshot.style.display = 'block';
    ticker_deathshot();
});
function ticker_deathshot() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_deathshot.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_deathshot.style.display = 'none';
        ball_deathshot.style.display = 'block';
        ball_deathshot2.style.display = 'block';
        ball_deathshot3.style.display = 'block';
        backgroundpauser_deathshot.style.display = 'none';
        deathshot_pause_button.style.display='block';
        deathshot_ground.style.display='block'
        time_caller_deathshot();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_deathshot() {
    var escape_deathshot = 0;
    
    
    
    document.addEventListener('keydown', function(event) {
        if (game_over_deathshot == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_deathshot = (escape_deathshot === 0) ? 1 : 0;
    
                if (escape_deathshot == 1) {
                    deathshot_ispaused();
                } else {
                    deathshot_isresumed();
                }
            }
        }
    });
    

    resume_deathshot.addEventListener('click',function(){
        deathshot_isresumed();
        escape_deathshot=0;
    });

    restart_deathshot.addEventListener('click',function(){
        deathshot_isrestarted();
    })

    deathshot_pause_button.addEventListener('click',function(){
        deathshot_ispaused();
        escape_deathshot=1;
    })
}

//pause
function deathshot_ispaused() {
    deathshot_pause_button.style.display='none';
    ball_deathshot.style.display='none';
    ball_deathshot2.style.display='none';
    ball_deathshot3.style.display='none';
    deathshot_menu_container.style.display='block';
    deathshot_system_container.style.display='none';
    deathshot_ground.style.display='none'
}

//resume
function deathshot_isresumed(){
    deathshot_pause_button.style.display='block';
    ball_deathshot.style.display='block';
    ball_deathshot2.style.display='block';
    ball_deathshot3.style.display='block';
    deathshot_menu_container.style.display='none';
    deathshot_system_container.style.display='block';
    deathshot_ground.style.display='block';
}


//restart
function deathshot_isrestarted(){
    ticker_data_deathshot.innerHTML='Click to Start!'
    ticker_data_deathshot.style.display='block'
    background_deathshot.style.display='block';
    deathshot_menu_container.style.display='none';
    deathshot_system_container.style.display='block';

    score_decider_deathshot = 0;
    deathshot_hits = 0;
    deathshot_miss = 0;
    accuracy_decider_deathshot = 0;
    game_over_deathshot = 0;

    score_deathshot.innerHTML = "0 pts";
    accuracy_deathshot.innerHTML = "0%";
    time_deathshot.innerHTML = "0:00";

    deathshot_time=58;
    clearInterval(timerInterval); // Clear any existing timer

}

//Game over
function call_deathshotover(){
    game_over_deathshot=1;
    ticker_data_deathshot.style.display='block';
    backgroundpauser_deathshot.style.display='block';
    ticker_data_deathshot.style.fontSize='100px';
    ticker_data_deathshot.innerHTML='Game Over';
    ball_deathshot.style.display='none';
    ball_deathshot2.style.display='none';
    ball_deathshot3.style.display='none';
    deathshot_pause_button.style.display='none';
    deathshot_ground.style.display='none'
    setTimeout(function(){
        result_screen(score_decider_deathshot,'100',deathshot_page,'Result <br>Death<span style="color: red;">Shot',switching_page, 'Death<span style="color: red;">Shot</span>','deathshot_page');
        deathshot_isrestarted();    
    },3000);
}

var i_deathshot=0;
var j_deathshot=0;
var score_decider_deathshot=0;
var accuracy_decider_deathshot = 0;
var deathshot_hits=0;
var deathshot_miss=0;

deathshot_ground.addEventListener('click', function() {
    call_deathshotover();
});


function deathshot_accuracy_management(){
    accuracy_decider_deathshot = Math.ceil((deathshot_hits / (deathshot_hits + deathshot_miss)) * 100);
    accuracy_deathshot.innerHTML = accuracy_decider_deathshot+"%";
}

ball_deathshot.addEventListener('click', function(event) {
    console.log('one ball1')
    event.stopPropagation(); // Prevents the event from bubbling up to the ground

    ball_deathshot_mover(ball_deathshot);
    deathshot_score_decider();
});

ball_deathshot2.addEventListener('click',function(){
    console.log('one ball2')
    event.stopPropagation();

    ball_deathshot_mover(ball_deathshot2);
    deathshot_score_decider();
});


ball_deathshot3.addEventListener('click',function(){
    console.log('one ball3')
    event.stopPropagation(); // Prevents the event from bubbling up to the ground

    ball_deathshot_mover(ball_deathshot3);
    deathshot_score_decider();
});

function deathshot_score_decider(){
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_deathshot = score_decider_deathshot + new_value;
    score_deathshot.innerHTML = score_decider_deathshot + " pts";

    deathshot_hits++;
    deathshot_accuracy_management();
}

//ball mover
function ball_deathshot_mover(ball) {
    const groundWidth = deathshot_ground.offsetWidth;
    const groundHeight = deathshot_ground.offsetHeight;
    const ballWidth = ball.offsetWidth;
    const ballHeight = ball.offsetHeight;

    let i_deathshot, j_deathshot;
    let overlap = true;

    const balls = [ball_deathshot, ball_deathshot2, ball_deathshot3];
    const otherBalls = balls.filter(b => b !== ball);

    let maxAttempts = 100;
    let attempt = 0;

    while (overlap && attempt < maxAttempts) {
        overlap = false;

        i_deathshot = Math.floor(Math.random() * (groundWidth - ballWidth));
        j_deathshot = Math.floor(Math.random() * (groundHeight - ballHeight));

        const newBallRect = {
            left: i_deathshot,
            right: i_deathshot + ballWidth,
            top: j_deathshot,
            bottom: j_deathshot + ballHeight
        };

        for (let otherBall of otherBalls) {
            const otherBallRect = otherBall.getBoundingClientRect();
            const groundRect = deathshot_ground.getBoundingClientRect();

            const adjustedOtherBallRect = {
                left: otherBallRect.left - groundRect.left,
                right: otherBallRect.right - groundRect.left,
                top: otherBallRect.top - groundRect.top,
                bottom: otherBallRect.bottom - groundRect.top
            };

            if (!(newBallRect.right < adjustedOtherBallRect.left ||
                  newBallRect.left > adjustedOtherBallRect.right ||
                  newBallRect.bottom < adjustedOtherBallRect.top ||
                  newBallRect.top > adjustedOtherBallRect.bottom)) {
                overlap = true;
                break;
            }
        }

        attempt++;
    }

    if (!overlap) {
        ball.style.left = i_deathshot + "px";
        ball.style.top = j_deathshot + "px";
    } else {
        console.error('Could not find a non-overlapping position after ' + maxAttempts + ' attempts.');
    }
}




exit_deathshot.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            deathshot_isrestarted();
            deathshot_page.style.display='none';
            black_transistor.style.opacity='0'
            clicking_page.style.display='block';
            barcode.style.display='block';
            creator.style.display='block';
            
            setTimeout(function(){
                black_transistor.style.display='none';
            },500)
        },1000)
    },1000)
})