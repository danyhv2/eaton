$(document).ready(function(){

    $("#myCarousel2 .media-gallary-indicators li").click(function(){

		$("#myCarousel2 .media-gallary-indicators li").removeClass("active");
        $(this).addClass("active");
    });
    $("#myCarousel2 .left").click(function(){
        $("#myCarousel2 .active li").removeClass("active");
		$("#myCarousel2 .active li:first-child").addClass("active");

    });
    $("#myCarousel2 .right").click(function(){
        $("#myCarousel2 .active li").removeClass("active");
		$("#myCarousel2 .active li:first-child").addClass("active");

    });
});



$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});