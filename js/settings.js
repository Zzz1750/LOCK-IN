var audio_settings = document.getElementById('audio_settings');

var audio_settings_flag = 0;
audio_settings.addEventListener('click',function(){
    if(audio_settings_flag == 0){
        audio_settings_flag = 1;
        audio_settings.innerHTML='<s>Audio</s>';
        stop_music();
    }
    else{
        audio_settings_flag = 0;
        audio_settings.innerHTML='Audio';
        play_music();
    }
})