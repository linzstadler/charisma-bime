
$(function() {
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        // Do something
        console.log(scroll)
        if(scroll >= 20) {
            if($(".arrow.arrow-handler button").css('display') == 'none') {
                $(".arrow.arrow-handler button").fadeIn(200)
            }
            
        } else {
            if($(".arrow.arrow-handler button").css('display') == 'inline-block') {
                $(".arrow.arrow-handler button").fadeOut(200)
            }
        }
    });
    $(".arrow.arrow-handler").click(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});