$(function() {
    $('.categoryMenu .nav-pills > li h5 a').bind('click', function (e) {
		$('.categoryMenu .nav-pills > li').removeClass('active');
        $('.categoryMenuPanel').hide();
        $($(this).attr('href')).parent().show();
        $('.categoryMenu .nav-pills').addClass('active');
        $('.cat-menu-name > h5').css('border-bottom','0px');
    });
});