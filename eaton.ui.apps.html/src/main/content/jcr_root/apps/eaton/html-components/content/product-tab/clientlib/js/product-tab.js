$('.howToBuy').click(function() {
	var dropDown = document.getElementById('how-to-buy-drop-down');
    if (dropDown.style.display === 'block') {
        dropDown.style.display = 'none';
    } else {
        dropDown.style.display = 'block';
    }

});

 $(document).ready(function(){


    $("#thumbnail-carousel .media-gallary-indicators li").click(function(){
		$("#thumbnail-carousel .media-gallary-indicators li").removeClass("active");
        $(this).addClass("active");
    });
    $("#thumbnail-carousel .left").click(function(){
        $("#thumbnail-carousel .active li").removeClass("active");
		$("#thumbnail-carousel .active li:first-child").addClass("active");

    });
    $("#thumbnail-carousel .right").click(function(){
        $("#thumbnail-carousel .active li").removeClass("active");
		$("#thumbnail-carousel .active li:first-child").addClass("active");

    });




     $(".anchorLinkList li").click(function(){
		$(".anchorLinkList li").removeClass("active");
        $(this).addClass("active");
    });
});


var mobileDeviceWidth = 600;
var tabletDeviceWidth = 992;

$(window).scroll(
    function() {
        if ($(window).width() > tabletDeviceWidth) {
			var distanceFromTop = $(this).scrollTop();
			var navigationHeight = $('#header-navigation-bar').height();
            if (distanceFromTop >= $('#utility-nav').height()) {
				$('.productTabsFamily').css('margin-top', '62px');
				$('.productSkuTab').css('margin-top', '62px');

            }
            else
            {
				$('.productTabsFamily').css('margin-top', '0px');
                $('.productSkuTab').css('margin-top', '0px');
            }

        }

    });


    
