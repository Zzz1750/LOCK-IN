// Common pages
var start_clicking = document.getElementById('start_clicking');
var start_switching = document.getElementById('start_switching')
var black_transistor = document.getElementById('transitor')

var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');

var game_emitter_container = document.getElementById('game_emitter_container');
var game_name_emitter = document.getElementById('game_name_emitter');



// Clicking
var clicking_page = document.getElementById('clicking_page');

var onetap_page = document.getElementById('onetap_page');
var headshot_page = document.getElementById('headshot_page');
var microshot_page = document.getElementById('microshot_page');

var onetap_button = document.getElementById('onetap_button');
var gridshot_button = document.getElementById('gridshot_button');
var microshot_button = document.getElementById('microshot_button');
var headshot_button = document.getElementById('headshot_button');

var switching_page = document.getElementById('switching_page');

var burstshot_page = document.getElementById('burstshot_page');


var burstshot_button=document.getElementById('burst_button');



// Function to remove previous event listener
function clearStartClicking() {
    var new_start_clicking = start_clicking.cloneNode(true);
    start_clicking.parentNode.replaceChild(new_start_clicking, start_clicking);
    start_clicking = new_start_clicking;
}

onetap_button.addEventListener('click', function () {
    clearStartClicking();
    start_clicking.addEventListener('click', function () {
        intiate_games(onetap_page, 'One<span style="color: red;">Tap</span>',clicking_page);
    });
});

gridshot_button.addEventListener('click', function () {
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
    clearStartClicking();
    start_switching.addEventListener('click', function () {
        intiate_games(burstshot_page,'Burst<span style="color: red;">Shot</span>',switching_page)
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
