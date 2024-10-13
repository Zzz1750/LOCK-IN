var tracking_main_container=document.getElementById('tracking_main_container');
var tracking_main_container_head = document.getElementById('tracking_main_container_head');
var tracking_main_container_content = document.getElementById('tracking_main_container_content');
var tracking_main_container_preview = document.getElementById('tracking_main_container_preview');
var tracking_main_container_preview_title = document.getElementById('tracking_main_container_preview_title');

var start_tracking=document.getElementById('start_tracking');

var singletrack_button = document.getElementById('singletrack_button');
var parallel_button= document.getElementById('parallel_button');
var runner_button = document.getElementById('runner_button');
var evadetrack_button= document.getElementById('evadetrack_button');

var singletrack_button_point=0;
var parallel_button_point=0;
var runner_button_point=0;
var evadetrack_button_point=0;


var go_back_tracking = document.getElementById('go_back_tracking');


function singletrack_caller(){
    tracking_main_container.style.opacity=1;
    tracking_main_container_head.innerHTML="Single Track";
    tracking_main_container_content.innerHTML=' A single object moves randomly across the screen, challenging the player to continuously track it. This exercise improves hand-eye coordination and focus, essential for accuracy in fast-paced games. By concentrating on a single moving target, players can refine their tracking skills and enhance their reaction times.';
    changeVideo_tracking("../assets/video/cyborg-moewalls-com.mp4");
}

function parallel_caller(){
    tracking_main_container.style.opacity=1;
    tracking_main_container_head.innerHTML="Parallel";
    tracking_main_container_content.innerHTML='Multiple targets move parallel to each other across the screen, challenging the player to track them simultaneously. This exercise enhances multitasking abilities and peripheral vision, which are crucial for managing multiple threats in competitive games. By tracking parallel targets, players can improve their spatial awareness and reaction times.';
    changeVideo_tracking("../assets/video/cyborg-moewalls-com.mp4");
}

function runner_caller(){
    tracking_main_container.style.opacity=1;
    tracking_main_container_head.innerHTML="Runner";
    tracking_main_container_content.innerHTML='The game involves hitting a target in the middle, after which new targets appear randomly and begin moving, repeating this sequence continuously. This exercise enhances quick decision-making and adaptability, as players must swiftly switch focus between static and moving targets. It aids in improving reaction times and accuracy under dynamic conditions, which are essential for competitive gaming scenarios.';
    changeVideo_tracking("../assets/video/cyborg-moewalls-com.mp4");
}

function evadetrack_caller(){
    tracking_main_container.style.opacity=1;
    tracking_main_container_head.innerHTML="Evade Track";
    tracking_main_container_content.innerHTML='Multiple bots engage in dynamic strafing movements while players are tasked with tracking and accurately hitting them. This exercise is designed to enhance tracking precision, reaction time, and focus under dynamic conditions. It serves to improve hand-eye coordination and spatial awareness, essential skills for achieving proficiency in competitive gaming.';
    changeVideo_tracking("../assets/video/cyborg-moewalls-com.mp4");
}


singletrack_button.addEventListener('click',function(){
    singletrack_button_point=1;
    parallel_button_point=runner_button_point=evadetrack_button_point=0;
    tracking_check_status(); 
});

parallel_button.addEventListener('click',function(){
    parallel_button_point=1;
    singletrack_button_point=runner_button_point=evadetrack_button_point=0;
    tracking_check_status();
});

runner_button.addEventListener('click',function(){
    runner_button_point=1;
    singletrack_button_point=parallel_button_point=evadetrack_button_point=0;
    tracking_check_status();
});

evadetrack_button.addEventListener('click',function(){
    evadetrack_button_point=1;
    singletrack_button_point=parallel_button_point=runner_button_point=0;
    tracking_check_status();
});


function over_singletrack(){
    singletrack_button.style.color='rgba(255, 255, 255, 0.9)';
    singletrack_caller();
}

function over_parallel(){
    parallel_button.style.color='rgba(255, 255, 255, 0.9)';
    parallel_caller();
}

function over_runner(){
    runner_button.style.color='rgba(255, 255, 255, 0.9)';
    runner_caller();
}

function over_evadetrack(){
    evadetrack_button.style.color='rgba(255, 255, 255,0.9)';
    evadetrack_caller();
}

