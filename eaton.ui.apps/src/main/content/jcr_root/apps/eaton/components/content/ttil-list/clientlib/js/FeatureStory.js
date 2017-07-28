var mobileDeviceWidth = 600;
var tabletDeviceWidth = 992;

$(window).load(function() {
	loadFeatureImage();
    leftRightAdjustment();
});

$(window).resize(function() {
	loadFeatureImage();

});

function loadFeatureImage() {
	if ($(window).width() <= tabletDeviceWidth) {
		$('.imgContainer > img.show-mob').css('display', 'block');
		$('.imgContainer > img.show-desktop').css('display', 'none');
		//$('.infoContent').removeClass('largeMarginTop').removeClass('largeMarginLeft').addClass('mediumMarginTop').addClass('mediumMarginTop').addClass('mediumMarginLeft');
	} else {
		$('.imgContainer > img.show-mob').css('display', 'none');
		$('.imgContainer > img.show-desktop').css('display', 'block');
		//$('.infoContent').addClass('largeMarginTop').addClass('largeMarginLeft').removeClass('mediumMarginTop').removeClass('mediumMarginTop').removeClass('mediumMarginLeft');
	}
}
loadFeatureImage();
leftRightAdjustment();

function leftRightAdjustment(){
	var storyObj = $(".storyHolder > div.aem-Grid");

    if(storyObj.length>=1)
    {
        $.each( storyObj, function( i, v ) {

            if(i%2==0)//First child is odd
            {
				 $(this).find('.storyBoardImageFS ').addClass('odd').removeClass('even');
            }
            else
            {

				$(this).find('.storyBoardImageFS').addClass('even').removeClass('odd');
                 $(this).find('.storyBoardImageFS .storyBoardOverlayRight').addClass('storyBoardOverlayLeft').removeClass('storyBoardOverlayRight');

            }

		});
    }
    else
    {
        console.log("StoryObject length 0");
    }
}
/*
 var spacing=2;
 var imgHeight= 470; //FallBack Height for desktop
 var mobileDeviceWidth=600;
 var tabletDeviceWidth=992;

 $(window).load(function(){
 loadFeatureImage();
 setImageContainerHeight();

 });    

 $( window ).resize(function() {
 loadFeatureImage();
 setImageContainerHeight();
 });



 function loadFeatureImage(){
 if($(window).width()<tabletDeviceWidth)
 {
 $('.imgContainer > img.show-mob').css('display','block');
 $('.imgContainer > img.show-desktop').css('display','none');
 $('.storyBoardOverlayRight, .storyBoardOverlayLeft').height($('.storyBoardOverlayContent ').closest('.storyBoardImageFS').find('.imgContainer > img.show-mob').outerHeight()+spacing);

 }
 else
 {
 $('.imgContainer > img.show-mob').css('display','none');
 $('.imgContainer > img.show-desktop').css('display','block');
 // $('.storyBoardOverlayRight, .storyBoardOverlayLeft').height($('.storyBoardOverlayContent ').closest('.storyBoardImageFS').find('.imgContainer > img.show-desktop').outerHeight()+spacing);

 }  

 }
 function setImageContainerHeight(){
 for(var i=0 ; i< $('.storyHolder > div').length ; i++)
 {
 imgHeight=$('.storyHolder >div:nth-Child('+(i+1)+')').find('.imgContainer > .show-desktop').height();
 console.log($('.storyHolder >div:nth-Child('+(i+1)+')').find('.imgContainer > .show-desktop').height());

 imgHeight = (imgHeight == 0 ? 470 : imgHeight);

 if($(window).width()>tabletDeviceWidth)
 {

 //$('.storyHolder > div:nth-Child('+(i+1)+')').find(['class |= storyBoardOverlay']).css('height', imgHeight);
 $('.storyHolder > div:nth-Child('+(i+1)+')').find('.infoContent').parent().css('height', imgHeight);
 }
 }
 }  



 */