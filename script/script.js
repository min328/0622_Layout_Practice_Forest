/* eslint-disable */


$(function () {
    $(".tabBtn").click(function () {
        // .tabBtn 주변 버튼(클릭되지 않음) CSS 지정(원상복구)
        $(this).siblings("button").css({
            "color": "#333",
            "border": "none"
        });
        // .tabBtn 주변 버튼(클릭되지 않음) 이미지 아이콘 지정
        $(this).siblings("button").children("img").attr("src", "images/tab_bullet.png");
        $(this).siblings("button").children("img").css({
            "padding": "5px"
        });

        // .tabBtn 클릭된 요소 스타일 지정
        $(this).css({
            "color": "red",
            "border-bottom": "2px solid red",
        });
        $(this).children("img").attr("src", "images/tab_check.png");
        $(this).children("img").css({
            "padding": "2px"
        });
    });
});
