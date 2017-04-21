$(document).ready(function () {


    // SocialLinks
    $('#github').click(function () {
        window.open("https://github.com/aniket965", "github")
    });
    $('#facebook').click(function () {
        window.open("https://www.facebook.com/aniket.sharma.583671", "facebook")
    });
    $('#insta').click(function () {
        window.open("https://www.instagram.com/aniket965.as/", "instagram")
    });
    $('#youtube').click(function () {
        window.open("https://www.youtube.com/channel/UCdDzhOvIjJ8CfrZ7AY_y59g", "youtube")
    });
    $('#googleplus').click(function () {
        window.open("https://plus.google.com/u/0/105401357309088653716", "googleplus")
    });
    $('#twitter').click(function () {
        window.open("https://twitter.com/aniket965as", "twitter")
    });
    $('#linkedin').click(function () {
        window.open("https://www.linkedin.com/in/aniket-sharma-548413131/", "linkedin");
    });
    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    var window_height = window.innerHeight;

    var scrollable_height = height - window_height;

    $( window ).scroll(function() {
        var percent_page_scrolled = Math.floor((body.scrollTop / scrollable_height) * 100) ;
       if(percent_page_scrolled > 100) {
           percent_page_scrolled = 100;
       }

       $(".progress-bar").css("width" , percent_page_scrolled + "%");
        console.log(percent_page_scrolled);

});



});