var background_mapswitch = document.getElementById('game_back3_mapswitch');
var background_mapswitch2 = document.getElementById('game_back2_mapswitch');
var backgroundpauser_mapswitch = document.getElementById('backgroundpauser_mapswitch');

var pause_menu_mapswitch = document.getElementById('pause_menu_mapswitch');

var mapswitch_menu_container = document.getElementById('mapswitch_menu_container')

var ball_mapswitch = document.getElementById('ball_mapswitch')
var ball_mapswitch2 = document.getElementById('ball_mapswitch2');
var ball_mapswitch3 = document.getElementById('ball_mapswitch3');


var ticker_data_mapswitch = document.getElementById('ticker_data_mapswitch');
var score_mapswitch = document.getElementById('score_mapswitch');
var accuracy_mapswitch = document.getElementById('accuracy_mapswitch')
var time_mapswitch = document.getElementById('time_mapswitch');

var resume_mapswitch = document.getElementById('resume_mapswitch');
var restart_mapswitch = document.getElementById('restart_mapswitch');

var mapswitch_system_container = document.getElementById('mapswitch_system_container');

var game_over_mapswitch=0;

var mapswitch_pause_button = document.getElementById('mapswitch_pause_button');

var mapswitch_time = 58;
var timerInterval; //  the interval ID

var mapswitch_ground = document.getElementById('mapswitch_ground');

var map_layout = document.getElementById('map_layout');
var color_ball = document.getElementById('color_ball');

//new var
var black_transistor = document.getElementById('transitor')
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');
var clicking_page = document.getElementById('clicking_page');
var mapswitch_page = document.getElementById('mapswitch_page')
var exit_mapswitch = document.getElementById('exit_mapswitch');

//game starter
background_mapswitch.addEventListener('click',function(){
    background_mapswitch.style.display = 'none';
    backgroundpauser_mapswitch.style.display = 'block';
    ticker_mapswitch();
});
function ticker_mapswitch() {
    const tickerMessages = ["3", "2", "1", "Go!"];
    let delay = 1000;

    tickerMessages.forEach((message, index) => {
        setTimeout(() => {
            ticker_data_mapswitch.innerHTML = message;
        }, delay * (index + 1));
    });

    setTimeout(() => {
        ticker_data_mapswitch.style.display = 'none';
        map_layout.style.display='block';
        ball_mapswitch.style.display = 'block';
        ball_mapswitch2.style.display = 'block';
        ball_mapswitch3.style.display = 'block';
        backgroundpauser_mapswitch.style.display = 'none';
        mapswitch_pause_button.style.display='block';
        mapswitch_ground.style.display='block'
        time_caller_mapswitch();
    }, delay * (tickerMessages.length + 1));
}


//time system
function time_caller_mapswitch() {
    var escape_mapswitch = 0;
    
    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (escape_mapswitch == 0) {
            time_mapswitch.innerHTML = "0:" + (mapswitch_time < 10 ? "0" + mapswitch_time : mapswitch_time);
            
            if (mapswitch_time == 0) {
                clearInterval(timerInterval); // Clear the interval when time is up
                time_mapswitch.innerHTML = "0:00";
                call_mapswitchover();
            } else {
                mapswitch_time--;
            }
        }
    }, 1000);
    
    document.addEventListener('keydown', function(event) {
        if (game_over_mapswitch == 0) { // if game is not over then...
            if (event.key === 'p' || event.key === 'P') {
                escape_mapswitch = (escape_mapswitch === 0) ? 1 : 0;
    
                if (escape_mapswitch == 1) {
                    mapswitch_ispaused();
                } else {
                    mapswitch_isresumed();
                }
            }
        }
    });
    

    resume_mapswitch.addEventListener('click',function(){
        mapswitch_isresumed();
        escape_mapswitch=0;
    });

    restart_mapswitch.addEventListener('click',function(){
        mapswitch_isrestarted();
    })

    mapswitch_pause_button.addEventListener('click',function(){
        mapswitch_ispaused();
        escape_mapswitch=1;
    })
}

//pause
function mapswitch_ispaused() {
    mapswitch_pause_button.style.display='none';
    map_layout.style.display='none';
    ball_mapswitch.style.display='none';
    ball_mapswitch2.style.display='none';
    ball_mapswitch3.style.display='none';
    mapswitch_menu_container.style.display='block';
    mapswitch_system_container.style.display='none';
    mapswitch_ground.style.display='none'
}

//resume
function mapswitch_isresumed(){
    mapswitch_pause_button.style.display='block';
    map_layout.style.display='block';
    ball_mapswitch.style.display='block';
    ball_mapswitch2.style.display='block';
    ball_mapswitch3.style.display='block';
    mapswitch_menu_container.style.display='none';
    mapswitch_system_container.style.display='block';
    mapswitch_ground.style.display='block';
}


//restart
function mapswitch_isrestarted(){
    ticker_data_mapswitch.innerHTML='Click to Start!'
    ticker_data_mapswitch.style.display='block'
    background_mapswitch.style.display='block';
    mapswitch_menu_container.style.display='none';
    mapswitch_system_container.style.display='block';

    score_decider_mapswitch = 0;
    mapswitch_hits = 0;
    mapswitch_miss = 0;
    accuracy_decider_mapswitch = 0;
    game_over_mapswitch = 0;

    score_mapswitch.innerHTML = "0 pts";
    accuracy_mapswitch.innerHTML = "0%";
    time_mapswitch.innerHTML = "0:59";

    mapswitch_time=58;
    clearInterval(timerInterval); // Clear any existing timer

}

