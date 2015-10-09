//javascript document
$(window).load(function () {
	$('body').removeClass('.preload');
});


$('document').ready(function () {
	var t = (($(window).height()-$('.content').height())/2);
    var l = (($(window).width()-$('.content').width())/2);
	$('.content').css('top',t).css('left',l);
	var h = $(window).height();
	$('.html1,.html2,.html3,.html4,.html5,.text').css('height',h);
    
});

$(window).resize(function (){
	var t = (($(window).height()-$('.content').height())/2);
    var l = (($(window).width()-$('.content').width())/2);
    $('.content').css('top',t).css('left',l);
    var h = $(window).height();
    $('.html1,.html2,.html3,.html4,.html5,.text').css('height',h);
});
$('document').ready(function(){
	var n=1;
    if(n==1){
        $('.back_button').css('display','none');
    }

   $('.htmlInfo,.cssInfo,.jsInfo,.designInfo,.appInfo').addClass('flip-page-child');
    $('.html').click(function(){		
		$('.htmlInfo').fadeIn(800);
		$('.back').css('display','block')
        $('.content').removeClass('flip-back').addClass('flip-page'); 
        $('.htmlInfo').removeClass('flip-page-child').addClass('flip-back-child');      
	});

	
    $('.css').click(function(){
	    $('.cssInfo').fadeIn(800);
        $('.back').css('display','block')
        $('.content').removeClass('flip-back').addClass('flip-page'); 
        $('.cssInfo').removeClass('flip-page-child').addClass('flip-back-child'); 
       
	});

    $('.js').click(function(){
        $('.jsInfo').fadeIn(800);
        $('.back').css('display','block')
        $('.content').removeClass('flip-back').addClass('flip-page'); 
        $('.jsInfo').removeClass('flip-page-child').addClass('flip-back-child'); 
       
    });
	
	$('.design').click(function(){
        $('.designInfo').fadeIn(800);
        $('.back').css('display','block')
        $('.content').removeClass('flip-back').addClass('flip-page'); 
        $('.designInfo').removeClass('flip-page-child').addClass('flip-back-child'); 
       
    });

    $('.app').click(function(){
        $('.appInfo').fadeIn(800);
        $('.back').css('display','block')
        $('.content').removeClass('flip-back').addClass('flip-page'); 
        $('.appInfo').removeClass('flip-page-child').addClass('flip-back-child'); 
       
    });
	
	$('.main_button').click(function(){		
        $('.back').css('display','none');
        $('.content').removeClass('flip-page').addClass('flip-back');
        $('.htmlInfo,.cssInfo,.jsInfo,.designInfo,.appInfo').removeClass('flip-back-child').addClass('flip-page-child');   
	});
});
 
