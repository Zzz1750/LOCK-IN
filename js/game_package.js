// Common pages
var start_clicking = document.getElementById('start_clicking');
var start_switching = document.getElementById('start_switching');
var start_tracking = document.getElementById('start_tracking')
var black_transistor = document.getElementById('transitor')

var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');

var game_emitter_container = document.getElementById('game_emitter_container');
var game_name_emitter = document.getElementById('game_name_emitter');

var result_page = document.getElementById('result_page');
var result_head = document.getElementById('result_head');
var result_score = document.getElementById('result_score');
var result_accuracy = document.getElementById('result_accuracy');



var exit_result = document.getElementById('exit_result');
var replay_result = document.getElementById('replay_result')


var clicking_page = document.getElementById('clicking_page');

var onetap_page = document.getElementById('onetap_page');
var headshot_page = document.getElementById('headshot_page');
var microshot_page = document.getElementById('microshot_page');
var gridshot_page = document.getElementById('gridshot_page');

var onetap_button = document.getElementById('onetap_button');
var gridshot_button = document.getElementById('gridshot_button');
var microshot_button = document.getElementById('microshot_button');
var headshot_button = document.getElementById('headshot_button');

var switching_page = document.getElementById('switching_page');

var burstshot_page = document.getElementById('burstshot_page');
var multishot_page = document.getElementById('multishot_page');
var mapswitch_page = document.getElementById('mapswitch_page');
var deathshot_page = document.getElementById('deathshot_page');

var burstshot_button=document.getElementById('burst_button');
var multishot_button=document.getElementById('multitap_button')
var mapswitch_button=document.getElementById('maptap_button')
var deathshot_button=document.getElementById('deathtap_button')


var tracking_page = document.getElementById('tracking_page');

var singletrack_page = document.getElementById('singletrack_page');
var runner_page = document.getElementById('runner_page');
var parallel_page = document.getElementById('parallel_page');
var evadetrack_page = document.getElementById('evadetrack_page')

var singletrack_button = document.getElementById('singletrack_button');
var runner_button = document.getElementById('runner_button');
var parallel_button = document.getElementById('parallel_button')
var evadetrack_button = document.getElementById('evadetrack_button')


// Function to remove previous event listener
function clearStartClicking() {
    var new_start_clicking = start_clicking.cloneNode(true);
    start_clicking.parentNode.replaceChild(new_start_clicking, start_clicking);
    start_clicking = new_start_clicking;
}

function clearStartSwitching() {
    var new_start_switching = start_switching.cloneNode(true);
    start_switching.parentNode.replaceChild(new_start_switching, start_switching);
    start_switching = new_start_switching;
}

function clearStartTracking(){
    var new_start_tracking = start_tracking.cloneNode(true);
    start_tracking.parentNode.replaceChild(new_start_tracking, start_tracking);
    start_tracking = new_start_tracking;
}

gridshot_button.addEventListener('click', function () {
    clearStartClicking();
    start_clicking.addEventListener('click', function () {
        intiate_games(gridshot_page, 'Grid<span style="color: red;">Shot</span>',clicking_page);
    });
});

onetap_button.addEventListener('click', function () {
    clearStartClicking();
    start_clicking.addEventListener('click', function () {
        intiate_games(onetap_page, 'One<span style="color: red;">Tap</span>',clicking_page);
    });
}); 

microshot_button.addEventListener('click', function () {
    clearStartClicking();
    start_clicking.addEventListener('click', function () {
        intiate_games(microshot_page, 'Micro<span style="color: red;">Shot</span>',clicking_page);
    });
});

headshot_button.addEventListener('click', function () {
    clearStartClicking();
    start_clicking.addEventListener('click', function () {
        intiate_games(headshot_page, 'Head<span style="color: red;">Shot</span>',clicking_page);
    });
});

burstshot_button.addEventListener('click', function () {
    clearStartSwitching();
    start_switching.addEventListener('click', function () {
        console.log('burst')
        intiate_games(burstshot_page,'Burst<span style="color: red;">Shot</span>',switching_page)
    });
});

multishot_button.addEventListener('click', function () {
    clearStartSwitching();
    start_switching.addEventListener('click', function () {
        console.log('multshot')
        intiate_games(multishot_page,'Multi<span style="color: red;">Tap</span>',switching_page)
    });
});

mapswitch_button.addEventListener('click', function () {
    clearStartSwitching();
    start_switching.addEventListener('click', function () {
        console.log('mapswitch')
        intiate_games(mapswitch_page,'Map<span style="color: red;">Switch</span>',switching_page)
    });
});
deathshot_button.addEventListener('click', function () {
    clearStartSwitching();
    start_switching.addEventListener('click', function () {
        console.log('deathshot')
        intiate_games(deathshot_page,'Death<span style="color: red;">Shot</span>',switching_page)
    });
});

singletrack_button.addEventListener('click', function () {
    clearStartTracking();
    start_tracking.addEventListener('click', function () {
        console.log('singletrack')
        intiate_games(singletrack_page,'Single<span style="color: red;">Track</span>',tracking_page)
    });
});

runner_button.addEventListener('click', function () {
    clearStartTracking();
    start_tracking.addEventListener('click', function () {
        console.log('runner')
        intiate_games(runner_page,'Runner<span style="color: red;">Shot</span>',tracking_page)
    });
});

parallel_button.addEventListener('click', function () {
    clearStartTracking();
    start_tracking.addEventListener('click', function () {
        console.log('parallel')
        intiate_games(parallel_page,'Parallel<span style="color: red;">Shot</span>',tracking_page)
    });
});

evadetrack_button.addEventListener('click', function () {
    clearStartTracking();
    start_tracking.addEventListener('click', function () {
        console.log('evadetrack')
        intiate_games(evadetrack_page,'Evade<span style="color: red;">Track</span>',tracking_page)
    });
});

// intiate
function intiate_games(page , text , parent_page){
    game_name_emitter.innerHTML = text;
    black_transistor.style.opacity = '0';
    black_transistor.style.display = 'block';
    setTimeout(function() {
        black_transistor.style.transition = 'opacity 0.5s ease';
        black_transistor.style.opacity = '1';
        setTimeout(function() {
            game_emitter_container.style.opacity = '0';
            game_emitter_container.style.display = 'block';
            game_emitter_container.style.transition = 'opacity 1s ease';            
            setTimeout(function() {
                game_emitter_container.style.opacity = '1'; 
                setTimeout(function() {
                    game_emitter_container.style.opacity = '0';
                    parent_page.style.display='none';
                    barcode.style.display='none';
                    creator.style.display='none';
                    page.style.display = 'block'; 
                    setTimeout(function() {
                        black_transistor.style.opacity = '0';
                        setTimeout(function() {
                            black_transistor.style.display = 'none';
                            game_emitter_container.style.display = 'none';
                        }, 1000);
                    },500);
                }, 3000);
            }, 300);
        }, 300);
    }, 100);
}

function result_screen(score , accuracy, page, result_h, parent_pager, replay_emitter,page_name){
    page.style.display='none';
    result_page.style.display='block';
    result_head.innerHTML= result_h;
    result_score.innerHTML="SCORE: "+score+" pts";
    result_accuracy.innerHTML="ACCURACY: "+accuracy+" %";


    saveHighScores(page_name, score, accuracy);
    

    exit_result.addEventListener('click',function(){
        result_page.style.display='none'
        parent_pager.style.display='block'
    });

    replay_result.addEventListener('click',function(){
        result_page.style.display='none';
        intiate_games(page,replay_emitter,parent_pager)

    })
}