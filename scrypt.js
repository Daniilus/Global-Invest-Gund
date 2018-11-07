$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
    });
    return false;
    });
    

    $(document).ready(function(){
        $(".arrows").click(function(){
            $(".faq-info1").slideToggle("slow");
            $(this).toggleClass("active"); return false;
        });
        $(".steps").click(function(){
            $(".faq-info1").slideToggle("slow");
            $(this).toggleClass("active"); return false;
        });
    });