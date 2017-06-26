$(function() {
    $('.categoryMenu .nav-pills').bind('click', function (e) {
		$('.categoryMenu .nav-pills > li').removeClass('active');
        $('.categoryMenuPanel').hide();
        $($(this).find('a').attr('href')).parent().show();
        $(this).addClass('active');
    });
});