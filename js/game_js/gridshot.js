var background_gridshot = document.getElementById('game_back3_gridshot');
var background_gridshot2 = document.getElementById('game_back2_gridshot');
var backgroundpauser_gridshot = document.getElementById('backgroundpauser_gridshot');

var pause_menu_gridshot = document.getElementById('pause_menu_gridshot');

var gridshot_menu_container = document.getElementById('gridshot_menu_container')

var ball_gridshot = document.getElementById('ball_gridshot')
var ball_gridshot2 = document.getElementById('ball_gridshot2');
var ball_gridshot3 = document.getElementById('ball_gridshot3');


var ticker_data_gridshot = document.getElementById('ticker_data_gridshot');
var score_gridshot = document.getElementById('score_gridshot');
var accuracy_gridshot = document.getElementById('accuracy_gridshot')
var time_gridshot = document.getElementById('time_gridshot');

var resume_gridshot = document.getElementById('resume_gridshot');
var restart_gridshot = document.getElementById('restart_gridshot');

var gridshot_system_container = document.getElementById('gridshot_system_container');

var game_over_gridshot=0;

var gridshot_pause_button = document.getElementById('gridshot_pause_button');

var gridshot_time = 58;
var timerInterval; //  the interval ID

var gridshot_ground = document.getElementById('gridshot_ground');


//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var clicking_page = document.getElementById('clicking_page');
var gridshot_page = document.getElementById('gridshot_page')
var exit_gridshot = document.getElementById('exit_gridshot');

//game starter
background_gridshot.addEventListener('click',function(){
    background_gridshot.style.display = 'none';
    backgroundpauser_gridshot.style.display = 'block';
    ticker_gridshot();
});
function ticker_gridshot() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_gridshot.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_gridshot.style.display = 'none';
        ball_gridshot.style.display = 'block';
        ball_gridshot2.style.display = 'block';
        ball_gridshot3.style.display = 'block';
        backgroundpauser_gridshot.style.display = 'none';
        gridshot_pause_button.style.display='block';
        gridshot_ground.style.display='block'
        time_caller_gridshot();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_gridshot() {
    var escape_gridshot = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_gridshot == 0) {
            time_gridshot.innerHTML = "0:" + (gridshot_time < 10 ? "0" + gridshot_time : gridshot_time);
            
            if (gridshot_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_gridshot.innerHTML = "0:00";
                call_gridshotover();
            } else {
                gridshot_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_gridshot == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_gridshot = (escape_gridshot === 0) ? 1 : 0;
    
                if (escape_gridshot == 1) {
                    gridshot_ispaused();
                } else {
                    gridshot_isresumed();
                }
            }
        }
    });
    

    resume_gridshot.addEventListener('click',function(){
        gridshot_isresumed();
        escape_gridshot=0;
    });

    restart_gridshot.addEventListener('click',function(){
        gridshot_isrestarted();
    })

    gridshot_pause_button.addEventListener('click',function(){
        gridshot_ispaused();
        escape_gridshot=1;
    })
}

//pause
function gridshot_ispaused() {
    gridshot_pause_button.style.display='none';
    ball_gridshot.style.display='none';
    ball_gridshot2.style.display='none';
    ball_gridshot3.style.display='none';
    gridshot_menu_container.style.display='block';
    gridshot_system_container.style.display='none';
    gridshot_ground.style.display='none'
}

//resume
function gridshot_isresumed(){
    gridshot_pause_button.style.display='block';
    ball_gridshot.style.display='block';
    ball_gridshot2.style.display='block';
    ball_gridshot3.style.display='block';
    gridshot_menu_container.style.display='none';
    gridshot_system_container.style.display='block';
}


