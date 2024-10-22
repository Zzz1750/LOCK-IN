var background_headshot = document.getElementById('game_back3_headshot');
var background_headshot2 = document.getElementById('game_back2_headshot');
var backgroundpauser_headshot = document.getElementById('backgroundpauser_headshot');

var pause_menu_headshot = document.getElementById('pause_menu_headshot');

var headshot_menu_container = document.getElementById('headshot_menu_container')

var ball_headshot = document.getElementById('ball_headshot')
var ticker_data_headshot = document.getElementById('ticker_data_headshot');
var score_headshot = document.getElementById('score_headshot');
var accuracy_headshot = document.getElementById('accuracy_headshot')
var time_headshot = document.getElementById('time_headshot');

var resume_headshot = document.getElementById('resume_headshot');
var restart_headshot = document.getElementById('restart_headshot');

var headshot_system_container = document.getElementById('headshot_system_container');

var game_over_headshot=0;

var headshot_pause_button = document.getElementById('headshot_pause_button');

var headshot_time = 58;
var timerInterval; // Store the interval ID


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var clicking_page = document.getElementById('clicking_page');
var headshot_page = document.getElementById('headshot_page')
var exit_headshot = document.getElementById('exit_headshot');

//game starter
background_headshot.addEventListener('click',function(){
    background_headshot.style.display = 'none';
    backgroundpauser_headshot.style.display = 'block';
    ticker_headshot();
});
function ticker_headshot() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_headshot.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_headshot.style.display = 'none';
        ball_headshot.style.display = 'block';
        backgroundpauser_headshot.style.display = 'none';
        headshot_pause_button.style.display='block';
        time_caller_headshot();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_headshot() {
    var escape_headshot = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_headshot == 0) {
            time_headshot.innerHTML = "0:" + (headshot_time < 10 ? "0" + headshot_time : headshot_time);
            
            if (headshot_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_headshot.innerHTML = "0:00";
                call_headshotover();
            } else {
                headshot_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_headshot == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_headshot = (escape_headshot === 0) ? 1 : 0;
    
                if (escape_headshot == 1) {
                    headshot_ispaused();
                } else {
                    headshot_isresumed();
                }
            }
        }
    });
    

    resume_headshot.addEventListener('click',function(){
        headshot_isresumed();
        escape_headshot=0;
    });

    restart_headshot.addEventListener('click',function(){
        headshot_isrestarted();
    })

    headshot_pause_button.addEventListener('click',function(){
        headshot_ispaused();
        escape_headshot=1;
    })
}

//pause
function headshot_ispaused() {
    headshot_pause_button.style.display='none';
    ball_headshot.style.display='none';
    headshot_menu_container.style.display='block';
    headshot_system_container.style.display='none';
}

//resume
function headshot_isresumed(){
    headshot_pause_button.style.display='block';
    ball_headshot.style.display='block';
    headshot_menu_container.style.display='none';
    headshot_system_container.style.display='block';
}


//restart
function headshot_isrestarted(){
    ticker_data_headshot.innerHTML='Click to Start!'
    ticker_data_headshot.style.display='block'
    background_headshot.style.display='block';
    headshot_menu_container.style.display='none';
    headshot_system_container.style.display='block';

    score_decider_headshot = 0;
    headshot_hits = 0;
    headshot_miss = 0;
    accuracy_decider_headshot = 0;
    game_over_headshot = 0;

    score_headshot.innerHTML = "0 pts";
    accuracy_headshot.innerHTML = "0%";
    time_headshot.innerHTML = "0:59";

    headshot_time=58;

    ball_headshot.style.top='40%';
    ball_headshot.style.left= '48%';
    clearInterval(timerInterval); // Clear any existing timer

}

//Game over
function call_headshotover(){
    game_over_headshot=1;
    ticker_data_headshot.style.display='block';
    backgroundpauser_headshot.style.display='block';
    ticker_data_headshot.style.fontSize='100px';
    ticker_data_headshot.innerHTML='Game Over';
    ball_headshot.style.display='none';
    headshot_pause_button.style.display='none';
    setTimeout(function(){
        result_screen(score_decider_headshot,accuracy_decider_headshot,headshot_page,'Result <br>Head<span style="color: red;">Shot',clicking_page, 'Head<span style="color: red;">Shot</span>','headshot_page');
        headshot_isrestarted();    
    },3000);
}

var i_headshot=0;
var j_headshot=0;
var score_decider_headshot=0;
var accuracy_decider_headshot = 0;
var headshot_hits=0;
var headshot_miss=0;

ball_headshot.addEventListener('click', function() {
    ball_headshot_mover();
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_headshot = score_decider_headshot+new_value;
    score_headshot.innerHTML = score_decider_headshot+" pts";

    headshot_hits++;
    headshot_accuracy_management();
});

background_headshot2.addEventListener('click',function(){
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_headshot = score_decider_headshot - new_value;

    if(score_decider_headshot <= 0){
        score_decider_headshot=0;
    }
    score_headshot.innerHTML=score_decider_headshot+" pts";
    headshot_miss++;
    headshot_accuracy_management();
});

function headshot_accuracy_management(){
    accuracy_decider_headshot = Math.ceil((headshot_hits / (headshot_hits + headshot_miss)) * 100);
    accuracy_headshot.innerHTML = accuracy_decider_headshot+"%";
}



//ball mover
function ball_headshot_mover(){
    let i_headshot = Math.floor(Math.random() * (window.innerWidth - ball_headshot.offsetWidth));
    ball_headshot.style.left = i_headshot + "px";
}

exit_headshot.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            headshot_isrestarted();
            headshot_page.style.display='none';
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