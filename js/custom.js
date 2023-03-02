$(document).ready(function () {
    $('.hidden').slideDown(300);


    $('.mainBodyItems').mouseenter(function () { 
        // $('.hide').css({"transform":"scale(1.7)" , "border":"5px solid black" , "transition":"1.5s"});
        // $(this).closest('.mainBodyItems').find('.hide').css({"transform":"scale(1.7)" , "border":"5px solid black" , "transition":"1.5s"});
        $(this).closest('.mainBodyItems').find('.hide').css({"transform":"scale(1.7)" , "border":"5px solid black" , "transition":"1.5s"});
        
    });
    $('.mainBodyItems').mouseleave(function () { 
        $('.hide').css({"transform":"scale(0)" , "border":"0px solid black" , "transition":"1s"});
        
    });




    // $('.mainBodyItems').mouseenter(function () { 

        
    // });













});