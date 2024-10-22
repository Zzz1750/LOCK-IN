var background_singletrack = document.getElementById('game_back3_singletrack');
var background_singletrack2 = document.getElementById('game_back2_singletrack');
var backgroundpauser_singletrack = document.getElementById('backgroundpauser_singletrack');

var pause_menu_singletrack = document.getElementById('pause_menu_singletrack');

var singletrack_menu_container = document.getElementById('singletrack_menu_container')

var ball_singletrack = document.getElementById('ball_singletrack')
var ticker_data_singletrack = document.getElementById('ticker_data_singletrack');
var score_singletrack = document.getElementById('score_singletrack');
var accuracy_singletrack = document.getElementById('accuracy_singletrack')
var time_singletrack = document.getElementById('time_singletrack');

var resume_singletrack = document.getElementById('resume_singletrack');
var restart_singletrack = document.getElementById('restart_singletrack');

var singletrack_system_container = document.getElementById('singletrack_system_container');

var game_over_singletrack=0;

var singletrack_pause_button = document.getElementById('singletrack_pause_button');

var singletrack_time = 58;
var timerInterval; // Store the interval ID


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var clicking_page = document.getElementById('clicking_page');
var singletrack_page = document.getElementById('singletrack_page')
var exit_singletrack = document.getElementById('exit_singletrack');

//game starter
background_singletrack.addEventListener('click',function(){
    background_singletrack.style.display = 'none';
    backgroundpauser_singletrack.style.display = 'block';
    ticker_singletrack();
});
function ticker_singletrack() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_singletrack.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_singletrack.style.display = 'none';
        ball_singletrack.style.display = 'block';
        backgroundpauser_singletrack.style.display = 'none';
        singletrack_pause_button.style.display='block';
        time_caller_singletrack();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_singletrack() {
    var escape_singletrack = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_singletrack == 0) {
            time_singletrack.innerHTML = "0:" + (singletrack_time < 10 ? "0" + singletrack_time : singletrack_time);
            
            if (singletrack_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_singletrack.innerHTML = "0:00";
                call_singletrackover();
            } else {
                singletrack_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_singletrack == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_singletrack = (escape_singletrack === 0) ? 1 : 0;
    
                if (escape_singletrack == 1) {
                    singletrack_ispaused();
                } else {
                    singletrack_isresumed();
                }
            }
        }
    });
    

    resume_singletrack.addEventListener('click',function(){
        singletrack_isresumed();
        escape_singletrack=0;
    });

    restart_singletrack.addEventListener('click',function(){
        singletrack_isrestarted();
    })

    singletrack_pause_button.addEventListener('click',function(){
        singletrack_ispaused();
        escape_singletrack=1;
    })
}

//pause
function singletrack_ispaused() {
    singletrack_pause_button.style.display='none';
    ball_singletrack.style.display='none';
    singletrack_menu_container.style.display='block';
    singletrack_system_container.style.display='none';
}

//resume
function singletrack_isresumed(){
    singletrack_pause_button.style.display='block';
    ball_singletrack.style.display='block';
    singletrack_menu_container.style.display='none';
    singletrack_system_container.style.display='block';
}


//restart
function singletrack_isrestarted(){
    ticker_data_singletrack.innerHTML='Click to Start!'
    ticker_data_singletrack.style.display='block'
    background_singletrack.style.display='block';
    singletrack_menu_container.style.display='none';
    singletrack_system_container.style.display='block';

    score_decider_singletrack = 0;
    singletrack_hits = 0;
    singletrack_miss = 0;
    accuracy_decider_singletrack = 0;
    game_over_singletrack = 0;

    score_singletrack.innerHTML = "0 pts";
    accuracy_singletrack.innerHTML = "0%";
    time_singletrack.innerHTML = "0:59";

    singletrack_time=58;

    ball_singletrack.style.top='40%';
    ball_singletrack.style.left= '48%';
    clearInterval(timerInterval); // Clear any existing timer

}


var i_singletrack=0;
var j_singletrack=0;
var score_decider_singletrack=0;
var accuracy_decider_singletrack = 0;
var singletrack_hits=0;
var singletrack_miss=0;

ball_singletrack.addEventListener('click', function() {
    ball_singletrack_mover();
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_singletrack = score_decider_singletrack+new_value;
    score_singletrack.innerHTML = score_decider_singletrack+" pts";

    singletrack_hits++;
    singletrack_accuracy_management();
});

background_singletrack2.addEventListener('click',function(){
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_singletrack = score_decider_singletrack - new_value;

    if(score_decider_singletrack <= 0){
        score_decider_singletrack=0;
    }
    score_singletrack.innerHTML=score_decider_singletrack+" pts";
    singletrack_miss++;
    singletrack_accuracy_management();
});

function singletrack_accuracy_management(){
    accuracy_decider_singletrack = Math.ceil((singletrack_hits / (singletrack_hits + singletrack_miss)) * 100);
    accuracy_singletrack.innerHTML = accuracy_decider_singletrack+"%";
}



//ball mover
function ball_singletrack_mover() {
    const topRestrictedZone_singletrack = 100;

    let targetX = Math.floor(Math.random() * (window.innerWidth - ball_singletrack.offsetWidth));
    let targetY = Math.floor(Math.random() * (window.innerHeight - ball_singletrack.offsetHeight));

    if (targetY < topRestrictedZone_singletrack) {
        ball_singletrack_mover();
        return;
    }

    let currentX = ball_singletrack.offsetLeft;
    let currentY = ball_singletrack.offsetTop;

    let speed = 3;
    let distanceX = targetX - currentX;
    let distanceY = targetY - currentY;
    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    let stepX = (distanceX / distance) * speed;
    let stepY = (distanceY / distance) * speed;

    function moveBall() {
        currentX += stepX;
        currentY += stepY;

        ball_singletrack.style.left = currentX + "px";
        ball_singletrack.style.top = currentY + "px";

        if (Math.abs(targetX - currentX) > Math.abs(stepX) || Math.abs(targetY - currentY) > Math.abs(stepY)) {
            requestAnimationFrame(moveBall);
        } else {
            ball_singletrack.style.left = targetX + "px";
            ball_singletrack.style.top = targetY + "px";
        }
    }
    requestAnimationFrame(moveBall);
}


exit_singletrack.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            singletrack_isrestarted();
            singletrack_page.style.display='none';
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
function call_singletrackover(){
    game_over_singletrack=1;
    ticker_data_singletrack.style.display='block';
    backgroundpauser_singletrack.style.display='block';
    ticker_data_singletrack.style.fontSize='100px';
    ticker_data_singletrack.innerHTML='Game Over';
    ball_singletrack.style.display='none';
    singletrack_pause_button.style.display='none';
    setTimeout(function(){
        result_screen(score_decider_singletrack,accuracy_decider_singletrack,singletrack_page,'Result <br>Single<span style="color: red;">Track',tracking_page, 'Single<span style="color: red;">Track</span>','singletrack');
        singletrack_isrestarted();    
    },3000);

}