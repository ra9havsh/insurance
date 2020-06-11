$(document).ready(function(){

    // Change the Header style on scroll
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 100) {
          $("#header").addClass('header-scrolled');
        }
        else{
          $("#header").removeClass('header-scrolled');  	
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }
    
  });