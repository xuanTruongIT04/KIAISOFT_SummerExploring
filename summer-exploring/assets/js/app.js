$(document).ready(function(){
    $(".navbar-responsive").click(function(){
        $(".header-option-responsive").slideToggle();
    });

    var upSlide = function(){
        $(".header-option-responsive").slideUp();
    }
    
    $(window).resize(function(){
        upSlide();
    });

    $(window).scroll(function(){
        upSlide();
    });

    var images = ["assets/images/back-2.jpg", "assets/images/back-3.jpg", "assets/images/back-1.jpg", "assets/images/block-1-img.png"]; 
    var currentIndex = 0; 
    setInterval(function() {
       $('#wp-content .block-1').css('background', 'url(' + images[currentIndex] + ')');
       $('#wp-content .block-1').css('background-size', 'contain');
       currentIndex = (currentIndex + 1) % images.length; 
    }, 7000); 
}); 