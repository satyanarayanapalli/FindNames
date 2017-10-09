$(function()
	{
		var div1=$("#div_1");
		var div2=$("#div_2");
		var div3=$("#div_3");
		var div4=$("#div_4");
		var div5=$("#div_5");
		var div6=$("#div_6");
		var div7=$("#div_7");
		var div8=$("#div_8");
		var div9=$("#div_9");
		var text=$("#text_div");
		var new_btn=$("#new_btn");
    var show_btn=$("#show_btn");
		var time_tag=$("#times_tag");
    var restart_div=$('.restart_div');
  var restart_btn=$('.restart_btn');
  var retry_from_finalscreen=$('.retry');



  var country=new Array(20);
      country[0] = "AUSTRALIA";
        country[1] = "GREENLAND";
        country[2] = "VALENTINE";
        country[3] = "INDONESIA";
        country[4] = "CANDIDATE";
        country[5] = "VENEZUELA";
        country[6] = "SECONDARY";
        country[7] = "FURNITURE";
        country[8] = "ARGENTINA";
        country[9] = "COOPERATE";
        country[10] = "SINGAPORE";
        country[11] = "SIGNATURE";
        country[12] = "STATEMENT";
        country[13] = "RECOGNIZE";
        country[14] = "ADVERTISE";
        country[15] = "CHOCOLATE";
        country[16] = "WEDNESDAY";
        country[17] = "CHALLENGE";
        country[18] = "ADVENTURE";
        country[19] = "IMPORTANT";


  var remain_time=0;
  var next_level=false;

		var count=0;
    var index=0;
    var interval=0;
    var wrong_flag=false;
    var word_count=0;
		
       
    var myArray = [0,1,2,3,4,5,6,7,8];
    shuffle(myArray);

    function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}



  $('#btnPlayCircle').click(function() {
    x = 3
    interval=setInterval(timestart,1000);
 
   /* $('#btnPlayCircle').hide();
    $('#btnPlayShadow').hide();*/
    $(".first_screen").hide();
     $(".game_screen").show();
       $(".final_container").hide();
    
  });

  retry_from_finalscreen.click(function()
  {
      
              clearInterval(interval);  
              sr = Math.floor(Math.random() * 20);
              shuffle(myArray);
              name=country[sr];
              total_name="";
              text.val("");
              times=21;
              interval=setInterval(timestart,1000);
              count=0;
              update();
               $(".first_screen").hide();
                $(".game_screen").show();
              $(".final_container").hide();
  });


          var characters="";
   				var times=20;
          var divboolean1=true,divboolean2=true,divboolean3=true,divboolean4=true,
          divboolean9=true,divboolean8=true,divboolean7=true,divboolean6=true,divboolean5=true;

   				var sr = Math.floor(Math.random() * 20);
   			  var name=country[sr];
   			  var total_name="";
          update();

   			new_btn.click(function()
   			{
   			
          clearInterval(interval);	
          sr = Math.floor(Math.random() * 20);
          name=country[sr];
          total_name="";
          text.val("");
          shuffle(myArray);
          times=21;
          interval=setInterval(timestart,1000);
          count=0;
          update();

   			});

        show_btn.click(function()
          {

            text.val(name);

          });
   			
        

  $(".divs").click(function()
  {
    var ids=this.id;
    show(ids);
  });

function show(id)
{
  var ch=$("#"+id).text();
  total_name+=ch;
  text.val(total_name);
  var check="";
  if(check!=ch)
  {
    complete();
  }
 
  $('#'+id).text("");
 
}


          function update()
          {

            $('.divs').each(function() {
              characters = name[myArray[index]];
              index++;
              if(index==9)
              {
                index=0;
              }
              var ids=this.id;
              $("#"+ids).text(characters);
              
            });

          }

          restart_btn.click(function()
            {
              restart_div.slideUp();
              clearInterval(interval);  
              if(!wrong_flag)
              {
                sr = Math.floor(Math.random() * 20);
                shuffle(myArray);
              }
              
              
              name=country[sr];
              total_name="";
              text.val("");
              
              times=21+remain_time;
              interval=setInterval(timestart,1000);
              count=0;
              update();

            });

			function complete()
			{
				count++;
				if(count==9)
				{
          clearInterval(interval);
          restart_div.slideDown();
            restart_btn.focus();
           
                
					if(total_name==country[sr])
					{
            
            wrong_flag=false;
            word_count++;
						restart_div.slideDown();
            restart_btn.focus();
             restart_btn.html("Click for next level");
               // $(".small_text").text("Click for next level ");
             
             time_tag.text(times);
             remain_time=times;
              next_level=true;

					}
					else
					{
            wrong_flag=true;
             restart_div.slideDown();
             remain_time=0;
             restart_btn.html("Try Again");
              restart_btn.focus();
              next_level=false;
             
					}
					count=0;
				}
				else
				{
					//alert("Sorry your loss the game");
				}
			}

			function timestart()
			{
				times--;
        time_tag.text(times);
				
				if(times<=0)
				{
					//complete();
          times=0;
        time_tag.text(times);
          clearInterval(interval);
           $(".first_screen").hide();
          $(".game_screen").hide();
          $(".final_container").show();
          $("#go_score").text(word_count);
              next_level=false;
				}
				

			}

	});