//restart
function gridshot_isrestarted(){
    ticker_data_gridshot.innerHTML='Click to Start!'
    ticker_data_gridshot.style.display='block'
    background_gridshot.style.display='block';
    gridshot_menu_container.style.display='none';
    gridshot_system_container.style.display='block';

    score_decider_gridshot = 0;
    gridshot_hits = 0;
    gridshot_miss = 0;
    accuracy_decider_gridshot = 0;
    game_over_gridshot = 0;

    score_gridshot.innerHTML = "0 pts";
    accuracy_gridshot.innerHTML = "0%";
    time_gridshot.innerHTML = "0:59";

    gridshot_time=58;

    ball_gridshot.style.top='40%';
    ball_gridshot.style.left= '48%';

    ball_gridshot2.style.top='40%';
    ball_gridshot2.style.left= '40%';

    ball_gridshot2.style.top='40%';
    ball_gridshot2.style.left= '54%';
    clearInterval(timerInterval); // Clear any existing timer

}

//Game over
function call_gridshotover(){
    game_over_gridshot=1;
    ticker_data_gridshot.style.display='block';
    backgroundpauser_gridshot.style.display='block';
    ticker_data_gridshot.style.fontSize='100px';
    ticker_data_gridshot.innerHTML='Game Over';
    ball_gridshot.style.display='none';
    ball_gridshot2.style.display='none';
    ball_gridshot3.style.display='none';
    gridshot_pause_button.style.display='none';
    gridshot_ground.style.display='none'
    console.log("Score: "+score_decider_gridshot+"\nAccuracy:"+accuracy_decider_gridshot);
}

var i_gridshot=0;
var j_gridshot=0;
var score_decider_gridshot=0;
var accuracy_decider_gridshot = 0;
var gridshot_hits=0;
var gridshot_miss=0;

gridshot_ground.addEventListener('click', function() {
    console.log('onground');
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_gridshot = score_decider_gridshot - new_value;

    if (score_decider_gridshot <= 0) {
        score_decider_gridshot = 0;
    }
    score_gridshot.innerHTML = score_decider_gridshot + " pts";
    gridshot_miss++;
    gridshot_accuracy_management();
});


function gridshot_accuracy_management(){
    accuracy_decider_gridshot = Math.ceil((gridshot_hits / (gridshot_hits + gridshot_miss)) * 100);
    accuracy_gridshot.innerHTML = accuracy_decider_gridshot+"%";
}

ball_gridshot.addEventListener('click', function(event) {
    console.log('one ball1')
    event.stopPropagation(); // Prevents the event from bubbling up to the ground

    ball_gridshot_mover(ball_gridshot);
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_gridshot = score_decider_gridshot + new_value;
    score_gridshot.innerHTML = score_decider_gridshot + " pts";

    gridshot_hits++;
    gridshot_accuracy_management();
});

ball_gridshot2.addEventListener('click',function(){
    console.log('one ball2')
    event.stopPropagation(); // Prevents the event from bubbling up to the ground

    ball_gridshot_mover(ball_gridshot2);
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_gridshot = score_decider_gridshot + new_value;
    score_gridshot.innerHTML = score_decider_gridshot + " pts";

    gridshot_hits++;
    gridshot_accuracy_management();
});


ball_gridshot3.addEventListener('click',function(){
    console.log('one ball3')
    event.stopPropagation(); // Prevents the event from bubbling up to the ground

    ball_gridshot_mover(ball_gridshot3);
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_gridshot = score_decider_gridshot + new_value;
    score_gridshot.innerHTML = score_decider_gridshot + " pts";

    gridshot_hits++;
    gridshot_accuracy_management();
});



//ball mover
function ball_gridshot_mover(ball){
    const groundWidth = gridshot_ground.offsetWidth;
    const groundHeight = gridshot_ground.offsetHeight;
    const ballWidth = ball.offsetWidth;
    const ballHeight = ball.offsetHeight;

    let i_gridshot = Math.floor(Math.random() * (groundWidth - ballWidth));
    let j_gridshot = Math.floor(Math.random() * (groundHeight - ballHeight));




    ball.style.left = i_gridshot + "px";
    ball.style.top = j_gridshot + "px";
}

exit_gridshot.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            gridshot_isrestarted();
            gridshot_page.style.display='none';
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