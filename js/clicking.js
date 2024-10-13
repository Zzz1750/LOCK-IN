var clicking_main_container=document.getElementById('clicking_main_container');
var clicking_main_container_head = document.getElementById('clicking_main_container_head');
var clicking_main_container_content = document.getElementById('clicking_main_container_content');
var clicking_main_container_preview = document.getElementById('clicking_main_container_preview');
var clicking_main_container_preview_title = document.getElementById('clicking_main_container_preview_title');

var start_clicking=document.getElementById('start_clicking');

var gridshot_button = document.getElementById('gridshot_button');
var microshot_button= document.getElementById('microshot_button');
var onetap_button = document.getElementById('onetap_button');
var headshot_button= document.getElementById('headshot_button');

var gridshot_button_point=0;
var microshot_button_point=0;
var onetap_button_point=0;
var headshot_button_point=0;


var go_back_clicking = document.getElementById('go_back_clicking');


function gridshot_caller(){
    clicking_main_container.style.opacity=1;
    clicking_main_container_head.innerHTML="Grid Shot";
    clicking_main_container_content.innerHTML='Improve your flicking speed and accuracy by hitting as many targets as possible in a grid pattern within the time limit. Precision and quick reflexes are key to achieving high scores. Focus on minimizing unnecessary cursor travel and predicting target positions to enhance your performance.';
    changeVideo_clicking("../assets/video/cyborg-moewalls-com.mp4");
}

function microshot_caller(){
    clicking_main_container.style.opacity=1;
    clicking_main_container_head.innerHTML="Micro Shot";
    clicking_main_container_content.innerHTML='Refine your micro-adjustments by targeting small, closely placed objects. This exercise emphasizes minimal cursor movement for precision and control. It is ideal for improving fine motor skills, helping you make small, accurate adjustments to ensure each shot lands exactly where you intend, essential for hitting small targets quickly in fast-paced games.';
    changeVideo_clicking("../assets/video/cyborg-moewalls-com.mp4");
}

function onetap_caller(){
    clicking_main_container.style.opacity=1;
    clicking_main_container_head.innerHTML="One Tap";
    clicking_main_container_content.innerHTML='Enhance your precision and single-shot accuracy by hitting each target with a single click. Take your time to ensure each shot is perfect, aiming for accuracy over speed. This exercise helps develop the rhythm and control needed for consistent single-shot kills.';
    changeVideo_clicking("../assets/video/cyborg-moewalls-com.mp4");
}

function headshot_caller(){
    clicking_main_container.style.opacity=1;
    clicking_main_container_head.innerHTML="Head Shot";
    clicking_main_container_content.innerHTML='Sharpen your aim for headshots by targeting the head area only. Precision and consistency are essential for mastering this skill, as headshots often lead to instant eliminations in many games. Practice makes perfect, so focus on landing each shot accurately on the targets head.';
    changeVideo_clicking("../assets/video/cyborg-moewalls-com.mp4");
}


gridshot_button.addEventListener('click',function(){
    gridshot_button_point=1;
    microshot_button_point=onetap_button_point=headshot_button_point=0;
    clicking_check_status(); 
});

microshot_button.addEventListener('click',function(){
    microshot_button_point=1;
    gridshot_button_point=onetap_button_point=headshot_button_point=0;
    clicking_check_status();
});

onetap_button.addEventListener('click',function(){
    onetap_button_point=1;
    gridshot_button_point=microshot_button_point=headshot_button_point=0;
    clicking_check_status();
});

headshot_button.addEventListener('click',function(){
    headshot_button_point=1;
    gridshot_button_point=microshot_button_point=onetap_button_point=0;
    clicking_check_status();
});


function over_gridshot(){
    gridshot_button.style.color = 'rgba(255, 255, 255, 0.9)';
    gridshot_caller();
}

function over_microshot(){
    microshot_button.style.color = 'rgba(255, 255, 255, 0.9)';
    microshot_caller();
}

function over_onetap(){
    onetap_button.style.color = 'rgba(255, 255, 255,.9)';
    onetap_caller();
}

function over_headshot(){
    headshot_button.style.color = 'rgba(255, 255, 255, 0.9)';
    headshot_caller();
}

