    //clicking_box_about
    var clicking_box= document.getElementById('clicking_box');
    var about_category = document.getElementById('about_category');
    


    clicking_box.addEventListener('mouseenter', function(){
        button_category_sound.play();
        clicking_box.style.transform = 'scale(1.05)';
        clicking_box.style.color = 'white';
        about_category.style.width='860px';
        about_category.innerHTML= 'Improving your clicking accuracy is essential for games where quick and precise shots are crucial to outplay your opponents.';    });
    clicking_box.addEventListener('mouseleave', function(){
        clicking_box.style.transform = 'scale(1)';
        clicking_box.style.color = 'rgba(255, 255, 255, 0.7)';
        about_category.style.width='0px';
        about_category.innerHTML= '';
    });

    //switching_box_about
    var switching_box= document.getElementById('switching_box');
    switching_box.addEventListener('mouseenter', function(){
        switching_box.style.transform = 'scale(1.05)';
        switching_box.style.color = 'white';
        about_category.style.width='1000px';
        about_category.innerHTML= 'Mastering switching techniques enables you to rapidly change targets, ensuring that you can efficiently handle multiple threats in quick succession.';    });
    switching_box.addEventListener('mouseleave', function(){
        about_category.style.width='0px';
        about_category.innerHTML= '';
        switching_box.style.transform = 'scale(1)';
        switching_box.style.color = 'rgba(255, 255, 255, 0.7)';
    });

    //tracking_box_about
    var tracking_box= document.getElementById('tracking_box');
    tracking_box.addEventListener('mouseenter', function(){
        tracking_box.style.transform = 'scale(1.05)';
        tracking_box.style.color = 'white';
        about_category.style.width='950px';
        about_category.innerHTML= 'Effective tracking skills allow you to smoothly follow and hit moving targets, maintaining consistent damage output in fast-paced scenarios.';
        });
    tracking_box.addEventListener('mouseleave', function(){
        tracking_box.style.transform = 'scale(1)';
        tracking_box.style.color = 'rgba(255, 255, 255, 0.7)';
        about_category.style.width='0px';
        about_category.innerHTML= '';
    });

    //back_effect
    var back_effect= document.getElementById('go_back');
    back_effect.addEventListener('mouseenter', function(){
        back_effect.style.transform = 'scale(1.008)';
        back_effect.style.color='rgba(255, 255, 255, 0.749)';

    });
    back_effect.addEventListener('mouseleave',function(){
        back_effect.style.transform = 'scale(1)';
        back_effect.style.color='rgba(255, 255, 255, 0.549)';
    });