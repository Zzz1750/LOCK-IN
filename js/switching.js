var switching_main_container=document.getElementById('switching_main_container');
var switching_main_container_head = document.getElementById('switching_main_container_head');
var switching_main_container_content = document.getElementById('switching_main_container_content');
var switching_main_container_preview = document.getElementById('switching_main_container_preview');
var switching_main_container_preview_title = document.getElementById('switching_main_container_preview_title');

var start_switching=document.getElementById('start_switching');

var multitap_button = document.getElementById('multitap_button');
var burst_button= document.getElementById('burst_button');
var maptap_button = document.getElementById('maptap_button');
var deathtap_button= document.getElementById('deathtap_button');

var multitap_button_point=0;
var burst_button_point=0;
var maptap_button_point=0;
var deathtap_button_point=0;


function multitap_caller(){
    switching_main_container.style.opacity=1;
    switching_main_container_head.innerHTML="Multi Tap";
    switching_main_container_content.innerHTML='In Multi Shots, two balls appear on the screen at the same time. Players must quickly and accurately click on both balls to improve their switching skills. This exercise challenges players to rapidly switch between targets, enhancing their reflexes, precision, and overall performance in fast-paced scenarios.';
    changeVideo_switching("../assets/video/cyborg-moewalls-com.mp4");
}

function burst_caller(){
    switching_main_container.style.opacity=1;
    switching_main_container_head.innerHTML="Burst Shot";
    switching_main_container_content.innerHTML='In Burst Shot, players start by shooting a ball in the center of the screen. Once the center ball is hit, another ball appears randomly on the screen. Players must quickly react and flick to the new target, improving their reaction time and flick accuracy. This exercise enhances speed, precision, and the ability to quickly adapt to new targets.';
    changeVideo_switching("../assets/video/cyborg-moewalls-com.mp4");
}

function maptap_caller(){
    switching_main_container.style.opacity=1;
    switching_main_container_head.innerHTML="Map Switch";
    switching_main_container_content.innerHTML='In Map Switch, a random colored ball appears on the screen, and a map-like element is displayed on the left side. Players must quickly look at the map to determine which colored ball to hit. This exercise improves reaction time and reflexes by requiring players to analyze the map swiftly and respond accordingly.';
    changeVideo_switching("../assets/video/cyborg-moewalls-com.mp4");
}

function deathtap_caller(){
    switching_main_container.style.opacity=1;
    switching_main_container_head.innerHTML="Death Shot";
    switching_main_container_content.innerHTML='In Death Shot, balls appear and slowly fade away on the screen. Players must quickly hit the balls before they disappear. The game continues as long as the player doesnt miss a shot. This exercise improves accuracy, speed, and reaction time under pressure.';
    changeVideo_switching("../assets/video/cyborg-moewalls-com.mp4");
}


multitap_button.addEventListener('click',function(){
    multitap_button_point=1;
    burst_button_point=maptap_button_point=deathtap_button_point=0;
    switching_check_status(); 
});

burst_button.addEventListener('click',function(){
    burst_button_point=1;
    multitap_button_point=maptap_button_point=deathtap_button_point=0;
    switching_check_status();
});

maptap_button.addEventListener('click',function(){
    maptap_button_point=1;
    multitap_button_point=burst_button_point=deathtap_button_point=0;
    switching_check_status();
});

deathtap_button.addEventListener('click',function(){
    deathtap_button_point=1;
    multitap_button_point=burst_button_point=maptap_button_point=0;
    switching_check_status();
});


function over_multitap(){
    multitap_button.style.color='rgba(255, 255, 255, 0.9)';
    multitap_caller();
}

function over_burst(){
    burst_button.style.color='rgba(255, 255, 255, 0.9)';
    burst_caller();
}

function over_maptap(){
    maptap_button.style.color='rgba(255, 255, 255, 0.9)';
    maptap_caller();
}

function over_deathtap(){
    deathtap_button.style.color='rgba(255, 255, 255,0.9)';
    deathtap_caller();
}

