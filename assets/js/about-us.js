$(function () {
    let isNavigationAllowed = false;
    let isScrollOnNavAllowed = true;
    let viewOffset, aboutOffset, hierarchyOffset, corporateCultureOffset, shareholdersOffset;
    onResize();
    $(window).scroll(function (event) {
        const scroll = $(window).scrollTop();
        if (scroll >= 475) {
            if (!$(".navWrapper").hasClass('sticky')) {
                $(".navWrapper").addClass("sticky")
            }
        } else {
            if ($(".navWrapper").hasClass('sticky')) {
                $(".navWrapper").removeClass("sticky")
            }
        }
        clearTimeout( $.data( this, "scrollCheck" ) );
        $.data( this, "scrollCheck", setTimeout(function() {
            isScrollOnNavAllowed = true;
        }, 100) );
        if (isNavigationAllowed && isScrollOnNavAllowed) {
            $(".navWrapper button").removeClass("active")
            switch (true) {
                case scroll >= aboutOffset.top - 30 && scroll < viewOffset.top - 30: {
                    if (!$(".navWrapper button[data-target|='about']").hasClass("active")) {
                        $(".navWrapper button[data-target|='about']").addClass("active")
                    }
                    break;
                }
                case scroll >= viewOffset.top - 30 && scroll < hierarchyOffset.top - 30: {
                    if (!$(".navWrapper button[data-target|='view']").hasClass("active")) {
                        $(".navWrapper button[data-target|='view']").addClass("active")
                    }
                    break;
                }
                case scroll >= hierarchyOffset.top - 30 && scroll < corporateCultureOffset.top - 30: {
                    if (!$(".navWrapper button[data-target|='hierarchy']").hasClass("active")) {
                        $(".navWrapper button[data-target|='hierarchy']").addClass("active")
                    }
                    break;
                }
                case scroll >= corporateCultureOffset.top - 30 && scroll < shareholdersOffset.top - 30: {
                    if (!$(".navWrapper button[data-target|='corporateCulture']").hasClass("active")) {
                        $(".navWrapper button[data-target|='corporateCulture']").addClass("active")
                    }
                    break;
                }
                case scroll >= shareholdersOffset.top - 30: {
                    if (!$(".navWrapper button[data-target|='shareholders']").hasClass("active")) {
                        $(".navWrapper button[data-target|='shareholders']").addClass("active")
                    }
                    break;
                }
                default:
                    break;
            }
        }
    });
    $(window).resize(function () {
        onResize();
    });
    $("#hierarchy a").click(function () {
        $("#modal .modal-title").html($(this).attr("data-title"))
        $("#modal .modal-body").html($(this).attr("data-description"))
    })
    function onResize() {
        if ($(window).width() > 767) {
            isNavigationAllowed = true;
            viewOffset = $("#view").offset();
            aboutOffset = $("#about").offset();
            hierarchyOffset = $("#hierarchy").offset();
            corporateCultureOffset = $("#corporateCulture").offset();
            shareholdersOffset = $("#shareholders").offset();
            $(".navWrapper button").click(function () {
                isScrollOnNavAllowed = false;
                $('html, body').stop(false, false).animate({scrollTop: $(`#${$(this).attr("data-target")}`).offset().top}, 100);
                $(".navWrapper button").removeClass("active")
                $(this).addClass("active")
            })
        } else {
            isNavigationAllowed = false;
        }
    }
});