//car events
$('document').ready(function(){
    var z = $(window).height();
    $('.tap').click(function(){
        $('.roll,.tap').css('display','none');
        var audio = $('.carsound')[0];
        audio.play();
        $('#car').animate({top:z},2500).promise().done(function(){
            $('#htmltapin').fadeIn(2000);
            $('#htmltapin').css('display','table-cell');
        }); 
    });
});
$(window).resize(function(){
    var m = $(window).height();
    $('#car').css('top',-300);
    $('.tap').click(function(){
        $('.roll,.tap').css('display','none');
        var audio = $('.carsound')[0];
        audio.play();
        $('#car').animate({top:z},2500).promise().done(function(){
            $('#htmltapin').fadeIn(2000);
            $('#htmltapin').css('display','table-cell');
        }); 
    });
});
//css part 
$('document').ready(function(){
    var b = ($('.box').height()/2);
    $('.tapcss').click(function(){
        $('.tapcss2,#wand').css('display','block');
        $('.box').css('display','table-cell');
        $('#csspara').css('display','none');
       
    });
    var r = 0;
    $('.tapcss2').click(function(){
        r = 1;
        if($(window).height()<523){
        $('.smoke').delay(2000).animate({bottom:120},2000,function(){$('.smoke').addClass('add-smoke');
            var audio = $('.magic')[0];
        audio.play();}).css('display','table');
        }else{
            $('.smoke').delay(2000).animate({bottom:200},2000,function(){$('.smoke').addClass('add-smoke'); var audio = $('.magic')[0];
        audio.play();}).css('display','table');
        }
        $('#wand').addClass('wandanim');
        $(this).html('Abra ka Dabra !!!');
    });
    $(window).resize(function(){
        if(r==1){
            if($(window).height()<523){
        $('.smoke').animate({bottom:70},20,function(){$('.smoke').css('-webkit-transform','scale(3,3)').css('margin-top',0);}).css('display','table');
        }else{
            $('.smoke').animate({bottom:200},20,function(){$('.smoke').css('-webkit-transform','scale(4,4)').css('margin-top',0);}).css('display','table');
        }
        }
    });
    
});


  
$('document').ready(function(e){
    $('.tapjs').click(function(){
        $('.tapjs2').css('display','block');
        $('#jspara').css('display','none');
    });
   function loop(){
        var i =0;
        i=i+1;
        var winh = $(window).height()*0.7;
        var winw = $(window).width()*0.7;
        var y = Math.floor(Math.random() * winh);
        var x = Math.floor(Math.random() * winw);
        var y1 = Math.floor(Math.random() * (winh - 0 + 1)) + 0;
        var x1 = Math.floor(Math.random() * (winw - 0 + 1)) + 0;
        var y2 = Math.floor(Math.random() * (winh - 0 + 1)) + 0;
        var x2 = Math.floor(Math.random() * (winw - 0 + 1)) + 0;
        var y3 = Math.floor(Math.random() * (winh - 0 + 1)) + 0;
        var x3 = Math.floor(Math.random() * (winw - 0 + 1)) + 0;
        var y4 = Math.floor(Math.random() * (winh - 0 + 1)) + 0;
        var x4 = Math.floor(Math.random() * (winw - 0 + 1)) + 0;
        var y5 = Math.floor(Math.random() * (winh - 0 + 1)) + 0;
        var x5 = Math.floor(Math.random() * (winw - 0 + 1)) + 0;
        $('.rec').html('X:'+x+'Y:'+y+'<br>x1'+x1+'y1'+y1+'<br>i'+i);
        $('#jsbubble').animate({bottom:y,left:x},8000,function(){loop();});
        $('#jsbubble2').animate({bottom:y1,left:x1},8000,function(){loop();});
        $('#jsbubble3').animate({bottom:y2,left:x2},8000,function(){loop();});
        $('#jsbubble4').animate({bottom:y3,left:x3},8000,function(){loop();});
        $('#jsbubble5').animate({bottom:y4,left:x4},8000,function(){loop();});
        $('#jsbubble6').animate({bottom:y5,left:x5},8000,function(){loop();});
        $('#jsbubble,#jsbubble2,#jsbubble3,#jsbubble4,#jsbubble5,#jsbubble6').click(function(){
            $(this).stop();
            $(this).fadeOut(10);
            var audio = $('.pop')[0];
            audio.play();
            $('.tapjs2').html('Create Bubbles');
        });   
        }
    $('.tapjs2').click(function(){
        $('#jsbubble,#jsbubble2,#jsbubble3,#jsbubble4,#jsbubble5,#jsbubble6').stop();
        $('#jsbubble,#jsbubble2,#jsbubble3,#jsbubble4,#jsbubble5,#jsbubble6').fadeIn('fast');
        $(this).html('Hit the Bubbles');
        loop(); 
    });
});

