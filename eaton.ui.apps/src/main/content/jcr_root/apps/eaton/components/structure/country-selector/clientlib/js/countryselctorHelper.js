/*$("div.language>a").click(function(){

	if($('*[data-countryview="index"]').length > 0){		
			if($.cookie('eaton_isoCode') == "undefined" || $.cookie('eaton_isoCode') == undefined || $.cookie('eaton_isoCode') == null){
				$.cookie('eaton_isoCode', $(this).attr('data-languagepath'));
				window.location.href = "http://localhost:4502"+ $.cookie('eaton_isoCode') +".html?wcmmode=disabled";
			} else {
				window.location.href = "http://localhost:4502"+ $.cookie('eaton_isoCode') +".html?wcmmode=disabled";
			}
	}
	else{
		$('#selected-region').text($(this).html());
	    $('.continent-dropdown-menu').css("height", "0");
		window.location.href = "http://localhost:4502"+ $(this).attr('data-languagepath') +".html?wcmmode=disabled";

	}

});*/
$( window ).on( "load", function() {
	var domain= $('#index').attr('data-domain').slice(0, -1);
	if($('*[data-countryview="index"]').length > 0){
		if($.cookie('eaton_isoCode') != undefined){
			var redirectUrl= domain + $.cookie('eaton_isoCode') +".html?wcmmode=disabled";
			$('head').append('<meta id="refreshRedirect" http-equiv="refresh" content="5;url='+ redirectUrl + '">');
		} 
	}
});

$('div.language>a').click(function(){
	$.cookie('eaton_isoCode', $(this).attr('data-languagepath'));
	window.location.href = $('#index').attr('data-domain').slice(0, -1) + $.cookie('eaton_isoCode') +".html?wcmmode=disabled";
    $('#selected-region').text($(this).html());
	$('.continent-dropdown-menu').css("height", "0");
});