var  overall_rank_button = document.getElementById('overall_rank_button');
            var  clicking_rank_button = document.getElementById('clicking_rank_button');
            var  switching_rank_button = document.getElementById('switching_rank_button');
            var  tracking_rank_button = document.getElementById('tracking_rank_button');

            var leaderboard_table_head = document.getElementById('leaderboard_table_head');

            var first_player_name = document.getElementById('first_player_name');
            var second_player_name=document.getElementById('second_player_name');
            var third_player_name=document.getElementById('third_player_name');
            var fourth_player_name=document.getElementById('fourth_player_name');
            var fifth_player_name=document.getElementById('fifth_player_name');

            var first_player_score=document.getElementById('first_player_score');
            var second_player_score=document.getElementById('second_player_score');
            var third_player_score=document.getElementById('third_player_score');
            var fourth_player_score=document.getElementById('fourth_player_score');
            var fifth_player_score=document.getElementById('fifth_player_score');

            var overall_point=1;
            var clicking_point=0;
            var switching_point=0;
            var tracking_point=0;
            
            overall_rank_button.style.border='1px solid white';

            function overall_active(){
                overall_point=1;
                clicking_point=switching_point=tracking_point=0;

                leaderboard_button_checker();
            }
            
            function clicking_active(){
                clicking_point=1;
                overall_point=switching_point=tracking_point=0;

                leaderboard_button_checker();
            }

            function switching_active(){
                switching_point=1;
                overall_point=clicking_point=tracking_point=0;

                leaderboard_button_checker();
            }

            function tracking_active(){
                tracking_point=1;
                overall_point=clicking_point=switching_point=0;

                leaderboard_button_checker();
            }
            function leaderboard_button_checker(){
                if(overall_point==1)
                {
                    leaderboard_table_head.innerHTML='Masters of <u>LOCK IN</u>';

                    overall_rank_button.style.border='1px solid white';
                    clicking_rank_button.style.border='none';
                    switching_rank_button.style.border='none';
                    tracking_rank_button.style.border='none';

                    overall_rank_data();

                }
                else if(clicking_point==1)
                {
                    leaderboard_table_head.innerHTML='Masters of <u>Clicking</u>';

                    overall_rank_button.style.border='none';
                    clicking_rank_button.style.border='1px solid white';
                    switching_rank_button.style.border='none';
                    tracking_rank_button.style.border='none';

                    clicking_rank_data();
                }
                else if(switching_point==1)
                {
                    leaderboard_table_head.innerHTML='Masters of <u>Switching</u>';
                    
                    overall_rank_button.style.border='none';
                    clicking_rank_button.style.border='none';
                    switching_rank_button.style.border='1px solid white';
                    tracking_rank_button.style.border='none';

                    switching_rank_data();
                }
                else if(tracking_point==1)
                {
                    leaderboard_table_head.innerHTML='Masters of <u>Tracking</u>';

                    overall_rank_button.style.border='none';
                    clicking_rank_button.style.border='none';
                    switching_rank_button.style.border='none';
                    tracking_rank_button.style.border='1px solid white';

                    tracking_rank_data();
                }
            }

            function overall_rank_data(){
                first_player_name.innerHTML='oi_player1';
                second_player_name.innerHTML='oi_player2';
                third_player_name.innerHTML='oi_player3';
                fourth_player_name.innerHTML='oi_player4';
                fifth_player_name.innerHTML='oi_player5';

                first_player_score.innerHTML='oi_9879';
                second_player_score.innerHTML='oi_8457';
                third_player_score.innerHTML='oi_7456';
                fourth_player_score.innerHTML='oi_5856';
                fifth_player_score.innerHTML='oi_3456';
                
            }

            function clicking_rank_data(){
                first_player_name.innerHTML='c_player1';
                second_player_name.innerHTML='c_player2';
                third_player_name.innerHTML='c_player3';
                fourth_player_name.innerHTML='c_player4';
                fifth_player_name.innerHTML='c_player5';

                first_player_score.innerHTML='c_9879';
                second_player_score.innerHTML='c_8457';
                third_player_score.innerHTML='c_7456';
                fourth_player_score.innerHTML='c_5856';
                fifth_player_score.innerHTML='c_3456';
            }

            function switching_rank_data(){
                first_player_name.innerHTML='s_player1';
                second_player_name.innerHTML='s_player2';
                third_player_name.innerHTML='s_player3';
                fourth_player_name.innerHTML='s_player4';
                fifth_player_name.innerHTML='s_player5';

                first_player_score.innerHTML='s_9879';
                second_player_score.innerHTML='s_8457';
                third_player_score.innerHTML='s_7456';
                fourth_player_score.innerHTML='s_5856';
                fifth_player_score.innerHTML='s_3456';
            }
            function tracking_rank_data(){
                first_player_name.innerHTML='t_player1';
                second_player_name.innerHTML='t_player2';
                third_player_name.innerHTML='t_player3';
                fourth_player_name.innerHTML='t_player4';
                fifth_player_name.innerHTML='t_player5';

                first_player_score.innerHTML='t_9879';
                second_player_score.innerHTML='t_8457';
                third_player_score.innerHTML='t_7456';
                fourth_player_score.innerHTML='t_5856';
                fifth_player_score.innerHTML='t_3456';
                
            }