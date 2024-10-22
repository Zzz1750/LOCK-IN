var background_microshot = document.getElementById('game_back3_microshot');
var background_microshot2 = document.getElementById('game_back2_microshot');
var backgroundpauser_microshot = document.getElementById('backgroundpauser_microshot');

var pause_menu_microshot = document.getElementById('pause_menu_microshot');

var microshot_menu_container = document.getElementById('microshot_menu_container')

var ball_microshot = document.getElementById('ball_microshot')
var ticker_data_microshot = document.getElementById('ticker_data_microshot');
var score_microshot = document.getElementById('score_microshot');
var accuracy_microshot = document.getElementById('accuracy_microshot')
var time_microshot = document.getElementById('time_microshot');

var resume_microshot = document.getElementById('resume_microshot');
var restart_microshot = document.getElementById('restart_microshot');

var microshot_system_container = document.getElementById('microshot_system_container');

var game_over_microshot=0;

var microshot_pause_button = document.getElementById('microshot_pause_button');

var microshot_time = 58;
var timerInterval; // Store the interval ID

var microshot_ground = document.getElementById('microshot_ground');


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var clicking_page = document.getElementById('clicking_page');
var microshot_page = document.getElementById('microshot_page')
var exit_microshot = document.getElementById('exit_microshot');

//game starter
background_microshot.addEventListener('click',function(){
    background_microshot.style.display = 'none';
    backgroundpauser_microshot.style.display = 'block';
    ticker_microshot();
});
function ticker_microshot() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_microshot.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_microshot.style.display = 'none';
        ball_microshot.style.display = 'block';
        backgroundpauser_microshot.style.display = 'none';
        microshot_pause_button.style.display='block';
        microshot_ground.style.display='block'
        time_caller_microshot();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_microshot() {
    var escape_microshot = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_microshot == 0) {
            time_microshot.innerHTML = "0:" + (microshot_time < 10 ? "0" + microshot_time : microshot_time);
            
            if (microshot_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_microshot.innerHTML = "0:00";
                call_microshotover();
            } else {
                microshot_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_microshot == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_microshot = (escape_microshot === 0) ? 1 : 0;
    
                if (escape_microshot == 1) {
                    microshot_ispaused();
                } else {
                    microshot_isresumed();
                }
            }
        }
    });
    

    resume_microshot.addEventListener('click',function(){
        microshot_isresumed();
        escape_microshot=0;
    });

    restart_microshot.addEventListener('click',function(){
        microshot_isrestarted();
    })

    microshot_pause_button.addEventListener('click',function(){
        microshot_ispaused();
        escape_microshot=1;
    })
}

//pause
function microshot_ispaused() {
    microshot_pause_button.style.display='none';
    ball_microshot.style.display='none';
    microshot_menu_container.style.display='block';
    microshot_system_container.style.display='none';
    microshot_ground.style.display='none'
}

//resume
function microshot_isresumed(){
    microshot_pause_button.style.display='block';
    ball_microshot.style.display='block';
    microshot_menu_container.style.display='none';
    microshot_system_container.style.display='block';
    microshot_ground.style.display='block'
}


//restart
function microshot_isrestarted(){
    ticker_data_microshot.innerHTML='Click to Start!'
    ticker_data_microshot.style.display='block'
    background_microshot.style.display='block';
    microshot_menu_container.style.display='none';
    microshot_system_container.style.display='block';

    score_decider_microshot = 0;
    microshot_hits = 0;
    microshot_miss = 0;
    accuracy_decider_microshot = 0;
    game_over_microshot = 0;

    score_microshot.innerHTML = "0 pts";
    accuracy_microshot.innerHTML = "0%";
    time_microshot.innerHTML = "0:59";

    microshot_time=58;

    ball_microshot.style.top='40%';
    ball_microshot.style.left= '48%';
    clearInterval(timerInterval); // Clear any existing timer

}

//Game over
function call_microshotover(){
    game_over_microshot=1;
    ticker_data_microshot.style.display='block';
    backgroundpauser_microshot.style.display='block';
    ticker_data_microshot.style.fontSize='100px';
    ticker_data_microshot.innerHTML='Game Over';
    ball_microshot.style.display='none';
    microshot_pause_button.style.display='none';
    microshot_ground.style.display='none'
    setTimeout(function(){
        result_screen(score_decider_microshot,accuracy_decider_microshot,microshot_page,'Result <br>Micro<span style="color: red;">Shot',clicking_page, 'Micro<span style="color: red;">Shot</span>','microshot_page');
        microshot_isrestarted();    
    },3000); 
}

var i_microshot=0;
var j_microshot=0;
var score_decider_microshot=0;
var accuracy_decider_microshot = 0;
var microshot_hits=0;
var microshot_miss=0;

ball_microshot.addEventListener('click', function(event) {
    console.log('ball');
    event.stopPropagation(); // Prevents the event from bubbling up to the ground

    ball_microshot_mover();
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_microshot = score_decider_microshot + new_value;
    score_microshot.innerHTML = score_decider_microshot + " pts";

    microshot_hits++;
    microshot_accuracy_management();
});

microshot_ground.addEventListener('click', function() {
    console.log('onground');
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_microshot = score_decider_microshot - new_value;

    if (score_decider_microshot <= 0) {
        score_decider_microshot = 0;
    }
    score_microshot.innerHTML = score_decider_microshot + " pts";
    microshot_miss++;
    microshot_accuracy_management();
});


function microshot_accuracy_management(){
    accuracy_decider_microshot = Math.ceil((microshot_hits / (microshot_hits + microshot_miss)) * 100);
    accuracy_microshot.innerHTML = accuracy_decider_microshot+"%";
}



//ball mover
function ball_microshot_mover(){
    const groundWidth = microshot_ground.offsetWidth;
    const groundHeight = microshot_ground.offsetHeight;
    const ballWidth = ball_microshot.offsetWidth;
    const ballHeight = ball_microshot.offsetHeight;

    let i_microshot = Math.floor(Math.random() * (groundWidth - ballWidth));
    let j_microshot = Math.floor(Math.random() * (groundHeight - ballHeight));

    ball_microshot.style.left = i_microshot + "px";
    ball_microshot.style.top = j_microshot + "px";
}

exit_microshot.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            microshot_isrestarted();
            microshot_page.style.display='none';
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