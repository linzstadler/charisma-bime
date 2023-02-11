
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

    $("header .navCollapse .list-group-item .handler").click(function () {
        if($(this).hasClass('collapsed')) {
            $(this).parent().find(".plus-span").css("display", "inline-block")
            $(this).parent().find(".minus-span").css("display", "none")

        } else {
            $(this).parent().find(".plus-span").css("display", "none")
            $(this).parent().find(".minus-span").css("display", "inline-block")
        }
    })

    console.log($("header .navCollapse .collapseLayer2"))
});
