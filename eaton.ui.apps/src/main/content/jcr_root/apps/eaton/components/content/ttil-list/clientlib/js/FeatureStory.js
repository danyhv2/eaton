$(document).ready(function(){

});    

$( window ).resize(function() {
   loadFeatureImage();
});

function loadFeatureImage(){
	if($(window).width()<768)
    {
        $('.imgContainer > img.show-mob').css('display','block');
        $('.imgContainer > img.show-desktop').css('display','none');
    }
    else
    {
        $('.imgContainer > img.show-mob').css('display','none');
        $('.imgContainer > img.show-desktop').css('display','block');
    }  
}    
loadFeatureImage();
