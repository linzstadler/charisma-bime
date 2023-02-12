$(function () {
    const collapse = document.getElementById('collapseExample2')
    collapse.addEventListener('hidden.bs.collapse', function () {
        $(".reportCollapse .collapsePlus").fadeIn(1);
        $(".reportCollapse .collapseMinus").fadeOut(1);
    })
    collapse.addEventListener('show.bs.collapse', function () {
        $(".reportCollapse .collapsePlus").fadeOut(1);
        $(".reportCollapse .collapseMinus").fadeIn(1);
    })

});