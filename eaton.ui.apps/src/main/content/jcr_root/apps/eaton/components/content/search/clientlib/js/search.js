$('#close-search-btn').on('click', function(){
	$('.main-search-box > input').attr('placeholder','Search')
});   

$("#searchProducts2-inputbox-mob").focus(function(){
    $(".searchProducts2-mob").css("height", "56px");
});
$("#searchProducts2-inputbox-mob").blur(function(){
    $(".searchProducts2-mob").css("height", "98px");
});