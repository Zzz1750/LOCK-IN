var background_evadetrack = document.getElementById('game_back3_evadetrack');
var background_evadetrack2 = document.getElementById('game_back2_evadetrack');
var backgroundpauser_evadetrack = document.getElementById('backgroundpauser_evadetrack');

var pause_menu_evadetrack = document.getElementById('pause_menu_evadetrack');

var evadetrack_menu_container = document.getElementById('evadetrack_menu_container')

var ball_evadetrack = document.getElementById('ball_evadetrack')
var ticker_data_evadetrack = document.getElementById('ticker_data_evadetrack');
var score_evadetrack = document.getElementById('score_evadetrack');
var accuracy_evadetrack = document.getElementById('accuracy_evadetrack')
var time_evadetrack = document.getElementById('time_evadetrack');

var resume_evadetrack = document.getElementById('resume_evadetrack');
var restart_evadetrack = document.getElementById('restart_evadetrack');

var evadetrack_system_container = document.getElementById('evadetrack_system_container');

var game_over_evadetrack=0;

var evadetrack_pause_button = document.getElementById('evadetrack_pause_button');

var evadetrack_time = 58;
var timerInterval; // Store the interval ID


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var clicking_page = document.getElementById('clicking_page');
var evadetrack_page = document.getElementById('evadetrack_page')
var exit_evadetrack = document.getElementById('exit_evadetrack');

//game starter
background_evadetrack.addEventListener('click',function(){
    background_evadetrack.style.display = 'none';
    backgroundpauser_evadetrack.style.display = 'block';
    ticker_evadetrack();
});
function ticker_evadetrack() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_evadetrack.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_evadetrack.style.display = 'none';
        ball_evadetrack.style.display = 'block';
        backgroundpauser_evadetrack.style.display = 'none';
        evadetrack_pause_button.style.display='block';
        time_caller_evadetrack();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_evadetrack() {
    var escape_evadetrack = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_evadetrack == 0) {
            time_evadetrack.innerHTML = "0:" + (evadetrack_time < 10 ? "0" + evadetrack_time : evadetrack_time);
            
            if (evadetrack_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_evadetrack.innerHTML = "0:00";
                call_evadetrackover();
            } else {
                evadetrack_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_evadetrack == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_evadetrack = (escape_evadetrack === 0) ? 1 : 0;
    
                if (escape_evadetrack == 1) {
                    evadetrack_ispaused();
                } else {
                    evadetrack_isresumed();
                }
            }
        }
    });
    

    resume_evadetrack.addEventListener('click',function(){
        evadetrack_isresumed();
        escape_evadetrack=0;
    });

    restart_evadetrack.addEventListener('click',function(){
        evadetrack_isrestarted();
    })

    evadetrack_pause_button.addEventListener('click',function(){
        evadetrack_ispaused();
        escape_evadetrack=1;
    })
}

//pause
function evadetrack_ispaused() {
    evadetrack_pause_button.style.display='none';
    ball_evadetrack.style.display='none';
    evadetrack_menu_container.style.display='block';
    evadetrack_system_container.style.display='none';
}

//resume
function evadetrack_isresumed(){
    evadetrack_pause_button.style.display='block';
    ball_evadetrack.style.display='block';
    evadetrack_menu_container.style.display='none';
    evadetrack_system_container.style.display='block';
}


//restart
function evadetrack_isrestarted(){
    ticker_data_evadetrack.innerHTML='Click to Start!'
    ticker_data_evadetrack.style.display='block'
    background_evadetrack.style.display='block';
    evadetrack_menu_container.style.display='none';
    evadetrack_system_container.style.display='block';

    score_decider_evadetrack = 0;
    evadetrack_hits = 0;
    evadetrack_miss = 0;
    accuracy_decider_evadetrack = 0;
    game_over_evadetrack = 0;

    score_evadetrack.innerHTML = "0 pts";
    accuracy_evadetrack.innerHTML = "0%";
    time_evadetrack.innerHTML = "0:59";

    evadetrack_time=58;

    ball_evadetrack.style.top='40%';
    ball_evadetrack.style.left= '48%';
    clearInterval(timerInterval); // Clear any existing timer

}


var i_evadetrack=0;
var j_evadetrack=0;
var score_decider_evadetrack=0;
var accuracy_decider_evadetrack = 0;
var evadetrack_hits=0;
var evadetrack_miss=0;

ball_evadetrack.addEventListener('click', function() {
    ball_evadetrack_mover();
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_evadetrack = score_decider_evadetrack+new_value;
    score_evadetrack.innerHTML = score_decider_evadetrack+" pts";

    evadetrack_hits++;
    evadetrack_accuracy_management();
});

background_evadetrack2.addEventListener('click',function(){
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_evadetrack = score_decider_evadetrack - new_value;

    if(score_decider_evadetrack <= 0){
        score_decider_evadetrack=0;
    }
    score_evadetrack.innerHTML=score_decider_evadetrack+" pts";
    evadetrack_miss++;
    evadetrack_accuracy_management();
});

function evadetrack_accuracy_management(){
    accuracy_decider_evadetrack = Math.ceil((evadetrack_hits / (evadetrack_hits + evadetrack_miss)) * 100);
    accuracy_evadetrack.innerHTML = accuracy_decider_evadetrack+"%";
}



//ball mover
function ball_evadetrack_mover(){
    const topRestrictedZone_evadetrack= 100;

    let i_evadetrack = Math.floor(Math.random() * (window.innerWidth - ball_evadetrack.offsetWidth));
    let j_evadetrack = Math.floor(Math.random() * (window.innerHeight - ball_evadetrack.offsetHeight));

    if (j_evadetrack < topRestrictedZone_evadetrack) {
        ball_evadetrack_mover();
    } 
    else {
        ball_evadetrack.style.left = i_evadetrack + "px";
        ball_evadetrack.style.top = j_evadetrack + "px";  
    }
}

exit_evadetrack.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            evadetrack_isrestarted();
            evadetrack_page.style.display='none';
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
function call_evadetrackover(){
    game_over_evadetrack=1;
    ticker_data_evadetrack.style.display='block';
    backgroundpauser_evadetrack.style.display='block';
    ticker_data_evadetrack.style.fontSize='100px';
    ticker_data_evadetrack.innerHTML='Game Over';
    ball_evadetrack.style.display='none';
    evadetrack_pause_button.style.display='none';
    setTimeout(function(){
        result_screen(score_decider_evadetrack,accuracy_decider_evadetrack,evadetrack_page,'Result <br>Evade<span style="color: red;">Track',tracking_page, 'Evade<span style="color: red;">Track</span>','evadetrack_page');
        evadetrack_isrestarted();    
    },3000);

}