$(function () {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
    const collapse = document.getElementById('collapseExample2')
    collapse.addEventListener('hidden.bs.collapse', function () {
        $(".reportCollapse .collapsePlus").fadeIn(1);
        $(".reportCollapse .collapseMinus").fadeOut(1);
    })
    collapse.addEventListener('show.bs.collapse', function () {
        $(".reportCollapse .collapsePlus").fadeOut(1);
        $(".reportCollapse .collapseMinus").fadeIn(1);
    })
})
