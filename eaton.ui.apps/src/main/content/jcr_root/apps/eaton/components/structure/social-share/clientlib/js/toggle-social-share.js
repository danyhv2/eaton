$(document).ready(function(){

    var showSharePanel = false
//$(".at4-share").hide();

    	$("#shareThisIcon").click(function(){
            if(showSharePanel == false){
                $(".at4-share").show();
                showSharePanel = true;
            } else if(showSharePanel == true){
                $(".at4-share").hide();
			 showSharePanel = false;
            }
            });

 });



