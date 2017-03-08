$(document).ready(function () {
    var action = "click";
    var speed = "500";

    $("li.question").on(action, function () {
        //on action (click, hover, doubleclick, etc), show answer
        $(this).next()
            .slideToggle(speed)
            //grabs all inactive answers
            .siblings('li.answer')
            .slideUp();
        //grab arrow image to active question
        var image = $(this).children('img');
        //rotate active question arrow down or back to original
        $('img').not(image).removeClass('rotate');
        //toggle rotate css class
        image.toggleClass('rotate');
    });
});