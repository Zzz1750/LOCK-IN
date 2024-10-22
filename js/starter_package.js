//name_page
var name_page = document.getElementById('name_page');
var name_login_button = document.getElementById('name_login_button');

//sound
var audio = document.getElementById('audioPlayer');
audio.pause();

var button_scroll=document.getElementById('button_scroll');
button_scroll.pause();

var button_category_sound = document.getElementById('button_category_sound');
button_category_sound.pause();


var company_logo=document.getElementById('company_logo');
var creator_logo=document.getElementById('creator_logo');

//settings_page
var settings_page = document.getElementById('settings_page');
var goback_settings = document.getElementById('goback_settings');

//main_page
var home_back = document.getElementById('home_back');
var main_play= document.getElementById('main_play');
var main_head= document.getElementById('main_head');
// var leaderboard=document.getElementById('leaderboard');
var exit= document.getElementById('exit');
var settings= document.getElementById('settings');
var version = document.getElementById('version');
var barcode = document.getElementById('barcode');
var creator = document.getElementById('creator');

//category_page
var category_head = document.getElementById('category_head');
var category_back = document.getElementById('category_back');
var clicking_box = document.getElementById('clicking_box');
var switching_box = document.getElementById('switching_box');
var tracking_box= document.getElementById('tracking_box');
var about_category = document.getElementById('about_category');
var go_back = document.getElementById('go_back');

//leaderboard_page
// var leaderboard_page = document.getElementById('leaderboard_page');
// var go_back_leaderboard = document.getElementById('go_back_leaderboard')

//clicking_page
var clicking_page=document.getElementById("clicking_page")
var go_back_clicking = document.getElementById('go_back_clicking');

//switching_page
var switching_page=document.getElementById("switching_page")
var go_back_switching = document.getElementById('go_back_switching');

//tracking_page
var tracking_page=document.getElementById("tracking_page")
var go_back_tracking = document.getElementById('go_back_tracking');

//common
var transitor = document.getElementById('transitor');


//mainpage_sound
main_play.addEventListener('mouseenter', function(){
    button_scroll.currentTime=0;
    button_scroll.play();
    main_play.style.transform='scale(1.03)';
});
main_play.addEventListener('mouseleave', function(){
    main_play.style.transform='scale(1)';
    button_scroll.pause();
});

settings.addEventListener('mouseenter', function(){
    button_scroll.currentTime=0;
    button_scroll.play();
    settings.style.transform='scale(1.03)';
});
settings.addEventListener('mouseleave', function(){
    settings.style.transform='scale(1)';
    button_scroll.pause();
});

exit.addEventListener('mouseenter', function(){
    button_scroll.currentTime=0;
    button_scroll.play();
    exit.style.transform='scale(1.03)';
});
exit.addEventListener('mouseleave', function(){
    exit.style.transform='scale(1)';
    button_scroll.pause();
});

// leaderboard.addEventListener('mouseenter', function(){
//     button_scroll.currentTime=0;
//     button_scroll.play();
//     leaderboard.style.transform='scale(1.03)';
// });
// leaderboard.addEventListener('mouseleave', function(){
//     leaderboard.style.transform='scale(1)';
//     button_scroll.pause();
// });


//categorypage_sound
clicking_box.addEventListener('mouseenter',function(){
    button_category_sound.currentTime=0;
    button_category_sound.play();
});
clicking_box.addEventListener('mouseleave',function(){
    button_category_sound.pause();
});
switching_box.addEventListener('mouseenter',function(){
    button_category_sound.currentTime=0;
    button_category_sound.play();
});
switching_box.addEventListener('mouseleave',function(){
    button_category_sound.pause();
});
tracking_box.addEventListener('mouseenter',function(){
    button_category_sound.currentTime=0;
    button_category_sound.play();
});
tracking_box.addEventListener('mouseleave',function(){
    button_category_sound.pause();
});

// document.addEventListener('DOMContentLoaded', function() {
//     main_play.addEventListener('click', function(){
//         main_play.style.transform='scale(2)';
//     });
// });


function checkConsent() {
    return localStorage.getItem('audioConsent') === 'true';
}
document.addEventListener('DOMContentLoaded', () => {
    if (checkConsent()) {
        setTimeout(call_name,100);
        console.log('Launched Succesfully');
    } else {
        console.log('No consent found.');
    }
});


