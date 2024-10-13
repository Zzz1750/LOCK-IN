var background_burstshot = document.getElementById('game_back3_burstshot');
var background_burstshot2 = document.getElementById('game_back2_burstshot');
var backgroundpauser_burstshot = document.getElementById('backgroundpauser_burstshot');

var pause_menu_burstshot = document.getElementById('pause_menu_burstshot');

var burstshot_menu_container = document.getElementById('burstshot_menu_container')

var ball_burstshot = document.getElementById('ball_burstshot')
var midball_burstshot = document.getElementById('midball_burstshot');

var ticker_data_burstshot = document.getElementById('ticker_data_burstshot');
var score_burstshot = document.getElementById('score_burstshot');
var accuracy_burstshot = document.getElementById('accuracy_burstshot')
var time_burstshot = document.getElementById('time_burstshot');

var resume_burstshot = document.getElementById('resume_burstshot');
var restart_burstshot = document.getElementById('restart_burstshot');

var burstshot_system_container = document.getElementById('burstshot_system_container');

var game_over_burstshot=0;

var burstshot_pause_button = document.getElementById('burstshot_pause_button');

var burstshot_time = 58;
var timerInterval; // Store the interval ID

var burstshot_ground = document.getElementById('burstshot_ground');


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var switching_page = document.getElementById('switching_page');
var burstshot_page = document.getElementById('burstshot_page')
var exit_burstshot = document.getElementById('exit_burstshot');

//game starter
background_burstshot.addEventListener('click',function(){
    background_burstshot.style.display = 'none';
    backgroundpauser_burstshot.style.display = 'block';
    ticker_burstshot();
});
function ticker_burstshot() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_burstshot.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_burstshot.style.display = 'none';
        backgroundpauser_burstshot.style.display = 'none';
        burstshot_pause_button.style.display='block';
        burstshot_ground.style.display='block'
        midball_burstshot.style.display='block';
        time_caller_burstshot();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_burstshot() {
    var escape_burstshot = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_burstshot == 0) {
            time_burstshot.innerHTML = "0:" + (burstshot_time < 10 ? "0" + burstshot_time : burstshot_time);
            
            if (burstshot_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_burstshot.innerHTML = "0:00";
                call_burstshotover();
            } else {
                burstshot_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_burstshot == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_burstshot = (escape_burstshot === 0) ? 1 : 0;
    
                if (escape_burstshot == 1) {
                    burstshot_ispaused();
                } else {
                    burstshot_isresumed();
                }
            }
        }
    });
    

    resume_burstshot.addEventListener('click',function(){
        burstshot_isresumed();
        escape_burstshot=0;
    });

    restart_burstshot.addEventListener('click',function(){
        burstshot_isrestarted();
    })

    burstshot_pause_button.addEventListener('click',function(){
        burstshot_ispaused();
        escape_burstshot=1;
    })
}

//pause
function burstshot_ispaused() {
    burstshot_pause_button.style.display='none';
    ball_burstshot.style.display='none';
    burstshot_menu_container.style.display='block';
    burstshot_system_container.style.display='none';
    burstshot_ground.style.display='none';
}

//resume
function burstshot_isresumed(){
    burstshot_pause_button.style.display='block';
    ball_burstshot.style.display='none';
    midball_burstshot.style.display='block '
    burstshot_menu_container.style.display='none';
    burstshot_system_container.style.display='block';
    burstshot_ground.style.display='block';
}


//restart
function burstshot_isrestarted(){
    ticker_data_burstshot.innerHTML='Click to Start!'
    ticker_data_burstshot.style.display='block'
    background_burstshot.style.display='block';
    burstshot_menu_container.style.display='none';
    burstshot_system_container.style.display='block';

    score_decider_burstshot = 0;
    burstshot_hits = 0;
    burstshot_miss = 0;
    accuracy_decider_burstshot = 0;
    game_over_burstshot = 0;

    score_burstshot.innerHTML = "0 pts";
    accuracy_burstshot.innerHTML = "0%";
    time_burstshot.innerHTML = "0:59";

    burstshot_time=58;

    ball_burstshot.style.top='40%';
    ball_burstshot.style.left= '30%';
    clearInterval(timerInterval); // Clear any existing timer

}

//Game over
function call_burstshotover(){
    game_over_burstshot=1;
    ticker_data_burstshot.style.display='block';
    backgroundpauser_burstshot.style.display='block';
    ticker_data_burstshot.style.fontSize='100px';
    ticker_data_burstshot.innerHTML='Game Over';
    ball_burstshot.style.display='none';
    burstshot_pause_button.style.display='none';
    burstshot_ground.style.display='none'
    console.log("Score: "+score_decider_burstshot+"\nAccuracy:"+accuracy_decider_burstshot);
}

var i_burstshot=0;
var j_burstshot=0;
var score_decider_burstshot=0;
var accuracy_decider_burstshot = 0;
var burstshot_hits=0;
var burstshot_miss=0;

ball_burstshot.addEventListener('click', function(event) {
    console.log('ball');
    event.stopPropagation(); // Prevents the event from bubbling up to the ground

    ball_burstshot_mover();
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_burstshot = score_decider_burstshot + new_value;
    score_burstshot.innerHTML = score_decider_burstshot + " pts";

    burstshot_hits++;
    burstshot_accuracy_management();
});

burstshot_ground.addEventListener('click', function() {
    console.log('onground');
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_burstshot = score_decider_burstshot - new_value;

    if (score_decider_burstshot <= 0) {
        score_decider_burstshot = 0;
    }
    score_burstshot.innerHTML = score_decider_burstshot + " pts";
    burstshot_miss++;
    burstshot_accuracy_management();
});


function burstshot_accuracy_management(){
    accuracy_decider_burstshot = Math.ceil((burstshot_hits / (burstshot_hits + burstshot_miss)) * 100);
    accuracy_burstshot.innerHTML = accuracy_decider_burstshot+"%";
}


midball_burstshot.addEventListener('click',function(){
    event.stopPropagation(); // Prevents the event from bubbling up to the ground
    midball_burstshot.style.display='none';
    ball_burstshot.style.display='block';

    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_burstshot = score_decider_burstshot + new_value;
    score_burstshot.innerHTML = score_decider_burstshot + " pts";

    burstshot_hits++;
})

//ball mover
function ball_burstshot_mover(){
    const groundWidth = burstshot_ground.offsetWidth;
    const groundHeight = burstshot_ground.offsetHeight;
    const ballWidth = ball_burstshot.offsetWidth;
    const ballHeight = ball_burstshot.offsetHeight;

    let i_burstshot = Math.floor(Math.random() * (groundWidth - ballWidth));
    let j_burstshot = Math.floor(Math.random() * (groundHeight - ballHeight));

    ball_burstshot.style.left = i_burstshot + "px";
    ball_burstshot.style.top = j_burstshot + "px";
    ball_burstshot.style.display='none';
    midball_burstshot.style.display='block'
}

exit_burstshot.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            burstshot_isrestarted();
            burstshot_page.style.display='none';
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