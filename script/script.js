/* eslint-disable */


$(function () {
    $(".tabBtn").click(function () {

        $(this).siblings("button").css({
            "color": "#333",
            "border": "none"
        });

        $(this).siblings("button").children("img").attr("src", "images/tab_bullet.png");
        $(this).css({
            "color": "red",
            "border-bottom": "2px solid red"
        });
        $(this).children("img").attr("src", "images/tab_check.png");
    });
});