function call_name(){
    transitor.style.display='block';
    transitor.style.opacity=1;
    setTimeout(call_name_displayer,500);

    function call_name_displayer(){
        transitor.style.opacity=0;
        name_page.style.display='block';
        setTimeout(call_name_transitor_off,500)
    }
    function call_name_transitor_off(){
        transitor.style.display='none';
        console.log('everythin on')
    }
}
// function checkTextArea() {
    // const textArea = document.getElementById('name_input').value;
    //     if (textArea.trim() !== '') {

    //         setTimeout(requestFullscreen,1000);

    //         setTimeout(intro_launcher,2000);
    //         name_page.style.opacity=0;
    //         name_back.style.opacity=0;
    //     } else {
    //         console.log('The text area is empty.');
    //     }}



function launch_lockin(){
    name_page.style.opacity=0;
    setTimeout(requestFullscreen,1000);
    setTimeout(intro_launcher,2000);    
}
//requestFullscreen
{
function requestFullscreen() {
    let elem = document.documentElement;
    
    if (elem.requestFullscreen) {  
        elem.requestFullscreen().catch((err) => {
            alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen().catch((err) => {
            alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen().catch((err) => {
            alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen().catch((err) => {
            alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else {
        alert('Fullscreen API is not supported on this browser.');
    }
}
}

function intro_launcher(){
    name_page.style.display='none';
    //intro
    setTimeout(intro_parent,100);
    setTimeout(intro1,1000);
    setTimeout(intro2,4000);
    setTimeout(main_music,1780);   

    //main_page
    setTimeout(main_page_displayer,6850);
}


function main_music(){
    audio.play();
}

function play_music(){
    audio.play();
}
function stop_music(){
    audio.pause();
}

//intro_animation
{
    function intro_parent(){
        company_logo.style.display='block';
        creator_logo.style.display='block';
    }
    function intro1()
    {
        company_logo.style.opacity=0.9;
        setTimeout(outro1,2000);
    }
    function outro1(){
        company_logo.style.opacity=0;
    }
    function intro2(){
        creator_logo.style.opacity=0.8;
        setTimeout(outro2,2000); 
    }
    function outro2(){
        creator_logo.style.opacity=0;
        setTimeout(outro_parent,2000);
    }
    function outro_parent(){
        creator_logo.style.display='none';
        company_logo.style.display='none';
    }
}

//main_page
{
    function main_page_displayer(){

        home_back.style.display='block';
        main_play.style.display='block';
        // leaderboard.style.display='block';
        version.style.display='block';
        barcode.style.display='block';
        settings.style.display='block';
        exit.style.display='block';
        main_head.style.display='block';
        creator.style.display='block';

        setTimeout(displayer,1000);

        function displayer(){
            home_back.style.opacity=1;
            main_play.style.opacity=0.9;
            // leaderboard.style.opacity=0.9;
            version.style.opacity=0.9;
            barcode.style.opacity=0.7;
            settings.style.opacity=0.9;
            exit.style.opacity=0.9;
            main_head.style.opacity=1;
            creator.style.opacity=0.5;
        }
    }
}



//category_page
{
        main_play.addEventListener('click', function(){
            category_caller();
        });

        function category_caller(){
            transitor.style.display='block';
            transitor.style.opacity=0;
            setTimeout(category_transitor,300)
        }

        function category_transitor(){
            transitor.style.opacity=1;
            setTimeout(call_category,300);
        }
        function call_category(){
            // leaderboard.style.display='none';
            home_back.style.display='none';
            main_play.style.display='none';
            settings.style.display='none';
            exit.style.display='none';
            main_head.style.display='none';
            
            setTimeout(category_transitor_off,300);
        }
        function category_transitor_off(){
            transitor.style.opacity=0;
            category_head.style.display='block';
            clicking_box.style.display='flex';
            category_back.style.display='block';
            switching_box.style.display='flex';
            tracking_box.style.display='flex';
            about_category.style.display='block';
            go_back.style.display='block';
            setTimeout(category_transitor_off_2,300);
        }
        function category_transitor_off_2(){
            transitor.style.display='none';
        }
}

//setting_page
{
    settings.addEventListener('click', function(){
        settings_caller();
        });
        function settings_caller(){
            transitor.style.display='block';
            transitor.style.opacity=0;
            setTimeout(settings_transitor,300)
        }

        function settings_transitor(){
            transitor.style.opacity=1;
            setTimeout(call_settings,300);
        }
        function call_settings(){
            // leaderboard.style.display='none';
            home_back.style.display='none';
            main_play.style.display='none';
            settings.style.display='none';
            exit.style.display='none';
            main_head.style.display='none';
            
            setTimeout(settings_transitor_off,300);
        }
        function settings_transitor_off(){
            transitor.style.opacity=0;
            settings_page.style.display='block';
            setTimeout(settings_transitor_off_2,300);
        }
        function settings_transitor_off_2(){
            transitor.style.display='none';
        }
}

//settings_mainpage
{
    goback_settings.addEventListener('click', function(){
        settings_to_main();
    });
    function settings_to_main(){
        transitor.style.display='block';
        setTimeout(main_settings_transitor,300)
    }
    function main_settings_transitor(){
        transitor.style.opacity=1;
        setTimeout(call_main_settings,300);
    }
    function call_main_settings(){
        settings_page.style.display='none';
        setTimeout(main_settings_transitor_off,300)
    }
    function main_settings_transitor_off(){
        transitor.style.opacity=0;
        home_back.style.display='block';
        main_play.style.display='block';
        settings.style.display='block';
        // leaderboard.style.display='block';
        exit.style.display='block';
        main_head.style.display='block';
        setTimeout(main_head_settings_transitor_off_2,300);
    }
    function main_head_settings_transitor_off_2(){
        transitor.style.display='none';
    }
}


// category_to_mainpage
{
    go_back.addEventListener('click', function(){
        category_to_main();
    });
    function category_to_main(){
        transitor.style.display='block';
        setTimeout(main_transitor,300)
    }
    function main_transitor(){
        transitor.style.opacity=1;
        setTimeout(call_main,300);
    }
    function call_main(){
        category_head.style.display='none';
        clicking_box.style.display='none';
        category_back.style.display='none';
        switching_box.style.display='none';
        tracking_box.style.display='none';
        about_category.style.display='none';
        go_back.style.display='none';
        setTimeout(main_transitor_off,300)
    }
    function main_transitor_off(){
        transitor.style.opacity=0;
        home_back.style.display='block';
        main_play.style.display='block';
        settings.style.display='block';
        // leaderboard.style.display='block';
        exit.style.display='block';
        main_head.style.display='block';
        setTimeout(main_head_transitor_off_2,300);
    }
    function main_head_transitor_off_2(){
        transitor.style.display='none';
    }
}

        
// main -> leaderboard
// leaderboard.addEventListener('click', function(){
//     leaderboard_caller();
// });

// function leaderboard_caller(){
//     transitor.style.display='block';
//     transitor.style.opacity=0;
//     setTimeout(leaderboard_transitor,300)
// }

// function leaderboard_transitor(){
//     transitor.style.opacity=1;
//     setTimeout(call_leaderboard,300);
// }
// function call_leaderboard(){
//     leaderboard.style.display='none';
//     home_back.style.display='none';
//     main_play.style.display='none';
//     settings.style.display='none';
//     exit.style.display='none';
//     main_head.style.display='none';
    
//     setTimeout(leaderboard_transitor_off,300);
// }
// function leaderboard_transitor_off(){
//     transitor.style.opacity=0;
//     leaderboard_page.style.display='block';
//     setTimeout(leaderboard_transitor_off_2,300);
// }
// function leaderboard_transitor_off_2(){
//     transitor.style.display='none';
// }

// //leaderboard -> main_page
// go_back_leaderboard.addEventListener('click', function(){
//     leaderboard_to_main();
// });
// function leaderboard_to_main(){
//     transitor.style.display='block';
//     setTimeout(leaderboard_to_main_transitor,300)
// }
// function leaderboard_to_main_transitor(){
//     transitor.style.opacity=1;
//     setTimeout(call_main_from_leaderboard,300);
// }
// function call_main_from_leaderboard(){
//     leaderboard_page.style.display='none';
//     setTimeout(call_main_from_leaderboard_transitor_off,300)
// }
// function call_main_from_leaderboard_transitor_off(){
//     transitor.style.opacity=0;
//     home_back.style.display='block';
//     main_play.style.display='block';
//     settings.style.display='block';
//     leaderboard.style.display='block';
//     exit.style.display='block';
//     main_head.style.display='block';
//     setTimeout(call_main_from_leaderboard_transitor_off_2,300);
// }
// function call_main_from_leaderboard_transitor_off_2(){
//     transitor.style.display='none';
// }



// category -> clicking_page
clicking_box.addEventListener('click',function(){
    clicking_caller();
});
function clicking_caller(){
    transitor.style.display='block';
    transitor.style.opacity=0;
    setTimeout(clicking_transitor,300)
}

function clicking_transitor(){
    transitor.style.opacity=1;
    setTimeout(call_clicking,300);
}
function call_clicking(){
    category_head.style.display='none';
    clicking_box.style.display='none';
    category_back.style.display='none';
    switching_box.style.display='none';
    tracking_box.style.display='none';
    about_category.style.display='none';
    go_back.style.display='none';
    
    setTimeout(clicking_transitor_off,300);
}
function clicking_transitor_off(){
    transitor.style.opacity=0;
    clicking_page.style.display='block';
    setTimeout(clicking_transitor_off_2,300);
}
function clicking_transitor_off_2(){
    transitor.style.display='none';
}



// clicking_page -> category_page
go_back_clicking.addEventListener('click', function(){
    clicking_to_category();
});
function clicking_to_category(){
    transitor.style.display='block';
    setTimeout(clicking_to_category_transitor,300)
}
function clicking_to_category_transitor(){
    transitor.style.opacity=1;
    setTimeout(call_category_from_clicking,300);
}
function call_category_from_clicking(){
    clicking_page.style.display='none';
    setTimeout(clicking_to_category_transitor_off,300)
}
function clicking_to_category_transitor_off(){
    transitor.style.opacity=0;
    category_head.style.display='block';
    clicking_box.style.display='flex';
    category_back.style.display='block';
    switching_box.style.display='flex';
    tracking_box.style.display='flex';
    about_category.style.display='block';
    go_back.style.display='block';
    setTimeout(clicking_to_category_transitor_off_2,300);
}
function clicking_to_category_transitor_off_2(){
    transitor.style.display='none';
}



// category -> switching_page
switching_box.addEventListener('click',function(){
    switching_caller();
});
function switching_caller(){
    transitor.style.display='block';
    transitor.style.opacity=0;
    setTimeout(switching_transitor,300)
}

function switching_transitor(){
    transitor.style.opacity=1;
    setTimeout(call_switching,300);
}
function call_switching(){
    category_head.style.display='none';
    clicking_box.style.display='none';
    category_back.style.display='none';
    switching_box.style.display='none';
    tracking_box.style.display='none';
    about_category.style.display='none';
    go_back.style.display='none';
    
    setTimeout(switching_transitor_off,300);
}
function switching_transitor_off(){
    transitor.style.opacity=0;
    switching_page.style.display='block';
    setTimeout(switching_transitor_off_2,300);
}
function switching_transitor_off_2(){
    transitor.style.display='none';
}



// switching_page -> category_page
go_back_switching.addEventListener('click', function(){
    switching_to_category();
});
function switching_to_category(){
    transitor.style.display='block';
    setTimeout(switching_to_category_transitor,300)
}
function switching_to_category_transitor(){
    transitor.style.opacity=1;
    setTimeout(call_category_from_switching,300);
}
function call_category_from_switching(){
    switching_page.style.display='none';
    setTimeout(switching_to_category_transitor_off,300)
}
function switching_to_category_transitor_off(){
    transitor.style.opacity=0;
    category_head.style.display='block';
    clicking_box.style.display='flex';
    category_back.style.display='block';
    switching_box.style.display='flex';
    tracking_box.style.display='flex';
    about_category.style.display='block';
    go_back.style.display='block';
    setTimeout(switching_to_category_transitor_off_2,300);
}
function switching_to_category_transitor_off_2(){
    transitor.style.display='none';
}



// category -> tracking_page
tracking_box.addEventListener('click',function(){
    tracking_caller();
});
function tracking_caller(){
    transitor.style.display='block';
    transitor.style.opacity=0;
    setTimeout(tracking_transitor,300)
}

function tracking_transitor(){
    transitor.style.opacity=1;
    setTimeout(call_tracking,300);
}
function call_tracking(){
    category_head.style.display='none';
    clicking_box.style.display='none';
    category_back.style.display='none';
    switching_box.style.display='none';
    tracking_box.style.display='none';
    about_category.style.display='none';
    go_back.style.display='none';
    
    setTimeout(tracking_transitor_off,300);
}
function tracking_transitor_off(){
    transitor.style.opacity=0;
    tracking_page.style.display='block';
    setTimeout(tracking_transitor_off_2,300);
}
function tracking_transitor_off_2(){
    transitor.style.display='none';
}


// tracking_page -> category_page
go_back_tracking.addEventListener('click', function(){
    tracking_to_category();
});
function tracking_to_category(){
    transitor.style.display='block';
    setTimeout(tracking_to_category_transitor,300)
}
function tracking_to_category_transitor(){
    transitor.style.opacity=1;
    setTimeout(call_category_from_tracking,300);
}
function call_category_from_tracking(){
    tracking_page.style.display='none';
    setTimeout(tracking_to_category_transitor_off,300)
}
function tracking_to_category_transitor_off(){
    transitor.style.opacity=0;
    category_head.style.display='block';
    clicking_box.style.display='flex';
    category_back.style.display='block';
    switching_box.style.display='flex';
    tracking_box.style.display='flex';
    about_category.style.display='block';
    go_back.style.display='block';
    setTimeout(tracking_to_category_transitor_off_2,300);
}
function tracking_to_category_transitor_off_2(){
    transitor.style.display='none';
}