var borderWidth=4
var mobileDeviceWidth=600;
var tabletDeviceWidth=992;

$(document).ready(function(){

});    

$( window ).resize(function() {
    loadHeroImage();
});

function loadHeroImage(){
	if($(window).width()<tabletDeviceWidth)
    {	
       // $('.hero').css('margin-top',$('#header-navigation-bar').outerHeight()-borderWidth);
        $('.hero > img.show-mob , .sec_hero_with_description > img.show-mob , .sec_hero > img.show-mob').css('display','block !important');
        $('.hero > img.show-desktop , .sec_hero_with_description > img.show-desktop , .sec_hero > img.show-desktop').css('display','none !important');
    }
    else
    {
        $('.hero > img.show-mob , .hero > img.show-mob , .sec_hero_with_description > img.show-mob, sec_hero > img.show-mob').css('display','none !important');
        $('.hero > img.show-desktop , .sec_hero_with_description > img.show-desktop, .sec_hero > img.show-desktop').css('display','block !important');
    }  
}    
loadHeroImage();