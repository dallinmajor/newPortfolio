var padding_top;
var scrollVal;
var topVal;
var scrollingDown;

$(window).scroll(function () {
    var scroll = $(document).scrollTop();

    if (scroll > scrollVal) {
        scrollingDown = true;
    } else {
        scrollingDown = false;
    }

    if (scroll < 50) {
        setDefaults();
    } else if (scrollingDown && ) {

    }

    if (topVal > 0) {
        topVal = 0;
        $(".myNav").css("top", topVal);
    }
    else if ((scrollingDown) && (scroll > 450)) {
        topVal = topVal - 2;
        $(".myNav").css("top", topVal);
    } else if ((!scrollingDown) && topVal < 0) {
        topVal = topVal + 2;
        $(".myNav").css("top", topVal);
    }

    if ((scroll > scrollVal) && (scroll > 50) && (padding_top > 0.5) && (scroll < 100)) {
        padding_top = padding_top - 0.1;
        $(".myNav").css("padding-top", `${padding_top}%`)
    } else if ((scroll < scrollVal) && (scroll > 50) && (2 >= padding_top) && (scroll < 80)) {
        padding_top = padding_top + 0.1;
        $(".myNav").css("padding-top", `${padding_top}%`)
    }

    if (scroll >= 80) {
        $(".myNav").addClass("navAdjusted");
        $(".myNav").css("padding-top", "0.5%")
    } else {
        $(".myNav").removeClass("navAdjusted");
    }

    scrollVal = scroll;
});

function setDefaults() {
    topVal = 0;
    scrollVal = 50;
    padding_top = 2;
    scrollinDown = false;
    $(".myNav").css("padding-top", "2%");
    $(".myNav").removeClass("navAdjusted");
    $(".myNav").css("top", "0");
}