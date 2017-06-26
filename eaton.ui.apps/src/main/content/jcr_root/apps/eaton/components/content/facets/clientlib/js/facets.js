var checkBox=0;
var count=0;

$(document).ready(function(){
   $(".expand").click(function(){

    $(this).next().next().toggle();	
$(this).html('+');
       if($(this).html()=='+')
       {
$(this).html('-');
       }

	});

	$(".filter-button").click(function(){
	$(".dekstop-view-wrapper").show();
	$(".mob-view-filter-wraper").hide();
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
	  console.log(checkBox);
	});
	
	//////////////////////////////
	$(".filter-button").click(function(){
	$(".hidden-content").hide();
	});
	
	
	$(".apply").click(function(){
	$(".hidden-content").show();
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