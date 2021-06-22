/* eslint-disable */



    $(function () {
       $("div.tabBtn").click(function(){
           $(this).css({
           "color" : "red"
            , "border-bottom" : "2px solid red"
        });
           $(this).children("img").attr("src","images/tab_check.png")
       });
    });