function singletrack_selector(){
    singletrack_button.style.border='1px solid rgba(255, 255, 255, 0.9)';
    parallel_button.style.border='none';
    runner_button.style.border='none';
    evadetrack_button.style.border='none';

    singletrack_button.style.color='rgba(255, 255, 255, 0.9)';
    parallel_button.style.color='rgba(255, 255, 255, 0.6)';
    runner_button.style.color='rgba(255, 255, 255, 0.6)';
    evadetrack_button.style.color='rgba(255, 255, 255, 0.6)';
}

function parallel_selector(){
    singletrack_button.style.border='none';
    parallel_button.style.border='1px solid rgba(255, 255, 255,0.9)';
    runner_button.style.border='none';
    evadetrack_button.style.border='none';

    singletrack_button.style.color='rgba(255, 255, 255, 0.6)';
    parallel_button.style.color='rgba(255, 255, 255, 0.9)';
    runner_button.style.color='rgba(255, 255, 255, 0.6)';
    evadetrack_button.style.color='rgba(255, 255, 255, 0.6)';
}

function runner_selector(){
    singletrack_button.style.border='none';
    parallel_button.style.border='none';
    runner_button.style.border='1px solid rgba(255, 255, 255,0.9)';
    evadetrack_button.style.border='none';

    singletrack_button.style.color='rgba(255, 255, 255, 0.6)';
    parallel_button.style.color='rgba(255, 255, 255, 0.6)';
    runner_button.style.color='rgba(255, 255, 255, 0.9)';
    evadetrack_button.style.color='rgba(255, 255, 255, 0.6)';
}

function evadetrack_selector(){
    singletrack_button.style.border='none';
    parallel_button.style.border='none';
    runner_button.style.border='none';
    evadetrack_button.style.border='1px solid rgba(255, 255, 255,0.9)';

    singletrack_button.style.color='rgba(255, 255, 255, 0.6)';
    parallel_button.style.color='rgba(255, 255, 255, 0.6)';
    runner_button.style.color='rgba(255, 255, 255, 0.6)';
    evadetrack_button.style.color='rgba(255, 255, 255, 0.9)';
}

function tracking_check_status(){
    if(singletrack_button_point==1){
        tracking_main_container.style.opacity=1;
        singletrack_caller();
        singletrack_selector();
    }
    else if(parallel_button_point==1){
        tracking_main_container.style.opacity=1;
        parallel_caller();
        parallel_selector();
    }
    else if(runner_button_point==1){
        tracking_main_container.style.opacity=1;
        runner_caller();
        runner_selector();
    }
    else if(evadetrack_button_point==1){
        tracking_main_container.style.opacity=1;
        evadetrack_caller();
        evadetrack_selector();
    }
    else
        tracking_main_container.style.opacity=0;

}

function leave_tracking_button(){
    singletrack_button.style.color='rgba(255, 255, 255, 0.6)';
    parallel_button.style.color='rgba(255, 255, 255, 0.6)';
    runner_button.style.color='rgba(255, 255, 255, 0.6)';
    evadetrack_button.style.color='rgba(255, 255, 255,0.6)';
    tracking_check_status();
}


function changeVideo_tracking(newSource) {
    var demo_video_tracking = document.getElementById('tracking_main_container_preview');
    demo_video_tracking.src = newSource;
    demo_video_tracking.load();
    //demo_video.play();
}

start_tracking.addEventListener('click',function(){
    if(singletrack_button_point==1){
        console.log("singletrack_launched");
    }
    else if(parallel_button_point==1){
        console.log("parallel_launched");
    }
    else if(runner_button_point==1){
        console.log("runner_launched");
    }
    else if(evadetrack_button_point==1){
        console.log("evadetrack_launched");
    }
});


go_back_tracking.addEventListener('click',function(){
    singletrack_button.style.border='none';
    parallel_button.style.border='none';
    runner_button.style.border='none';
    evadetrack_button.style.border='none';

    singletrack_button.style.color='rgba(255, 255, 255, 0.6)';
    parallel_button.style.color='rgba(255, 255, 255, 0.6)';
    runner_button.style.color='rgba(255, 255, 255, 0.6)';
    evadetrack_button.style.color='rgba(255, 255, 255, 0.6)';

    tracking_main_container.style.opacity=0;

    singletrack_button_point=0;
    parallel_button_point=0;
    runner_button_point=0;
    evadetrack_button_point=0;

    tracking_check_status();
})
