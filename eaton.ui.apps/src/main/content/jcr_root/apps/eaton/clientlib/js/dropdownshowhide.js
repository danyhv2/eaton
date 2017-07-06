/**
 * Extension to the standard dropdown/select component. It enabled hidding/unhidding of multiple dialog fields based on the
 * selection made in the dropdown/select or on checkbox check. Additionally supports hiding of tabs if property set on tab
 * or all dialog fields on tab are hidden
 *
 * How to use:
 *
 * - add the class cq-dialog-dropdown-showhide to the dropdown/select element
 * - add the data attribute cq-dialog-dropdown-showhide-target to the dropdown/select element, value should be the
 *   selector, usually a specific class name, to find all possible target elements that can be shown/hidden.
 * - add the target class to each target component that can be shown/hidden
 * - add the class hidden to each target component to make them initially hidden
 * - add the attribute showhidetargetvalue to each target component, the value should equal the value of the select
 *   option that will unhide this element.
 */
(function(document, $) {
    "use strict";

    // when dialog gets injected
    $(document).on("foundation-contentloaded", function(e) {
        // if there is already an inital value make sure the according target element becomes visible
        showHide($(".cq-dialog-dropdown-showhide, .cq-dialog-checkbox-showhide", e.target));
    });

    $(document).on("selected", ".cq-dialog-dropdown-showhide", function(e) {
        showHide($(this));
    });

    $(document).on("change", ".cq-dialog-checkbox-showhide", function(e) {
        showHide($(this));
    });
    
    $(document).on("change", ".ttil-list-hide-show", function(e) {
        showHide($(this));
    });
        

   function showHide(el){

       el.each(function(i, element) {

           var target,
               value;
           var selection = $(element).data("select");

           if (selection) {
               target = $(element).data("cqDialogDropdownShowhideTarget");
               value = selection.getValue();

           }
           else {
               target = $(element).data("cqDialogCheckboxShowhideTarget");
               var name = $(element).attr('name');
               if (name !== undefined && name.length > 2) {
                   value = name.substring(2);
               }

           }

           if (target) {

               //hide target fields and tabs (except first tab)
               $(target).each(function() {
                   var $tabsContent = $(this).closest('.coral-TabPanel-pane'),
                       $tabsContents = $tabsContent.parent().find('.coral-TabPanel-pane'),
                       tabIndex = $tabsContents.index($tabsContent[0]),
                       $tabs = $(this).closest('.coral-TabPanel').find('.coral-TabPanel-navigation > .coral-TabPanel-tab');
                   if (tabIndex > 0) {
                       $tabs.eq(tabIndex).addClass('hide');
                   }
                   $(this).addClass('hide');    
                   $(this).parent().children('label').addClass('hide');
                   $(this).parent().children('ul').addClass('hide');
                   $(this).parent().children('[data-init="quicktip"]').addClass('hide');
                   $(this).parent().children('coral-icon').addClass('hide');
                   if(($(this).attr('data-init')== "pathbrowser") && $(this).hasClass("hide") && $(this).children().children('input').attr('aria-required')){
						$(this).parent().children().children().children('input').removeAttr('aria-required');
                       $(this).parent().children().children().children('input').attr("data-required", "added");
                   }
                   if($(this).parent().children('input').attr('aria-required')) {
						$(this).parent().children('input').removeAttr('aria-required');
                        $(this).parent().children('input').attr("data-required", "added");

                   } 
                   if($(this).attr('type') == 'checkbox') {
					  $(this).parent().parent().addClass('hide'); 
                   }

               });
               //unhide proper fields
               $(target).each(function() {
                   var $this = $(this),
                       showHideTarget = $this.data('showhidetargetvalue') || $this.find('[data-showhidetargetvalue]').data('showhidetargetvalue'),
                       showOnChecked = $this.data('showonchecked'),
                       checked = $(element).prop('checked');
                   if (showOnChecked === undefined) {
                       showOnChecked = $this.find('[data-showonchecked]').data('showonchecked');
                   }
                   var checkboxCondition = checked === undefined || (checked && showOnChecked) || (checked && showOnChecked === undefined) || (!checked && showOnChecked == false);

				   var showHideTargetArray = showHideTarget.split(',');
				   for (var i = 0; i < showHideTargetArray.length; i++) {
                       if(showHideTargetArray[i] == value){
                   if (showHideTarget !== undefined  && checkboxCondition) {
                       var $tabsContent = $(this).closest('.coral-TabPanel-pane'),
                           $tabsContents = $tabsContent.parent().find('.coral-TabPanel-pane'),
                           tabIndex = $tabsContents.index($tabsContent[0]),
                           $tabs = $(this).closest('.coral-TabPanel').find('.coral-TabPanel-navigation > .coral-TabPanel-tab');
                       $tabs.eq(tabIndex).removeClass('hide');
                       if($(this).parent().children('input').attr('data-required')){
                            $(this).parent().children('input').attr("aria-required","true");
                       }
                       $(this).removeClass('hide');
                       $(this).parent().children('label').removeClass('hide');
                       $(this).parent().children('ul').removeClass('hide');
                       $(this).parent().children('[data-init="quicktip"]').removeClass('hide');
					   //$(this).parent().children('input').attr("aria-required","true");
                       if( !$(this).hasClass("hide") && ($(this).attr('data-init')== "pathbrowser") && !$(this).hasClass("js-cq-TagsPickerField") && $(this).parent().children().children().children('input').attr('data-required')){
						$(this).parent().children().children().children('input').attr("aria-required","true");
                   	   }
                       if($(this).attr('type') == 'checkbox') {
						  $(this).parent().parent().removeClass('hide'); 
                   	   }
                   }

                       }
                   }

               });
           }
       })
   }

})(document,Granite.$);
