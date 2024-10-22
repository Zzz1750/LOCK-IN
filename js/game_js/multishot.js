var background_multishot = document.getElementById('game_back3_multishot');
var background_multishot2 = document.getElementById('game_back2_multishot');
var backgroundpauser_multishot = document.getElementById('backgroundpauser_multishot');

var pause_menu_multishot = document.getElementById('pause_menu_multishot');

var multishot_menu_container = document.getElementById('multishot_menu_container')

var ball_multishot = document.getElementById('ball_multishot');
var ball_multishot2 = document.getElementById('ball_multishot2');

var ticker_data_multishot = document.getElementById('ticker_data_multishot');
var score_multishot = document.getElementById('score_multishot');
var accuracy_multishot = document.getElementById('accuracy_multishot')
var time_multishot = document.getElementById('time_multishot');

var resume_multishot = document.getElementById('resume_multishot');
var restart_multishot = document.getElementById('restart_multishot');

var multishot_system_container = document.getElementById('multishot_system_container');

var game_over_multishot=0;

var multishot_pause_button = document.getElementById('multishot_pause_button');

var multishot_time = 58;
var timerInterval; // Store the interval ID

var multishot_ground = document.getElementById('multishot_ground');


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var switching_page = document.getElementById('switching_page');
var multishot_page = document.getElementById('multishot_page')
var exit_multishot = document.getElementById('exit_multishot');

//game starter
background_multishot.addEventListener('click',function(){
    background_multishot.style.display = 'none';
    backgroundpauser_multishot.style.display = 'block';
    ticker_multishot();
});
function ticker_multishot() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_multishot.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_multishot.style.display = 'none';
        ball_multishot.style.display = 'block';
        ball_multishot2.style.display = 'block';
        backgroundpauser_multishot.style.display = 'none';
        multishot_pause_button.style.display='block';
        multishot_ground.style.display='block'
        time_caller_multishot();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_multishot() {
    var escape_multishot = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_multishot == 0) {
            time_multishot.innerHTML = "0:" + (multishot_time < 10 ? "0" + multishot_time : multishot_time);
            
            if (multishot_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_multishot.innerHTML = "0:00";
                call_multishotover();
            } else {
                multishot_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_multishot == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_multishot = (escape_multishot === 0) ? 1 : 0;
    
                if (escape_multishot == 1) {
                    multishot_ispaused();
                } else {
                    multishot_isresumed();
                }
            }
        }
    });
    

    resume_multishot.addEventListener('click',function(){
        multishot_isresumed();
        escape_multishot=0;
    });

    restart_multishot.addEventListener('click',function(){
        multishot_isrestarted();
    })

    multishot_pause_button.addEventListener('click',function(){
        multishot_ispaused();
        escape_multishot=1;
    })
}

//pause
function multishot_ispaused() {
    multishot_pause_button.style.display='none';
    ball_multishot.style.display='none';
    ball_multishot2.style.display='none';
    multishot_menu_container.style.display='block';
    multishot_system_container.style.display='none';
    multishot_ground.style.display='none'
}

//resume
function multishot_isresumed(){
    multishot_pause_button.style.display='block';
    ball_multishot.style.display='block';
    ball_multishot2.style.display='block';
    multishot_menu_container.style.display='none';
    multishot_system_container.style.display='block';
    multishot_ground.style.display='block'
}


//restart
function multishot_isrestarted(){
    ticker_data_multishot.innerHTML='Click to Start!'
    ticker_data_multishot.style.display='block'
    background_multishot.style.display='block';
    multishot_menu_container.style.display='none';
    multishot_system_container.style.display='block';

    score_decider_multishot = 0;
    multishot_hits = 0;
    multishot_miss = 0;
    accuracy_decider_multishot = 0;
    game_over_multishot = 0;

    score_multishot.innerHTML = "0 pts";
    accuracy_multishot.innerHTML = "0%";
    time_multishot.innerHTML = "0:59";

    multishot_time=58;

    ball_multishot.style.top='40%';
    ball_multishot.style.left= '33%';

    ball_multishot2.style.top='40%';
    ball_multishot2.style.left= '57%';
    clearInterval(timerInterval); // Clear any existing timer

}

//Game over
function call_multishotover(){
    game_over_multishot=1;
    ticker_data_multishot.style.display='block';
    backgroundpauser_multishot.style.display='block';
    ticker_data_multishot.style.fontSize='100px';
    ticker_data_multishot.innerHTML='Game Over';
    ball_multishot.style.display='none';
    ball_multishot2.style.display='none';
    multishot_pause_button.style.display='none';
    multishot_ground.style.display='none'
    setTimeout(function(){
        result_screen(score_decider_multishot,accuracy_decider_multishot,multishot_page,'Result <br>Multi<span style="color: red;">Shot',switching_page, 'Multi<span style="color: red;">Shot</span>','mutishot_page');
        mapswitch_isrestarted();    
    },3000);}

var i_multishot=0;
var j_multishot=0;
var score_decider_multishot=0;
var accuracy_decider_multishot = 0;
var multishot_hits=0;
var multishot_miss=0;

var ball1 = true;
var ball2 = true;

ball_multishot.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up to the ground
    ball1 = false;
    ball_multishot.style.display='none';
    multishot_game_system();    
});
ball_multishot2.addEventListener('click', function(event) {
    ball2 = false;
    ball_multishot2.style.display='none';
    event.stopPropagation();
    multishot_game_system();    

});



function multishot_game_system(){

    if(ball1 == false && ball2 == false){
        ball_multishot_mover();
    }
    
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);
    score_decider_multishot = score_decider_multishot + new_value;
    score_multishot.innerHTML = score_decider_multishot + " pts";
    multishot_hits++;
    multishot_accuracy_management();

    
}

function multishot_onground(){
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_multishot = score_decider_multishot - new_value;

    if (score_decider_multishot <= 0) {
        score_decider_multishot = 0;
    }
    score_multishot.innerHTML = score_decider_multishot + " pts";
    multishot_miss++;
    multishot_accuracy_management();
}

background_multishot2.addEventListener('click', function() {
    multishot_onground();
});

multishot_ground.addEventListener('click', function() {
    multishot_onground();
});


function multishot_accuracy_management(){
    accuracy_decider_multishot = Math.ceil((multishot_hits / (multishot_hits + multishot_miss)) * 100);
    accuracy_multishot.innerHTML = accuracy_decider_multishot+"%";
}



//ball mover
function ball_multishot_mover(){
    ball_multishot.style.display='block';
    ball_multishot2.style.display='block';
    ball1 = true;
    ball2 = true;
    const groundWidth = multishot_ground.offsetWidth;
    const groundHeight = multishot_ground.offsetHeight;
    const ballWidth = ball_multishot.offsetWidth;
    const ballHeight = ball_multishot.offsetHeight;

    let i_multishot = Math.floor(Math.random() * (groundWidth - ballWidth));
    let j_multishot = Math.floor(Math.random() * (groundHeight - ballHeight));

    var multishot_space_reducer = Math.floor(Math.random() * (400 - 200 + 1)) + 200;

    ball_multishot.style.left = i_multishot + "px";
    ball_multishot2.style.left = i_multishot - multishot_space_reducer + 'px';
    ball_multishot.style.top = j_multishot + "px";
    ball_multishot2.style.top = j_multishot + "px";
}

exit_multishot.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            multishot_isrestarted();
            multishot_page.style.display='none';
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