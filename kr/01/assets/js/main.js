$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>700){
            $("header").addClass("fixed");
        }else{
            $("header").removeClass("fixed");
        }
    });
    
    $(".hamburger, #menu_shadow").click(function(){
        $(".hamburger").toggleClass("is-active");
        $("body").toggleClass("open");
    });

    $(".mobile_menu a").click(function(){
        $(".hamburger").removeClass("is-active");
        $("body").removeClass("open");
    });
});