$(document).ready(function(){

});    

$( window ).resize(function() {
    loadHeroImage();
});

function loadHeroImage(){
	if($(window).width()<769)
    {
        $('.hero > img.show-mob , .sec_hero_with_description > img.show-mob , .sec_hero > img.show-mob').css('display','block');
        $('.hero > img.show-desktop , .sec_hero_with_description > img.show-desktop , .sec_hero > img.show-desktop').css('display','none');
    }
    else
    {
        $('.hero > img.show-mob , .hero > img.show-mob , .sec_hero_with_description > img.show-mob, sec_hero > img.show-mob').css('display','none');
        $('.hero > img.show-desktop , .sec_hero_with_description > img.show-desktop, .sec_hero > img.show-desktop').css('display','block');
    }  
}    
loadHeroImage();