//js for designing part
$('document').ready(function(e){
    var count=0;
    $('.tapdesign').click(function(){
        $('#designpara').css('display','none');
        $('.tapdesign2').css('display','block');
        $('.design_middle').css('display','block');
        $('#pencil').animate({left:9,top:158.884573},4000,'linear').promise()
        .done(function(){
            count=1;
            $('.vertex2').addClass('blink');
        });
        $('.vertex2').click(function(){
            if(count==1){
                $('.edge1').addClass('star1');
                $('#pencil').animate({left:190,top:158.884573},4000,'linear').promise()
                .done(function(){
                    count=2;
                    $('.vertex2').removeClass('blink');
                    $('.vertex3').addClass('blink');
                });
            }
            else {
                 return false;
            }
            $('.vertex3').click(function(){
                if(count==2){
                    $('.edge2').addClass('star2');
                    $('#pencil').animate({left:98,top:0},4000,'linear').promise()
                    .done(function(){
                        count=3;
                        $('.vertex3').removeClass('blink');
                        $('.vertex1').addClass('blink');
                    });
                }
                else {
                    return false;
                }
                $('.vertex1').click(function(){
                    if(count==3){
                        $('.edge3').addClass('star3');
                        $('#pencil').animate({left:9,top:158.884573},4000,'linear').promise()
                        .done(function(){
                            count=4;
                            $('.vertex1').removeClass('blink');
                            $('.vertex6').addClass('blink');
                        });
                    }
                    else {
                        return false;
                    }
                    $('.vertex6').click(function(){
                            if(count==4){
                                $('#pencil').animate({left:68,top:55.9615242},4000,'linear').promise()
                                .done(function(){
                                    $('.edge5').addClass('star5');
                                    $('#pencil').animate({left:10,top:55},4000,'linear').promise()
                                    .done(function(){
                                        count=5;
                                        $('.vertex6').removeClass('blink');
                                        $('.vertex7').addClass('blink');
                                    });
                                });
                            }
                            else {
                                return false;
                            }
                            $('.vertex7').click(function(){
                                if(count==5){
                                    $('.edge6').addClass('star6');
                                    $('#pencil').animate({left:188,top:55},4000,'linear').promise()
                                    .done(function(){
                                        count=6;
                                        $('.vertex7').removeClass('blink');
                                        $('.vertex8').addClass('blink');
                                    });
                                }
                                else {
                                    return false;
                                }
                                $('.vertex8').click(function(){
                                    if(count==6){
                                        $('.edge7').addClass('star7');
                                        $('#pencil').animate({left:97,top:212},4000,'linear').promise()
                                        .done(function(){
                                            count=7;
                                            $('.vertex8').removeClass('blink');
                                            $('.vertex6').addClass('blink');
                                        });
                                    }
                                    else {
                                        return false;
                                    }
                                    $('.vertex6').click(function(){
                                        if(count==7){
                                            $('.edge8').addClass('star8');
                                            $('#pencil').animate({left:5,top:55},4000,'linear')
                                            .promise()
                                            .done(function(){
                                                $('.vertex1,.vertex2,.vertex3,.vertex6,.vertex7,.vertex8').addClass('blink');
                                                $('.design_middle').addClass('starrotate');
                                                $('#pencil').css('opacity',0);
                                            });
                                        }
                                        else {
                                            return false;
                                        }
                                    });
                                });
                            });
                        });
                });
            });
        });
    });  
});

//Reminder: I have used count to initialise the promise and done function only once because on clicking vertex6 it is calling again and again.


//for pencil drawing
$(window).load(function(){
$('.tapapp').click(function(){
   $('#apppara').css('display','none');
    $('.tapapp2').css('display','block');
   $('.app_middle').css('display','block');
    var appcount=1;
    
$('.tapapp2').click(function(){
    if(appcount==1){
    $('#player').css('opacity','0');
        $('#player1').css('opacity','1').promise().done(function(){
        $('#flag1').css('opacity','0');
        $('#soccer_ball').animate({top:-0,left:40},500).promise().done(function(){
            $('#player1').css('opacity','0');
            $('#player').css('opacity','1').promise().done(function(){
                $('.footballer').animate({top:30,left:90},200);
                appcount=2;
            });
        });
    });
    }
   if(appcount==2){
        $('#player').css('opacity','0');
       $('#player1').css('opacity','1').promise().done(function(){
        $('#flag2').css('opacity','0');
        $('#soccer_ball2').animate({top:-0,left:40},500).promise().done(function(){
            $('#player1').css('opacity','0');
           $('#player').css('opacity','1').promise().done(function(){
                $('.footballer').animate({top:30,left:180},200);
                appcount=3;
            });
        });
    });
    }
   if(appcount==3){
        $('#player').css('opacity','0');
       $('#player1').css('opacity','1').promise().done(function(){
        $('#flag3').css('opacity','0');
        $('#soccer_ball3').animate({top:-0,left:40},500).promise().done(function(){
            $('#player1').css('opacity','0');
            $('#player').css('opacity','1').promise().done(function(){
                $('.footballer').fadeOut(10);
                $('#flag1').animate({top:190,left:-130},0);
                $('#flag2').animate({top:190,left:-120},0);
                $('#flag3').animate({top:120,left:207},0);
                $('#flag1,#flag2,#flag3').animate({opacity:1},100);
                appcount++;
            });
        });
    });
    }
});


});
});
//$(window).resize(function(){
  //  alert($('.text').height());
//});