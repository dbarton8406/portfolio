jQuery(function($) {
  "use strict";

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin

 jQuery('.navigation li a[href*=#]:not([href=#]),.dot-nav li a[href*=#]:not([href=#])').on("click", function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: (target.offset().top - 79)
                }, 850);
                return false;
            }
        }
        
    });
   

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


        
   
// prettyphoto

 $("a[data-rel^='prettyPhoto']").prettyPhoto();
 
    
 
//  wow amimation

 new WOW().init();

 
 });