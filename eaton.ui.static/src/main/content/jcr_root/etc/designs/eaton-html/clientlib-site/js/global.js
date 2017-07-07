function openSearchResultsTab(e,tabName){
	console.log("openSearchResultsTab:: "+tabName);
	
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("search-results-tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("search-results-tabs-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" search-tab-active", "");
    }    
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " search-tab-active"; 
       
}
try{
document.getElementById("search-tab-AllResults-link").click();
}
catch(error)
{
	
}