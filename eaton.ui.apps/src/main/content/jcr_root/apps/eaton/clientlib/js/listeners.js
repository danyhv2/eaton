var enablePreviewRefresh = function() { 
	$('iframe').bind("load",function(){
			$(document).on("click", ".js-editor-LayerSwitcherTrigger", function () {
				location.reload();
			});
	});
};

$(document).ready(function() {
	//refresh page while shifting between Edit and Preview Mode
	enablePreviewRefresh();
});