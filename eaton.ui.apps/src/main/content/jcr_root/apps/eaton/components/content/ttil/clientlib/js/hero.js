var borderWidth=4
var mobileDeviceWidth=600;
var tabletDeviceWidth=992;
var pageHeight=$(window).height();

$(document).ready(function(){

});    

$( window ).resize(function() {
	pageHeight=$(window).height();
	//console.log("hero.js > pageHeight: "+pageHeight);
    loadHeroImage();
});


function loadHeroImage(){
	
	if($(window).width()<tabletDeviceWidth)
    {	
       // $('.hero').css('margin-top',$('#header-navigation-bar').outerHeight()-borderWidth);
        $('.hero > img.show-mob , .sec_hero_with_description > img.show-mob , .sec_hero > img.show-mob').css('display','block !important');
        $('.hero > img.show-desktop , .sec_hero_with_description > img.show-desktop , .sec_hero > img.show-desktop').css('display','none !important');
       // $('.hero').css('height',pageHeight);
        $('.hero').css({'height': pageHeight - 100});
    }
    else
    {
        $('.hero > img.show-mob , .hero > img.show-mob , .sec_hero_with_description > img.show-mob, sec_hero > img.show-mob').css('display','none !important');
        $('.hero > img.show-desktop , .sec_hero_with_description > img.show-desktop, .sec_hero > img.show-desktop').css('display','block !important');
    }  
}    
loadHeroImage();

