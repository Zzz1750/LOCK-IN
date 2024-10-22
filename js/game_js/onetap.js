var background_onetap = document.getElementById('game_back3_onetap');
var background_onetap2 = document.getElementById('game_back2_onetap');
var backgroundpauser_onetap = document.getElementById('backgroundpauser_onetap');

var pause_menu_onetap = document.getElementById('pause_menu_onetap');

var onetap_menu_container = document.getElementById('onetap_menu_container')

var ball_onetap = document.getElementById('ball_onetap')
var ticker_data_onetap = document.getElementById('ticker_data_onetap');
var score_onetap = document.getElementById('score_onetap');
var accuracy_onetap = document.getElementById('accuracy_onetap')
var time_onetap = document.getElementById('time_onetap');

var resume_onetap = document.getElementById('resume_onetap');
var restart_onetap = document.getElementById('restart_onetap');

var onetap_system_container = document.getElementById('onetap_system_container');

var game_over_onetap=0;

var onetap_pause_button = document.getElementById('onetap_pause_button');

var onetap_time = 58;
var timerInterval; // Store the interval ID


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var clicking_page = document.getElementById('clicking_page');
var onetap_page = document.getElementById('onetap_page')
var exit_onetap = document.getElementById('exit_onetap');

//game starter
background_onetap.addEventListener('click',function(){
    background_onetap.style.display = 'none';
    backgroundpauser_onetap.style.display = 'block';
    ticker_onetap();
});
function ticker_onetap() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_onetap.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_onetap.style.display = 'none';
        ball_onetap.style.display = 'block';
        backgroundpauser_onetap.style.display = 'none';
        onetap_pause_button.style.display='block';
        time_caller_onetap();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_onetap() {
    var escape_onetap = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_onetap == 0) {
            time_onetap.innerHTML = "0:" + (onetap_time < 10 ? "0" + onetap_time : onetap_time);
            
            if (onetap_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_onetap.innerHTML = "0:00";
                call_onetapover();
            } else {
                onetap_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_onetap == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_onetap = (escape_onetap === 0) ? 1 : 0;
    
                if (escape_onetap == 1) {
                    onetap_ispaused();
                } else {
                    onetap_isresumed();
                }
            }
        }
    });
    

    resume_onetap.addEventListener('click',function(){
        onetap_isresumed();
        escape_onetap=0;
    });

    restart_onetap.addEventListener('click',function(){
        onetap_isrestarted();
    })

    onetap_pause_button.addEventListener('click',function(){
        onetap_ispaused();
        escape_onetap=1;
    })
}

//pause
function onetap_ispaused() {
    onetap_pause_button.style.display='none';
    ball_onetap.style.display='none';
    onetap_menu_container.style.display='block';
    onetap_system_container.style.display='none';
}

//resume
function onetap_isresumed(){
    onetap_pause_button.style.display='block';
    ball_onetap.style.display='block';
    onetap_menu_container.style.display='none';
    onetap_system_container.style.display='block';
}


//restart
function onetap_isrestarted(){
    ticker_data_onetap.innerHTML='Click to Start!'
    ticker_data_onetap.style.display='block'
    background_onetap.style.display='block';
    onetap_menu_container.style.display='none';
    onetap_system_container.style.display='block';

    score_decider_onetap = 0;
    onetap_hits = 0;
    onetap_miss = 0;
    accuracy_decider_onetap = 0;
    game_over_onetap = 0;

    score_onetap.innerHTML = "0 pts";
    accuracy_onetap.innerHTML = "0%";
    time_onetap.innerHTML = "0:59";

    onetap_time=58;

    ball_onetap.style.top='40%';
    ball_onetap.style.left= '48%';
    clearInterval(timerInterval); // Clear any existing timer

}


var i_onetap=0;
var j_onetap=0;
var score_decider_onetap=0;
var accuracy_decider_onetap = 0;
var onetap_hits=0;
var onetap_miss=0;

ball_onetap.addEventListener('click', function() {
    ball_onetap_mover();
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_onetap = score_decider_onetap+new_value;
    score_onetap.innerHTML = score_decider_onetap+" pts";

    onetap_hits++;
    onetap_accuracy_management();
});

background_onetap2.addEventListener('click',function(){
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_onetap = score_decider_onetap - new_value;

    if(score_decider_onetap <= 0){
        score_decider_onetap=0;
    }
    score_onetap.innerHTML=score_decider_onetap+" pts";
    onetap_miss++;
    onetap_accuracy_management();
});

function onetap_accuracy_management(){
    accuracy_decider_onetap = Math.ceil((onetap_hits / (onetap_hits + onetap_miss)) * 100);
    accuracy_onetap.innerHTML = accuracy_decider_onetap+"%";
}



//ball mover
function ball_onetap_mover(){
    const topRestrictedZone_onetap= 100;

    let i_onetap = Math.floor(Math.random() * (window.innerWidth - ball_onetap.offsetWidth));
    let j_onetap = Math.floor(Math.random() * (window.innerHeight - ball_onetap.offsetHeight));

    if (j_onetap < topRestrictedZone_onetap) {
        ball_onetap_mover();
    } 
    else {
        ball_onetap.style.left = i_onetap + "px";
        ball_onetap.style.top = j_onetap + "px";  
    }
}

exit_onetap.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            onetap_isrestarted();
            onetap_page.style.display='none';
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
function call_onetapover(){
    game_over_onetap=1;
    ticker_data_onetap.style.display='block';
    backgroundpauser_onetap.style.display='block';
    ticker_data_onetap.style.fontSize='100px';
    ticker_data_onetap.innerHTML='Game Over';
    ball_onetap.style.display='none';
    onetap_pause_button.style.display='none';
    setTimeout(function(){
        result_screen(score_decider_onetap,accuracy_decider_onetap,onetap_page,'Result <br>One<span style="color: red;">Tap',clicking_page, 'One<span style="color: red;">Tap</span>','onetap_page');
        onetap_isrestarted();    
    },3000);

}