function gridshot_selector(){
    gridshot_button.style.border='1px solid rgba(255, 255, 255, 0.9)';
    microshot_button.style.border='none';
    onetap_button.style.border='none';
    headshot_button.style.border='none';

    gridshot_button.style.color='rgba(255, 255, 255, 0.9)';
    microshot_button.style.color='rgba(255, 255, 255, 0.6)';
    onetap_button.style.color='rgba(255, 255, 255, 0.6)';
    headshot_button.style.color='rgba(255, 255, 255, 0.6)';
}

function microshot_selector(){
    gridshot_button.style.border='none';
    microshot_button.style.border='1px solid rgba(255, 255, 255,0.9)';
    onetap_button.style.border='none';
    headshot_button.style.border='none';

    gridshot_button.style.color='rgba(255, 255, 255, 0.6)';
    microshot_button.style.color='rgba(255, 255, 255, 0.9)';
    onetap_button.style.color='rgba(255, 255, 255, 0.6)';
    headshot_button.style.color='rgba(255, 255, 255, 0.6)';
}

function onetap_selector(){
    gridshot_button.style.border='none';
    microshot_button.style.border='none';
    onetap_button.style.border='1px solid rgba(255, 255, 255,0.9)';
    headshot_button.style.border='none';

    gridshot_button.style.color='rgba(255, 255, 255, 0.6)';
    microshot_button.style.color='rgba(255, 255, 255, 0.6)';
    onetap_button.style.color='rgba(255, 255, 255, 0.9)';
    headshot_button.style.color='rgba(255, 255, 255, 0.6)';
}

function headshot_selector(){
    gridshot_button.style.border='none';
    microshot_button.style.border='none';
    onetap_button.style.border='none';
    headshot_button.style.border='1px solid rgba(255, 255, 255,0.9)';

    gridshot_button.style.color='rgba(255, 255, 255, 0.6)';
    microshot_button.style.color='rgba(255, 255, 255, 0.6)';
    onetap_button.style.color='rgba(255, 255, 255, 0.6)';
    headshot_button.style.color='rgba(255, 255, 255, 0.9)';
}

function clicking_check_status(){
    if(gridshot_button_point==1){
        clicking_main_container.style.opacity=1;
        gridshot_caller();
        gridshot_selector();
    }
    else if(microshot_button_point==1){
        clicking_main_container.style.opacity=1;
        microshot_caller();
        microshot_selector();
    }
    else if(onetap_button_point==1){
        clicking_main_container.style.opacity=1;
        onetap_caller();
        onetap_selector();
    }
    else if(headshot_button_point==1){
        clicking_main_container.style.opacity=1;
        headshot_caller();
        headshot_selector();
    }
    else
        clicking_main_container.style.opacity=0;

}

function leave_clicking_button(){
    gridshot_button.style.color = 'rgba(255, 255, 255, 0.6)';
    microshot_button.style.color = 'rgba(255, 255, 255, 0.6)';
    onetap_button.style.color = 'rgba(255, 255, 255,0.6)';
    headshot_button.style.color = 'rgba(255, 255, 255, 0.6)';

    clicking_check_status();
}


function changeVideo_clicking(newSource) {
    var demo_video_clicking = document.getElementById('clicking_main_container_preview');
    demo_video_clicking.src = newSource;
    demo_video_clicking.load();
    //demo_video.play();
}

start_clicking.addEventListener('click',function(){
    if(gridshot_button_point==1){
        console.log("gridshot_launched");
    }
    else if(microshot_button_point==1){
        console.log("microshot_launched");
    }
    else if(onetap_button_point==1){
        console.log("onetap_launched");
    }
    else if(headshot_button_point==1){
        console.log("headshot_launched");
    }
});


go_back_clicking.addEventListener('click',function(){
    gridshot_button.style.border='none';
    microshot_button.style.border='none';
    onetap_button.style.border='none';
    headshot_button.style.border='none';

    gridshot_button.style.color='rgba(255, 255, 255, 0.6)';
    microshot_button.style.color='rgba(255, 255, 255, 0.6)';
    onetap_button.style.color='rgba(255, 255, 255, 0.6)';
    headshot_button.style.color='rgba(255, 255, 255, 0.6)';

    clicking_main_container.style.opacity=0;

    gridshot_button_point=0;
    microshot_button_point=0;
    onetap_button_point=0;
    headshot_button_point=0;

    clicking_check_status();
});
