// Sticky header

var mobileDeviceWidth = 600;
var tabletDeviceWidth = 992;

$(window).scroll(
		function() {
			if ($(window).width() < tabletDeviceWidth) {
				$('#footer-popular-links').addClass('smallMarginTop'); // adds margin top to popular links in case of Mobile & Tablet view				
				$('#titleMainText').removeClass('extraLargeMarginTop').addClass('mediumMarginTop');

			} else {
				$('#footer-popular-links').removeClass('smallMarginTop'); // Remove footer link margin top in mobile
				$('.hero').css('margin-top', '0px');
				$('.sec_hero').css('margin-top', '0px');
				$('#titleMainText').addClass('extraLargeMarginTop').removeClass('mediumMarginTop');
			}

			if (($(this).scrollTop() < 1) && ($(window).width() <= tabletDeviceWidth)) {
				$('.headerMain').removeClass('fixed');
                $('.hero, .sec_hero').css('margin-top',$('#header-navigation-bar').outerHeight()-borderWidth);
			}
			
			var distanceFromTop = $(this).scrollTop();
			var navigationHeight = $('#header-navigation-bar').height();
			if (distanceFromTop >= $('#utility-nav').height()) {
				if ($('.close-search-btn').css('display') == 'block') {
					$('.search-bar').addClass("searchFixed");
				}
				if (!isCountrySelectorOpen) {
					$('.headerMain').addClass('fixed');
                    if ($(window).width() <= tabletDeviceWidth) {
						$('.productTabsSku').css('margin-top', '92px');
                        $('.productTabsFamily').css('margin-top', '92px');
                        $('.hero-product-category').css('margin-top', '92px');
                    }
                    else{
						$('.productTabsSku').css('margin-top', '0px');
                        $('.productTabsFamily').css('margin-top', '0px');
                        $('.hero-product-category').css('margin-top', '0px');
                    }
				} else {
					var utilHeight = $('#utility-nav').height();
					var countrySeleHeight = $('.continent-dropdown-menu').height();
					if (distanceFromTop >= utilHeight + countrySeleHeight) {
						$('.headerMain').removeClass('fixed');
						$('.continent-dropdown-menu').hide();
					}
				}
				//Megamnu header height adjust upon window scroll: Desktop 
				megamenuAdjust(true);

				if ($('#main-search-input').height() != '0') {
                    $('#main-search-bar').css({'position': 'fixed', 'top':'100px'});
				}

			} else {
				$('.headerMain').removeClass('fixed');
				if ($('.search-bar').height() > 0) {
                    $('.search-bar').css({'position': 'absolute', 'top' : '4px'}).removeClass("searchFixed");
				}
				if ($('#main-search-input').height() == '0') {
                    $('.search-bar').css({'position': 'absolute !important', 'top':'0px !important'});
				}

				//Megamnu header height reset upon window scroll: Desktop 
				megamenuAdjust(false);
			}
		});

function megamenuAdjust(isReset) {

	if (($(window).width() > tabletDeviceWidth) && isReset) {
		//$('.megaMenu').css('margin-top',$('.utility-nav').outerHeight());
		$('.megaMenu').css('margin-top', '60px');
	}
	else if ($(window).width() > tabletDeviceWidth) {
		$('.megaMenu').css('margin-top', 0);
	}
}

function hideMegaMenu() {
	if ($(".megaMenu").is(":visible")) {
		$('.megaMenu').hide();
		$('#megaMenuOption > li').removeClass('active');
	}
}
$(document).ready(
		function() {
			$('.search-btn').click(
					function() {
						if ($(window).width() < tabletDeviceWidth) {
							$('#main-search-input').css("height", "66px");
						} else {
							$('#main-search-input').css("height", "85px");
						}

						if ($('#closeBtnHeader').css('display') == 'block') {
							$('#closeBtnHeader').addClass("collapsed");
							$('#bs-example-navbar-collapse-1 li.active').removeClass('in');
						}
						//$('#closeBtnHeader').addClass("collapsed").css('box-shadow','0 4px 0 transparent');
						$('#closeBtnHeader').addClass("collapsed");
						$('#bs-example-navbar-collapse-1').removeClass('in');						
						$('.search-btn').css("display", "none");
						$('.close-search-btn').css("display", "block");
						$('.search-bar').removeClass("hideSearchBar").addClass("showSearchBar").css("display", "block");
						if (isCountrySelectorOpen) {
							var countrySeleHeight = $('.continent-dropdown-menu').height();
						}
						hideMegaMenu();
					});

			$("#closeBtnHeader.navbar-toggle.collapsed").click(
					function() {
						/*utility nav mob-bottom align & scrolled removed when main menu is present*/

						if ($(window).width() < tabletDeviceWidth) {
							$('html').css('overflow-y', 'hidden');
							setTimeout(function() {
								$('#utility-nav-mob').addClass(
										'utility-bottom-fixed');
							}, 300);
						}

						if($("#closeBtnHeader").hasClass('collapsed'))
                        {    
							//$("#closeBtnHeader").css('box-shadow','0 4px 0 #333f48');
                        }
                        else
                        {
                           // $("#closeBtnHeader").css('box-shadow','0 4px 0 transparent');
                        }


						if ($('.search-bar').css('display') == 'block') {
							$('.search-bar').css("display", "none");
							$('.search-btn').css("display", "block");
							$('.close-search-btn').css("display", "none");
							$('#main-search-input').css("height", "0");
							$('#closeBtnHeader').removeClass("collapsed");
						}

                        try {
							$('.megaMenu').css('display', 'none');
							$('#bs-example-navbar-collapse-1').animate({left : "0"}, {	duration : 0});
							$('#bs-example-navbar-collapse-1 li.active').removeClass('active');
						} catch (e) {
							console.log('No MegaMenu');
						}
						$('html').css('overflow-y', 'auto');
					});

			//Added for megamenu:End
			$('.close-search-btn').click(function() {
				$('.search-btn').css("display", "block");
				$('.close-search-btn').css("display", "none");
                $('#main-search-input').css("height", "0");
                $('#main-search-bar').css({'position': 'absolute', 'top':'4px'});
				$('.search-bar').removeClass("searchFixed").removeClass('showSearchBar').addClass("hideSearchBar");
				hideMegaMenu();
			});

		});

// ACCORDION WITH TOGGLE ICONS

function toggleIcon(e) {
	$(e.target).prev('.panel-heading').find(".more-less").toggleClass(
			'glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
