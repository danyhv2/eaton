
$( window ).on( "load", function() {
    if(window.location.pathname.includes("index") && localStorage.getItem('eaton_CountryName') != null && localStorage.getItem('eaton_languageName') ){
		localStorage.removeItem("eaton_CountryNameOverlay");
        localStorage.removeItem("eaton_languageNameOverlay");
    }

    if ( localStorage.getItem('eaton_CountryNameOverlay') != null && localStorage.getItem('eaton_languageNameOverlay') != null ){
		$('#selected-region').text(localStorage.getItem('eaton_CountryNameOverlay') + "/" + localStorage.getItem('eaton_languageNameOverlay'));
        $('#selectRegion > a').text(localStorage.getItem('eaton_CountryNameOverlay') + "/" + localStorage.getItem('eaton_languageNameOverlay'))
    }
    else if ( localStorage.getItem('eaton_CountryName') != null && localStorage.getItem('eaton_languageName') != null ){
		$('#selected-region').text(localStorage.getItem('eaton_CountryName') + "/" + localStorage.getItem('eaton_languageName'));
       	$('#selectRegion > a').text(localStorage.getItem('eaton_CountryName') + "/" + localStorage.getItem('eaton_languageName'));
    }

  
	if($('*[data-countryview="index"]').length > 0){

		if(localStorage.getItem('eaton_languageCode') != undefined && localStorage.getItem('eaton_countryCode') != undefined){
			var languageCode = localStorage.getItem('eaton_languageCode');
			var countryCode = localStorage.getItem('eaton_countryCode');
            var pathName = window.location.pathname;
            var contextPath = pathName.substring(0,pathName.lastIndexOf("/"));
            if(window.location.port != 0 && window.location.port != "" && window.location.port != null){
            	var redirectUrl = window.location.protocol +"//" + window.location.hostname +":" + window.location.port + contextPath +"/" + countryCode +"/" + languageCode +".html"
            }
            else {
                var redirectUrl = window.location.protocol + "//" + window.location.hostname + contextPath +"/" + countryCode +"/" + languageCode +".html"
            }
			$('head').append('<meta id="refreshRedirect" http-equiv="refresh" content="2;url='+ redirectUrl + '">');
		} 
	}
});

$('div.language>a').click(function(){
    if($('*[data-countryview="index"]').length > 0){
    	//$.cookie("CountryName", $(this).attr('data-countryName'), { path: '/' });
    	//$.cookie("languageName", $(this).html(), { path: '/' }); 
         localStorage.setItem("eaton_CountryName", $(this).attr('data-countryName'));
         localStorage.setItem("eaton_languageName",  $(this).text());

    }else {
		//$.cookie("CountryNameOverlay", $(this).attr('data-countryName'), { path: '/' });
    	//$.cookie("languageNameOverlay", $(this).html(), { path: '/' }); 
        localStorage.setItem("eaton_CountryNameOverlay", $(this).attr('data-countryName'));
         localStorage.setItem("eaton_languageNameOverlay",  $(this).text());


    }
	var path = $(this).attr('data-path');
	var pathValues = path.split('/');
	var languageCode = pathValues[pathValues.length-1];
	var countryCode = pathValues[pathValues.length-2];
	//$.cookie('eaton_languageCode', languageCode, { path: '/' });
	//$.cookie('eaton_countryCode', countryCode, { path: '/' });
    localStorage.setItem("eaton_countryCode", countryCode);
    localStorage.setItem("eaton_languageCode", languageCode);
    var pathName = window.location.pathname;
    var contextPath = pathName.substring(0,pathName.lastIndexOf("/"));
	 if(window.location.port != 0 && window.location.port != "" && window.location.port != null){
            	var redirectUrl = window.location.protocol +"//" + window.location.hostname +":" + window.location.port + contextPath +"/" + countryCode +"/" + languageCode +".html"
            }
            else {
                var redirectUrl = window.location.protocol + "//" + window.location.hostname + contextPath +"/" + countryCode +"/" + languageCode +".html"
            }
	$('head').append('<meta id="refreshRedirect" http-equiv="refresh" content="2;url='+ redirectUrl + '">');
    $('#selected-region').text($(this).html());
	$('.continent-dropdown-menu').css("height", "0");
});