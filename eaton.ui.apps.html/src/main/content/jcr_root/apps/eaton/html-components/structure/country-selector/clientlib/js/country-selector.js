var isCountrySelectorOpen = false;
var countryListLeftHt = $('#myTabs').height();
$('.flag-list').css("min-height", countryListLeftHt);
$('.select-region-link').click(function() {
	isCountrySelectorOpen = true;
	$('.continent-dropdown-menu').css("height", "100%");
	$('.continent-dropdown-menu').show();
	//console.log('select-region-link-desktop');

});
var previous = null;
$('#myTabs li a').click(function() {

	var navigateToName = $(this).attr('href');

	var navigateTo = $(".flag-list").find(navigateToName);
	//console.log(navigateTo);

	navigateTo.slideDown("slow");
	if (previous != null) {
		previous.hide();
	}
	previous = navigateTo;

});
$('.utility-close-icon').click(function() {
	$('.continent-dropdown-menu').css("height", "0");
	isCountrySelectorOpen = false;

});
$('.select-region-link-mob').click(function(e) {

	// $('.continent-dropdown-menu-mob').height($(window).height());
	// $('#megaMenuOption #continent-dropdown-menu-mob').remove();
	/*
	 * try{ $('#megaMenuOption #continent-dropdown-menu-mob').remove(); } catch{
	 * console.log('no country selector in utilty nav'); }
	 */
	$('.continent-dropdown-menu-mob').animate({
		height : '100%'
	}, 0, function() {
	});
	e.stopPropagation();
	//console.log('select-region-link-mob');
});
$('.utility-close-icon-mob').click(function() {
	$('.continent-dropdown-menu-mob').animate({
		height : '0'
	}, 0, function() {
	});
	// console.log( $('#bs-example-navbar-collapse-1').position().left)

	$('#bs-example-navbar-collapse-1').animate({
		left : "0%"
	}, {
		duration : 500
	});
});
/*******************************************************************************
 * Toggle between Plus-minus ***** $('#continent-dropdown-menu-mob #accordion >
 * .panel.panel-default').on('click', function(){
 * 
 * //Reset to Plus cursor if new collapsible section get clicked
 * $('#continent-dropdown-menu-mob #accordion >
 * .panel.panel-default').find("a[data-parent='#accordion'] >
 * i.more-less").removeClass('glyphicon-minus').addClass('glyphicon-plus')
 * 
 * if($(this).find('a[data-parent="#accordion"]').attr('class')=='collapsed') {
 * 
 * $(this).find('i.more-less').removeClass('glyphicon-minus').addClass('glyphicon-plus'); }
 * else {
 * $(this).find('i.more-less').removeClass('glyphicon-plus').addClass('glyphicon-minus'); }
 * });
 */
