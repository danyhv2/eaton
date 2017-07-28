var mobileDeviceWidth = 600;
var tabletDeviceWidth = 992;


if ($(window).width() <= tabletDeviceWidth) {	
	$('.productHighlight').addClass('container-padding');

} else {
	$('.productHighlight').removeClass('container-padding');
}


