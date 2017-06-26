var checkBox=0;
var count=0;

$(document).ready(function(){


    $("span.custom-uncheck").on("click", function(e){
		//$(e.target).removeClass("custom-uncheck").toggleClass("custom-check");
        $(e.target).closest("li").find("span.custom-uncheck").hide();
        $(e.target).closest("li").find("span.custom-check").show();
        $(e.target).closest("li").find("input[type='checkbox']").click();
    });

    $("span.custom-check").on("click", function(e){
		//$(e.target).removeClass("custom-check").toggleClass("custom-uncheck");
        $(e.target).closest("li").find("span.custom-check").hide();
        $(e.target).closest("li").find("span.custom-uncheck").show();
        $(e.target).closest("li").find("input[type='checkbox']").click();
    });

    //mobile view filter overlay open/close
	$('.overlayPage a.closebtn').click(function(){        
        $(".mobileFilterButtons").css("position","relative");
        $(".filterNavHeader").css("position","static");
	 document.getElementById("filterNav").style.height = "0%";	
	});
	$(".filter-button").click(function(){	
        window.scrollTo(0, 0);
        $(".mobileFilterButtons").css("position","fixed");
        $(".filterNavHeader").css("position","fixed");
        var filterheaderheight = $(".filterNavHeader").outerHeight();
        $('.overlay-content-Page').css("margin-top", filterheaderheight);
		$("#filterNav").height("100%");
	});

    $("#applyFilters").click(function(){
   		$(".mobileFilterButtons").css("position","relative");
        $(".filterNavHeader").css("position","static");
	 	document.getElementById("filterNav").style.height = "0%";	
    });


   $(".filter-collapse").click(function(e){
       if ($(e.target).hasClass("expand")){
           $(this).find(".collapse").show();
           $(this).find(".expand").hide();
       }
       else{
           $(this).find(".expand").show();
           $(this).find(".collapse").hide();
	       }
		$(this).next().next().toggle();	
	});

	$(".apply").click(function(){
	$(".mob-view-filter-wraper").show();
	$(".dekstop-view-wrapper").hide();
	});

	$(".check-box").change(function(){
	  if($(this).is(":checked")) {
	  count++;
	  checkBox++;
	  }
	  else{
	  if(checkBox > 0){
	 checkBox--;
	 }
	  }
	  
	$(".filter-count").text(checkBox);
	//  console.log(checkBox);
	});

	$(".filter-labels").children("label").children("span").click(function(){
	$(this).parent().hide();
	});

	$(".clear-filters_").click(function(){
	checkBox=0;
	count=0;
	$(".filter-count").text(checkBox);
	$(".check-box").prop('checked', false);
	$( ".filter-labels" ).empty();
	});
	
	
});