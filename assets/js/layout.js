
$(function() {
    $(window).scroll(function (event) {
        const scroll = $(window).scrollTop();
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
