var background_runner = document.getElementById('game_back3_runner');
var background_runner2 = document.getElementById('game_back2_runner');
var backgroundpauser_runner = document.getElementById('backgroundpauser_runner');

var pause_menu_runner = document.getElementById('pause_menu_runner');

var runner_menu_container = document.getElementById('runner_menu_container')

var ball_runner = document.getElementById('ball_runner')
var midball_runner = document.getElementById('midball_runner');

var ticker_data_runner = document.getElementById('ticker_data_runner');
var score_runner = document.getElementById('score_runner');
var accuracy_runner = document.getElementById('accuracy_runner')
var time_runner = document.getElementById('time_runner');

var resume_runner = document.getElementById('resume_runner');
var restart_runner = document.getElementById('restart_runner');

var runner_system_container = document.getElementById('runner_system_container');

var game_over_runner=0;

var runner_pause_button = document.getElementById('runner_pause_button');

var runner_time = 58;
var timerInterval; // Store the interval ID

var runner_ground = document.getElementById('runner_ground');


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var switching_page = document.getElementById('switching_page');
var runner_page = document.getElementById('runner_page')
var exit_runner = document.getElementById('exit_runner');

//game starter
background_runner.addEventListener('click',function(){
    background_runner.style.display = 'none';
    backgroundpauser_runner.style.display = 'block';
    ticker_runner();
});
function ticker_runner() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_runner.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_runner.style.display = 'none';
        backgroundpauser_runner.style.display = 'none';
        runner_pause_button.style.display='block';
        runner_ground.style.display='block'
        midball_runner.style.display='block';
        time_caller_runner();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_runner() {
    var escape_runner = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_runner == 0) {
            time_runner.innerHTML = "0:" + (runner_time < 10 ? "0" + runner_time : runner_time);
            
            if (runner_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_runner.innerHTML = "0:00";
                call_runnerover();
            } else {
                runner_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_runner == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_runner = (escape_runner === 0) ? 1 : 0;
    
                if (escape_runner == 1) {
                    runner_ispaused();
                } else {
                    runner_isresumed();
                }
            }
        }
    });
    

    resume_runner.addEventListener('click',function(){
        runner_isresumed();
        escape_runner=0;
    });

    restart_runner.addEventListener('click',function(){
        runner_isrestarted();
    })

    runner_pause_button.addEventListener('click',function(){
        runner_ispaused();
        escape_runner=1;
    })
}

//pause
function runner_ispaused() {
    runner_pause_button.style.display='none';
    ball_runner.style.display='none';
    runner_menu_container.style.display='block';
    runner_system_container.style.display='none';
    runner_ground.style.display='none';
}

//resume
function runner_isresumed(){
    runner_pause_button.style.display='block';
    ball_runner.style.display='none';
    midball_runner.style.display='block '
    runner_menu_container.style.display='none';
    runner_system_container.style.display='block';
    runner_ground.style.display='block';
}


//restart
function runner_isrestarted(){
    ticker_data_runner.innerHTML='Click to Start!'
    ticker_data_runner.style.display='block'
    background_runner.style.display='block';
    runner_menu_container.style.display='none';
    runner_system_container.style.display='block';

    score_decider_runner = 0;
    runner_hits = 0;
    runner_miss = 0;
    accuracy_decider_runner = 0;
    game_over_runner = 0;

    score_runner.innerHTML = "0 pts";
    accuracy_runner.innerHTML = "0%";
    time_runner.innerHTML = "0:59";

    runner_time=58;

    ball_runner.style.top='40%';
    ball_runner.style.left= '30%';
    clearInterval(timerInterval); // Clear any existing timer

}

//Game over
function call_runnerover(){
    game_over_runner=1;
    ticker_data_runner.style.display='block';
    backgroundpauser_runner.style.display='block';
    ticker_data_runner.style.fontSize='100px';
    ticker_data_runner.innerHTML='Game Over';
    ball_runner.style.display='none';
    runner_pause_button.style.display='none';
    runner_ground.style.display='none'
    setTimeout(function(){
        result_screen(score_decider_runner,accuracy_decider_runner,runner_page,'Result <br>Runner<span style="color: red;">Shot',tracking_page, 'Runner<span style="color: red;">Shot</span>','runner_page');
        runner_isrestarted();    
    },2000);
}

var i_runner=0;
var j_runner=0;
var score_decider_runner=0;
var accuracy_decider_runner = 0;
var runner_hits=0;
var runner_miss=0;

ball_runner.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up to the ground

    ball_runner_mover();
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_runner = score_decider_runner + new_value;
    score_runner.innerHTML = score_decider_runner + " pts";

    runner_hits++;
    runner_accuracy_management();
});

runner_ground.addEventListener('click', function() {
    console.log('onground');
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_runner = score_decider_runner - new_value;

    if (score_decider_runner <= 0) {
        score_decider_runner = 0;
    }
    score_runner.innerHTML = score_decider_runner + " pts";
    runner_miss++;
    runner_accuracy_management();
});


function runner_accuracy_management(){
    accuracy_decider_runner = Math.ceil((runner_hits / (runner_hits + runner_miss)) * 100);
    accuracy_runner.innerHTML = accuracy_decider_runner+"%";
}


midball_runner.addEventListener('click',function(){
    event.stopPropagation(); // Prevents the event from bubbling up to the ground
    midball_runner.style.display='none';
    ball_runner.style.display='block';

    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_runner = score_decider_runner + new_value;
    score_runner.innerHTML = score_decider_runner + " pts";

    runner_hits++;
})

//ball mover
function ball_runner_mover(){
    ball_runner.style.top = '44%';
    ball_runner.style.left = '50%';
    
    ball_runner.style.transition = 'top 1s ease, left 1s ease'; 

    const groundWidth = runner_ground.offsetWidth;
    const groundHeight = runner_ground.offsetHeight;
    const ballWidth = ball_runner.offsetWidth;
    const ballHeight = ball_runner.offsetHeight;

    let i_runner = Math.floor(Math.random() * (groundWidth - ballWidth));
    let j_runner = Math.floor(Math.random() * (groundHeight - ballHeight));

    ball_runner.style.display = 'block';
    midball_runner.style.display = 'none';

    setTimeout(() => {
        ball_runner.style.left = i_runner + "px";
        ball_runner.style.top = j_runner + "px";
    }, 50);
}


exit_runner.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            runner_isrestarted();
            runner_page.style.display='none';
            black_transistor.style.opacity='0'
            switching_page.style.display='block';
            barcode.style.display='block';
            creator.style.display='block';
            
            setTimeout(function(){
                black_transistor.style.display='none';
            },500)
        },1000)
    },1000)
})