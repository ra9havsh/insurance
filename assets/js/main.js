$(document).ready(function(){

    // Change the Header style on scroll
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 50) {
          $("#header").addClass('header-scrolled');          
          $("#header .logo img").addClass('header-scrolled');
          $("#header .nav-menu a").addClass('header-scrolled');
          $("#header .logo img").attr('src','assets/img/merobeema1.png');
        }
        else{
          $("#header").removeClass('header-scrolled');  	
          $("#header .logo img").removeClass('header-scrolled');
          $("#header .nav-menu a").removeClass('header-scrolled');
          $("#header .logo img").attr('src','assets/img/merobeema.png');
        }
    });

    if ($(window).scrollTop() > 50) {
        $('#header').addClass('header-scrolled');
        $("#header .logo img").addClass('header-scrolled');
        $("#header .nav-menu a").addClass('header-scrolled');
        $("#header .logo img").attr('src','assets/img/merobeema1.png');
    }
    
  });