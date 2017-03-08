$(document).ready(function () {
    var totalWidth = 0;
    var positions = [];

    $('#slides .slide').each(function (i) {
        positions[i] = totalWidth;
        totalWidth += $(this).width();

        //check widths
        if (!$(this).width()) {
            alert('Please add width to image');
            return false;
        }
    });
    //sets width for slides div
    $('#slides').width(totalWidth);

    $('nav ul li a').click(function (e, keepScroll) {
        $('li.product').removeClass('active').addClass('inactive');
        $(this).parent().addClass('active');

        var pos = $(this).parent().prevAll('.product').length;

        $("#slides").stop().animate({
            marginLeft: -positions[pos] + 'px'
        }, 450);
        e.preventDefault();

        //prevents autoscroll 
        if (!autoScroll) clearInterval(itvl);
    });

    //make first image active
    $('nav ul li .product:first').addClass('active').siblings().addClass('inactive');

    //autoscroll
    var current = 1;

    function autoScroll() {
        if (current === -1) return false;
        $('nav ul li a').eq(current % $('nav ul li a').length).trigger('click', [true]);
        current++;
    }

    //autoscroll duration
    var itvl = setInterval(function () {
        autoScroll()
    }, 3000);
});