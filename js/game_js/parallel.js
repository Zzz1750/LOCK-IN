var background_parallel = document.getElementById('game_back3_parallel');
var background_parallel2 = document.getElementById('game_back2_parallel');
var backgroundpauser_parallel = document.getElementById('backgroundpauser_parallel');

var pause_menu_parallel = document.getElementById('pause_menu_parallel');

var parallel_menu_container = document.getElementById('parallel_menu_container')

var ball_parallel = document.getElementById('ball_parallel')
var ticker_data_parallel = document.getElementById('ticker_data_parallel');
var score_parallel = document.getElementById('score_parallel');
var accuracy_parallel = document.getElementById('accuracy_parallel')
var time_parallel = document.getElementById('time_parallel');

var resume_parallel = document.getElementById('resume_parallel');
var restart_parallel = document.getElementById('restart_parallel');

var parallel_system_container = document.getElementById('parallel_system_container');

var game_over_parallel=0;

var parallel_pause_button = document.getElementById('parallel_pause_button');

var parallel_time = 58;
var timerInterval; // Store the interval ID


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var clicking_page = document.getElementById('clicking_page');
var parallel_page = document.getElementById('parallel_page')
var exit_parallel = document.getElementById('exit_parallel');

//game starter
background_parallel.addEventListener('click',function(){
    background_parallel.style.display = 'none';
    backgroundpauser_parallel.style.display = 'block';
    ticker_parallel();
});
function ticker_parallel() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_parallel.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_parallel.style.display = 'none';
        ball_parallel.style.display = 'block';
        backgroundpauser_parallel.style.display = 'none';
        parallel_pause_button.style.display='block';
        time_caller_parallel();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_parallel() {
    var escape_parallel = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_parallel == 0) {
            time_parallel.innerHTML = "0:" + (parallel_time < 10 ? "0" + parallel_time : parallel_time);
            
            if (parallel_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_parallel.innerHTML = "0:00";
                call_parallelover();
            } else {
                parallel_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_parallel == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_parallel = (escape_parallel === 0) ? 1 : 0;
    
                if (escape_parallel == 1) {
                    parallel_ispaused();
                } else {
                    parallel_isresumed();
                }
            }
        }
    });
    

    resume_parallel.addEventListener('click',function(){
        parallel_isresumed();
        escape_parallel=0;
    });

    restart_parallel.addEventListener('click',function(){
        parallel_isrestarted();
    })

    parallel_pause_button.addEventListener('click',function(){
        parallel_ispaused();
        escape_parallel=1;
    })
}

//pause
function parallel_ispaused() {
    parallel_pause_button.style.display='none';
    ball_parallel.style.display='none';
    parallel_menu_container.style.display='block';
    parallel_system_container.style.display='none';
}

//resume
function parallel_isresumed(){
    parallel_pause_button.style.display='block';
    ball_parallel.style.display='block';
    parallel_menu_container.style.display='none';
    parallel_system_container.style.display='block';
}


//restart
function parallel_isrestarted(){
    ticker_data_parallel.innerHTML='Click to Start!'
    ticker_data_parallel.style.display='block'
    background_parallel.style.display='block';
    parallel_menu_container.style.display='none';
    parallel_system_container.style.display='block';

    score_decider_parallel = 0;
    parallel_hits = 0;
    parallel_miss = 0;
    accuracy_decider_parallel = 0;
    game_over_parallel = 0;

    score_parallel.innerHTML = "0 pts";
    accuracy_parallel.innerHTML = "0%";
    time_parallel.innerHTML = "0:59";

    parallel_time=58;

    ball_parallel.style.top='40%';
    ball_parallel.style.left= '48%';
    clearInterval(timerInterval); // Clear any existing timer

}


var i_parallel=0;
var j_parallel=0;
var score_decider_parallel=0;
var accuracy_decider_parallel = 0;
var parallel_hits=0;
var parallel_miss=0;

ball_parallel.addEventListener('click', function() {
    ball_parallel_mover();
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_parallel = score_decider_parallel+new_value;
    score_parallel.innerHTML = score_decider_parallel+" pts";

    parallel_hits++;
    parallel_accuracy_management();
});

background_parallel2.addEventListener('click',function(){
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_parallel = score_decider_parallel - new_value;

    if(score_decider_parallel <= 0){
        score_decider_parallel=0;
    }
    score_parallel.innerHTML=score_decider_parallel+" pts";
    parallel_miss++;
    parallel_accuracy_management();
});

function parallel_accuracy_management(){
    accuracy_decider_parallel = Math.ceil((parallel_hits / (parallel_hits + parallel_miss)) * 100);
    accuracy_parallel.innerHTML = accuracy_decider_parallel+"%";
}



//ball mover
function ball_parallel_mover(){
    const topRestrictedZone_parallel= 100;

    let i_parallel = Math.floor(Math.random() * (window.innerWidth - ball_parallel.offsetWidth));
    let j_parallel = Math.floor(Math.random() * (window.innerHeight - ball_parallel.offsetHeight));

    if (j_parallel < topRestrictedZone_parallel) {
        ball_parallel_mover();
    } 
    else {
        ball_parallel.style.left = i_parallel + "px";
        ball_parallel.style.top = j_parallel + "px";  
    }
}

exit_parallel.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            parallel_isrestarted();
            parallel_page.style.display='none';
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


//Game over
function call_parallelover(){
    game_over_parallel=1;
    ticker_data_parallel.style.display='block';
    backgroundpauser_parallel.style.display='block';
    ticker_data_parallel.style.fontSize='100px';
    ticker_data_parallel.innerHTML='Game Over';
    ball_parallel.style.display='none';
    parallel_pause_button.style.display='none';
    setTimeout(function(){
        result_screen(score_decider_parallel,accuracy_decider_parallel,parallel_page,'Result <br>Parallel<span style="color: red;">Shot',tracking_page, 'Parallel<span style="color: red;">Shot</span>','parallel_page');
        parallel_isrestarted();    
    },3000);

}