function multitap_selector(){
    multitap_button.style.border='1px solid rgba(255, 255, 255, 0.9)';
    burst_button.style.border='none';
    maptap_button.style.border='none';
    deathtap_button.style.border='none';

    multitap_button.style.color='rgba(255, 255, 255, 0.9)';
    burst_button.style.color='rgba(255, 255, 255, 0.6)';
    maptap_button.style.color='rgba(255, 255, 255, 0.6)';
    deathtap_button.style.color='rgba(255, 255, 255, 0.6)';
}

function burst_selector(){
    multitap_button.style.border='none';
    burst_button.style.border='1px solid rgba(255, 255, 255,0.9)';
    maptap_button.style.border='none';
    deathtap_button.style.border='none';

    multitap_button.style.color='rgba(255, 255, 255, 0.6)';
    burst_button.style.color='rgba(255, 255, 255, 0.9)';
    maptap_button.style.color='rgba(255, 255, 255, 0.6)';
    deathtap_button.style.color='rgba(255, 255, 255, 0.6)';
}

function maptap_selector(){
    multitap_button.style.border='none';
    burst_button.style.border='none';
    maptap_button.style.border='1px solid rgba(255, 255, 255,0.9)';
    deathtap_button.style.border='none';

    multitap_button.style.color='rgba(255, 255, 255, 0.6)';
    burst_button.style.color='rgba(255, 255, 255, 0.6)';
    maptap_button.style.color='rgba(255, 255, 255, 0.9)';
    deathtap_button.style.color='rgba(255, 255, 255, 0.6)';
}

function deathtap_selector(){
    multitap_button.style.border='none';
    burst_button.style.border='none';
    maptap_button.style.border='none';
    deathtap_button.style.border='1px solid rgba(255, 255, 255,0.9)';

    multitap_button.style.color='rgba(255, 255, 255, 0.6)';
    burst_button.style.color='rgba(255, 255, 255, 0.6)';
    maptap_button.style.color='rgba(255, 255, 255, 0.6)';
    deathtap_button.style.color='rgba(255, 255, 255, 0.9)';
}

function switching_check_status(){
    if(multitap_button_point==1){
        switching_main_container.style.opacity=1;
        multitap_caller();
        multitap_selector();
    }
    else if(burst_button_point==1){
        switching_main_container.style.opacity=1;
        burst_caller();
        burst_selector();
    }
    else if(maptap_button_point==1){
        switching_main_container.style.opacity=1;
        maptap_caller();
        maptap_selector();
    }
    else if(deathtap_button_point==1){
        switching_main_container.style.opacity=1;
        deathtap_caller();
        deathtap_selector();
    }
    else
        switching_main_container.style.opacity=0;

}

function leave_switching_button(){
    multitap_button.style.color='rgba(255, 255, 255, 0.6)';
    burst_button.style.color='rgba(255, 255, 255, 0.6)';
    maptap_button.style.color='rgba(255, 255, 255, 0.6)';
    deathtap_button.style.color='rgba(255, 255, 255,0.6)';
    switching_check_status();
}


function changeVideo_switching(newSource) {
    var demo_video_switching = document.getElementById('switching_main_container_preview');
    demo_video_switching.src = newSource;
    demo_video_switching.load();
    //demo_video.play();
}

start_switching.addEventListener('click',function(){
    if(multitap_button_point==1){
        console.log("multitap_launched");
    }
    else if(burst_button_point==1){
        console.log("burst_launched");
    }
    else if(maptap_button_point==1){
        console.log("maptap_launched");
    }
    else if(deathtap_button_point==1){
        console.log("deathtap_launched");
    }
});

go_back_switching.addEventListener('click',function(){
    multitap_button.style.border='none';
    burst_button.style.border='none';
    maptap_button.style.border='none';
    deathtap_button.style.border='none';

    multitap_button.style.color='rgba(255, 255, 255, 0.6)';
    burst_button.style.color='rgba(255, 255, 255, 0.6)';
    maptap_button.style.color='rgba(255, 255, 255, 0.6)';
    deathtap_button.style.color='rgba(255, 255, 255, 0.6)';

    switching_main_container.style.opacity=0;

    
    multitap_button_point=0;
    burst_button_point=0;
    maptap_button_point=0;
    deathtap_button_point=0;


    switching_check_status();
});
        