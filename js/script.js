$(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop()>50);
    $('.navbar-brand').toggleClass('scrolled', $(this).scrollTop()>50);
    $('.nav-link').toggleClass('scrolled', $(this).scrollTop()>50);
    $('.NavBtn_active').toggleClass('scrolled', $(this).scrollTop()>50);
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 50) { 
        $('.navbar a').toggleClass('scrolled', $(this).scrollTop()>50);
    }
});
$("#Login").click(function(){
    $("#Login").toggleClass("NavBtn_active");
    $("#Signup").removeClass("NavBtn_active");

});
$("#Signup").click(function(){
    $("#Signup").toggleClass("NavBtn_active");
    $("#Login").removeClass("NavBtn_active");
});