//Game over
function call_mapswitchover(){
    game_over_mapswitch=1;
    ticker_data_mapswitch.style.display='block';
    backgroundpauser_mapswitch.style.display='block';
    ticker_data_mapswitch.style.fontSize='100px';
    ticker_data_mapswitch.innerHTML='Game Over';
    map_layout.style.display='none';
    ball_mapswitch.style.display='none';
    ball_mapswitch2.style.display='none';
    ball_mapswitch3.style.display='none';
    mapswitch_pause_button.style.display='none';
    mapswitch_ground.style.display='none'
    setTimeout(function(){
        result_screen(score_decider_mapswitch,accuracy_decider_mapswitch,mapswitch_page,'Result <br>Map<span style="color: red;">Switch',switching_page, 'Map<span style="color: red;">Switch</span>','mapswitch_page');
        mapswitch_isrestarted();    
    },3000); 
}

var i_mapswitch=0;
var j_mapswitch=0;
var score_decider_mapswitch=0;
var accuracy_decider_mapswitch = 0;
var mapswitch_hits=0;
var mapswitch_miss=0;

function deduction_mapswitch(){
    var new_value = Math.floor(Math.random() * (86 - 65) + 65);
    score_decider_mapswitch = score_decider_mapswitch - new_value;

    if (score_decider_mapswitch <= 0) {
        score_decider_mapswitch = 0;
    }
    score_mapswitch.innerHTML = score_decider_mapswitch + " pts";
    mapswitch_miss++;
    mapswitch_accuracy_management();
}

mapswitch_ground.addEventListener('click', function() {
    deduction_mapswitch();
});


function mapswitch_accuracy_management(){
    accuracy_decider_mapswitch = Math.ceil((mapswitch_hits / (mapswitch_hits + mapswitch_miss)) * 100);
    accuracy_mapswitch.innerHTML = accuracy_decider_mapswitch+"%";
}

ball_mapswitch.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up to the ground

    ball_mapswitch_mover(ball_mapswitch,'green');
});

ball_mapswitch2.addEventListener('click',function(){
    event.stopPropagation();

    ball_mapswitch_mover(ball_mapswitch2,'red');
});


ball_mapswitch3.addEventListener('click',function(){
    event.stopPropagation(); // Prevents the event from bubbling up to the ground

    ball_mapswitch_mover(ball_mapswitch3,'blue');
});

function mapswitch_score_decider(){
    var new_value = Math.floor(Math.random() * (131 - 100) + 100);

    score_decider_mapswitch = score_decider_mapswitch + new_value;
    score_mapswitch.innerHTML = score_decider_mapswitch + " pts";

    mapswitch_hits++;
    mapswitch_accuracy_management();
}

var random_color ='red';
function ball_color_changer(){
    var colors = ["red", "green", "blue"];
    random_color = colors[Math.floor(Math.random() * colors.length)];
    color_ball.style.backgroundColor=random_color;
}
//ball mover
function ball_mapswitch_mover(ball,ball_color) {

    if(ball_color == random_color){
        mapswitch_score_decider();
        ball_color_changer();
        const groundWidth = mapswitch_ground.offsetWidth;
        const groundHeight = mapswitch_ground.offsetHeight;
        const ballWidth = ball.offsetWidth;
        const ballHeight = ball.offsetHeight;

        let i_mapswitch, j_mapswitch;
        let overlap = true;

        const balls = [ball_mapswitch, ball_mapswitch2, ball_mapswitch3];
        const otherBalls = balls.filter(b => b !== ball);

        let maxAttempts = 100;
        let attempt = 0;

        while (overlap && attempt < maxAttempts) {
            overlap = false;

            i_mapswitch = Math.floor(Math.random() * (groundWidth - ballWidth));
            j_mapswitch = Math.floor(Math.random() * (groundHeight - ballHeight));

            const newBallRect = {
                left: i_mapswitch,
                right: i_mapswitch + ballWidth,
                top: j_mapswitch,
                bottom: j_mapswitch + ballHeight
            };

            for (let otherBall of otherBalls) {
                const otherBallRect = otherBall.getBoundingClientRect();
                const groundRect = mapswitch_ground.getBoundingClientRect();

                const adjustedOtherBallRect = {
                    left: otherBallRect.left - groundRect.left,
                    right: otherBallRect.right - groundRect.left,
                    top: otherBallRect.top - groundRect.top,
                    bottom: otherBallRect.bottom - groundRect.top
                };

                if (!(newBallRect.right < adjustedOtherBallRect.left ||
                    newBallRect.left > adjustedOtherBallRect.right ||
                    newBallRect.bottom < adjustedOtherBallRect.top ||
                    newBallRect.top > adjustedOtherBallRect.bottom)) {
                    overlap = true;
                    break;
                }
            }

            attempt++;
        }

        if (!overlap) {
            ball.style.left = i_mapswitch + "px";
            ball.style.top = j_mapswitch + "px";
        } else {
            console.error('Could not find a non-overlapping position after ' + maxAttempts + ' attempts.');
        }
    }
    else{
        deduction_mapswitch();
    }
}




exit_mapswitch.addEventListener('click',function(){
    black_transistor.style.opacity='0';
    black_transistor.style.display='block';
    setTimeout(function(){
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        
        setTimeout(function(){
            mapswitch_isrestarted();
            mapswitch_page.style.display='none';
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