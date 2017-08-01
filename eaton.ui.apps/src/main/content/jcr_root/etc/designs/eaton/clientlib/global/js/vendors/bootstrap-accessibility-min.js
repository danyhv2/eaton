/*! bootstrap-accessibility-plugin - v1.0.5 - 2016-07-19
 * https://github.com/paypal/bootstrap-accessibility-plugin
 * Copyright (c) 2016 PayPal Accessibility Team; Licensed BSD */
!function($){"use strict";var uniqueId=function(prefix){return(prefix||"ui-id")+"-"+Math.floor(1e3*Math.random()+1)},focusable=function(element,isTabIndexNotNaN){var map,mapName,img,nodeName=element.nodeName.toLowerCase();return"area"===nodeName?(map=element.parentNode,mapName=map.name,element.href&&mapName&&"map"===map.nodeName.toLowerCase()?(img=$("img[usemap='#"+mapName+"']")[0],!!img&&visible(img)):!1):(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element)},visible=function(element){return $.expr.filters.visible(element)&&!$(element).parents().addBack().filter(function(){return"hidden"===$.css(this,"visibility")}).length};$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName)}}):function(elem,i,match){return!!$.data(elem,match[3])},focusable:function(element){return focusable(element,!isNaN($.attr(element,"tabindex")))},tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN)}}),$(".modal-dialog").attr({role:"document"});var modalhide=$.fn.modal.Constructor.prototype.hide;$.fn.modal.Constructor.prototype.hide=function(){modalhide.apply(this,arguments),$(document).off("keydown.bs.modal")};var modalfocus=$.fn.modal.Constructor.prototype.enforceFocus;$.fn.modal.Constructor.prototype.enforceFocus=function(){var $content=this.$element.find(".modal-content"),focEls=$content.find(":tabbable"),$lastEl=$(focEls[focEls.length-1]),$firstEl=$(focEls[0]);$lastEl.on("keydown.bs.modal",$.proxy(function(ev){9!==ev.keyCode||ev.shiftKey|ev.ctrlKey|ev.metaKey|ev.altKey||(ev.preventDefault(),$firstEl.focus())},this)),$firstEl.on("keydown.bs.modal",$.proxy(function(ev){9===ev.keyCode&&ev.shiftKey&&(ev.preventDefault(),$lastEl.focus())},this)),modalfocus.apply(this,arguments)};var $par,firstItem,toggle="[data-toggle=dropdown]",focusDelay=200,menus=$(toggle).parent().find("ul").attr("role","menu"),lis=menus.find("li").attr("role","presentation");lis.find("a").attr({role:"menuitem",tabIndex:"-1"}),$(toggle).attr({"aria-haspopup":"true","aria-expanded":"false"}),$(toggle).parent().on("shown.bs.dropdown",function(e){$par=$(this);var $toggle=$par.find(toggle);$toggle.attr("aria-expanded","true"),$toggle.on("keydown.bs.dropdown",$.proxy(function(ev){setTimeout(function(){firstItem=$(".dropdown-menu [role=menuitem]:visible",$par)[0];try{firstItem.focus()}catch(ex){}},focusDelay)},this))}).on("hidden.bs.dropdown",function(e){$par=$(this);var $toggle=$par.find(toggle);$toggle.attr("aria-expanded","false")}),$(document).on("focusout.dropdown.data-api",".dropdown-menu",function(e){var $this=$(this),that=this;$this.parent().hasClass("open")&&setTimeout(function(){$.contains(that,document.activeElement)||$this.parent().find("[data-toggle=dropdown]").dropdown("toggle")},150)}).on("keydown.bs.dropdown.data-api",toggle+", [role=menu]",$.fn.dropdown.Constructor.prototype.keydown);var $tablist=$(".nav-tabs, .nav-pills"),$lis=$tablist.children("li"),$tabs=$tablist.find('[data-toggle="tab"], [data-toggle="pill"]');$tabs&&($tablist.attr("role","tablist"),$lis.attr("role","presentation"),$tabs.attr("role","tab")),$tabs.each(function(index){var tabpanel=$($(this).attr("href")),tab=$(this),tabid=tab.attr("id")||uniqueId("ui-tab");tab.attr("id",tabid),tab.parent().hasClass("active")?(tab.attr({tabIndex:"0","aria-selected":"true","aria-controls":tab.attr("href").substr(1)}),tabpanel.attr({role:"tabpanel",tabIndex:"0","aria-hidden":"false","aria-labelledby":tabid})):(tab.attr({tabIndex:"-1","aria-selected":"false","aria-controls":tab.attr("href").substr(1)}),tabpanel.attr({role:"tabpanel",tabIndex:"-1","aria-hidden":"true","aria-labelledby":tabid}))}),$.fn.tab.Constructor.prototype.keydown=function(e){var $items,index,$this=$(this),$ul=$this.closest("ul[role=tablist] "),k=e.which||e.keyCode;if($this=$(this),/(37|38|39|40)/.test(k)){$items=$ul.find("[role=tab]:visible"),index=$items.index($items.filter(":focus")),(38==k||37==k)&&index--,(39==k||40==k)&&index++,0>index&&(index=$items.length-1),index==$items.length&&(index=0);var nextTab=$items.eq(index);"tab"===nextTab.attr("role")&&nextTab.tab("show").focus(),e.preventDefault(),e.stopPropagation()}},$(document).on("keydown.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',$.fn.tab.Constructor.prototype.keydown);var tabactivate=$.fn.tab.Constructor.prototype.activate;$.fn.tab.Constructor.prototype.activate=function(element,container,callback){var $active=container.find("> .active");$active.find("[data-toggle=tab], [data-toggle=pill]").attr({tabIndex:"-1","aria-selected":!1}),$active.filter(".tab-pane").attr({"aria-hidden":!0,tabIndex:"-1"}),tabactivate.apply(this,arguments),element.addClass("active"),element.find("[data-toggle=tab], [data-toggle=pill]").attr({tabIndex:"0","aria-selected":!0}),element.filter(".tab-pane").attr({"aria-hidden":!1,tabIndex:"0"})};var $colltabs=$('[data-toggle="collapse"]');$colltabs.each(function(index){var colltab=$(this),collpanel=$(colltab.attr("data-target")?colltab.attr("data-target"):colltab.attr("href")),parent=colltab.attr("data-parent"),collparent=parent&&$(parent),collid=colltab.attr("id")||uniqueId("ui-collapse");colltab.attr("id",collid),collparent&&(colltab.attr({role:"tab","aria-selected":"false","aria-expanded":"false"}),$(collparent).find("div:not(.collapse,.panel-body), h4").attr("role","presentation"),collparent.attr({role:"tablist","aria-multiselectable":"true"}),collpanel.hasClass("in")?(colltab.attr({"aria-controls":collpanel.attr("id"),"aria-selected":"true","aria-expanded":"true",tabindex:"0"}),collpanel.attr({role:"tabpanel",tabindex:"0","aria-labelledby":collid,"aria-hidden":"false"})):(colltab.attr({"aria-controls":collpanel.attr("id"),tabindex:"-1"}),collpanel.attr({role:"tabpanel",tabindex:"-1","aria-labelledby":collid,"aria-hidden":"true"})))});var collToggle=$.fn.collapse.Constructor.prototype.toggle;$.fn.collapse.Constructor.prototype.toggle=function(){var href,prevTab=this.$parent&&this.$parent.find('[aria-expanded="true"]');if(prevTab){var curTab,prevPanel=prevTab.attr("data-target")||(href=prevTab.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,""),$prevPanel=$(prevPanel),$curPanel=this.$element;this.$parent;this.$parent&&(curTab=this.$parent.find('[data-toggle=collapse][href="#'+this.$element.attr("id")+'"]')),collToggle.apply(this,arguments),$.support.transition&&this.$element.one($.support.transition.end,function(){prevTab.attr({"aria-selected":"false","aria-expanded":"false",tabIndex:"-1"}),$prevPanel.attr({"aria-hidden":"true",tabIndex:"-1"}),curTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:"0"}),$curPanel.hasClass("in")?$curPanel.attr({"aria-hidden":"false",tabIndex:"0"}):(curTab.attr({"aria-selected":"false","aria-expanded":"false"}),$curPanel.attr({"aria-hidden":"true",tabIndex:"-1"}))})}else collToggle.apply(this,arguments)},$.fn.collapse.Constructor.prototype.keydown=function(e){var $items,index,$this=$(this),$tablist=$this.closest("div[role=tablist] "),k=e.which||e.keyCode;$this=$(this),/(32|37|38|39|40)/.test(k)&&(32==k&&$this.click(),$items=$tablist.find("[role=tab]"),index=$items.index($items.filter(":focus")),(38==k||37==k)&&index--,(39==k||40==k)&&index++,0>index&&(index=$items.length-1),index==$items.length&&(index=0),$items.eq(index).focus(),e.preventDefault(),e.stopPropagation())},$(document).on("keydown.collapse.data-api",'[data-toggle="collapse"]',$.fn.collapse.Constructor.prototype.keydown),$(".carousel").each(function(index){function setTablistHighlightBox(){var $tab,offset,height,width,highlightBox={};highlightBox.top=0,highlightBox.left=32e3,highlightBox.height=0,highlightBox.width=0;for(var i=0;i<$tabs.length;i++){$tab=$tabs[i],offset=$($tab).offset(),height=$($tab).height(),width=$($tab).width(),highlightBox.top<offset.top&&(highlightBox.top=Math.round(offset.top)),highlightBox.height<height&&(highlightBox.height=Math.round(height)),highlightBox.left>offset.left&&(highlightBox.left=Math.round(offset.left));var w=offset.left-highlightBox.left+Math.round(width);highlightBox.width<w&&(highlightBox.width=w)}$tablistHighlight.style.top=highlightBox.top-2+"px",$tablistHighlight.style.left=highlightBox.left-2+"px",$tablistHighlight.style.height=highlightBox.height+7+"px",$tablistHighlight.style.width=highlightBox.width+8+"px"}var $tabpanel,$tablistHighlight,$pauseCarousel,$complementaryLandmark,$tab,i,$this=$(this),$prev=$this.find('[data-slide="prev"]'),$next=$this.find('[data-slide="next"]'),$tablist=$this.find(".carousel-indicators"),$tabs=$this.find(".carousel-indicators li"),$tabpanels=$this.find(".item"),$is_paused=!1,id_title="id_title",id_desc="id_desc";for($tablist.attr("role","tablist"),$tabs.focus(function(){$this.carousel("pause"),$is_paused=!0,$pauseCarousel.innerHTML="Play Carousel",$(this).parent().addClass("active"),setTablistHighlightBox(),$($tablistHighlight).addClass("focus"),$(this).parents(".carousel").addClass("contrast")}),$tabs.blur(function(event){$(this).parent().removeClass("active"),$($tablistHighlight).removeClass("focus"),$(this).parents(".carousel").removeClass("contrast")}),i=0;i<$tabpanels.length;i++)$tabpanel=$tabpanels[i],$tabpanel.setAttribute("role","tabpanel"),$tabpanel.setAttribute("id","tabpanel-"+index+"-"+i),$tabpanel.setAttribute("aria-labelledby","tab-"+index+"-"+i);for("string"!=typeof $this.attr("role")&&($this.attr("role","complementary"),$this.attr("aria-labelledby",id_title),$this.attr("aria-describedby",id_desc),$this.prepend('<p  id="'+id_desc+'" class="sr-only">A carousel is a rotating set of images, rotation stops on keyboard focus on carousel tab controls or hovering the mouse pointer over images.  Use the tabs or the previous and next buttons to change the displayed slide.</p>'),$this.prepend('<h2 id="'+id_title+'" class="sr-only">Carousel content with '+$tabpanels.length+" slides.</h2>")),i=0;i<$tabs.length;i++){$tab=$tabs[i],$tab.setAttribute("role","tab"),$tab.setAttribute("id","tab-"+index+"-"+i),$tab.setAttribute("aria-controls","tabpanel-"+index+"-"+i);var tpId="#tabpanel-"+index+"-"+i,caption=$this.find(tpId).find("h1").text();("string"!=typeof caption||0===caption.length)&&(caption=$this.find(tpId).text()),("string"!=typeof caption||0===caption.length)&&(caption=$this.find(tpId).find("h3").text()),("string"!=typeof caption||0===caption.length)&&(caption=$this.find(tpId).find("h4").text()),("string"!=typeof caption||0===caption.length)&&(caption=$this.find(tpId).find("h5").text()),("string"!=typeof caption||0===caption.length)&&(caption=$this.find(tpId).find("h6").text()),("string"!=typeof caption||0===caption.length)&&(caption="no title");var tabName=document.createElement("span");tabName.setAttribute("class","sr-only"),tabName.innerHTML="Slide "+(i+1),caption&&(tabName.innerHTML+=": "+caption),$tab.appendChild(tabName)}$tablistHighlight=document.createElement("div"),$tablistHighlight.className="carousel-tablist-highlight",document.body.appendChild($tablistHighlight),$complementaryLandmark=document.createElement("aside"),$complementaryLandmark.setAttribute("class","carousel-aside-pause"),$complementaryLandmark.setAttribute("aria-label","carousel pause/play control"),$this.prepend($complementaryLandmark),$pauseCarousel=document.createElement("button"),$pauseCarousel.className="carousel-pause-button",$pauseCarousel.innerHTML="Pause Carousel",$pauseCarousel.setAttribute("title","Pause/Play carousel button can be used by screen reader users to stop carousel animations"),$($complementaryLandmark).append($pauseCarousel),$($pauseCarousel).click(function(){$is_paused?($pauseCarousel.innerHTML="Pause Carousel",$this.carousel("cycle"),$is_paused=!1):($pauseCarousel.innerHTML="Play Carousel",$this.carousel("pause"),$is_paused=!0)}),$($pauseCarousel).focus(function(){$(this).addClass("focus")}),$($pauseCarousel).blur(function(){$(this).removeClass("focus")}),setTablistHighlightBox(),$(window).resize(function(){setTablistHighlightBox()}),$prev.attr("aria-label","Previous Slide"),$prev.keydown(function(e){var k=e.which||e.keyCode;/(13|32)/.test(k)&&(e.preventDefault(),e.stopPropagation(),$prev.trigger("click"))}),$prev.focus(function(){$(this).parents(".carousel").addClass("contrast")}),$prev.blur(function(){$(this).parents(".carousel").removeClass("contrast")}),$next.attr("aria-label","Next Slide"),$next.keydown(function(e){var k=e.which||e.keyCode;/(13|32)/.test(k)&&(e.preventDefault(),e.stopPropagation(),$next.trigger("click"))}),$next.focus(function(){$(this).parents(".carousel").addClass("contrast")}),$next.blur(function(){$(this).parents(".carousel").removeClass("contrast")}),$(".carousel-inner a").focus(function(){$(this).parents(".carousel").addClass("contrast")}),$(".carousel-inner a").blur(function(){$(this).parents(".carousel").removeClass("contrast")}),$tabs.each(function(){var item=$(this);item.hasClass("active")?item.attr({"aria-selected":"true",tabindex:"0"}):item.attr({"aria-selected":"false",tabindex:"-1"})})});var slideCarousel=$.fn.carousel.Constructor.prototype.slide;$.fn.carousel.Constructor.prototype.slide=function(type,next){var $id,$element=this.$element,$active=$element.find("[role=tabpanel].active"),$next=next||$active[type](),$tab_count=$element.find("[role=tabpanel]").size(),$prev_side=$element.find('[data-slide="prev"]'),$next_side=$element.find('[data-slide="next"]'),$index=0,$prev_index=$tab_count-1,$next_index=1;$next&&$next.attr("id")&&($id=$next.attr("id"),$index=$id.lastIndexOf("-"),$index>=0&&($index=parseInt($id.substring($index+1),10)),$prev_index=$index-1,1>$prev_index&&($prev_index=$tab_count-1),$next_index=$index+1,$next_index>=$tab_count&&($next_index=0)),$prev_side.attr("aria-label","Show slide "+($prev_index+1)+" of "+$tab_count),$next_side.attr("aria-label","Show slide "+($next_index+1)+" of "+$tab_count),slideCarousel.apply(this,arguments),$active.one("bsTransitionEnd",function(){var $tab;$tab=$element.find('li[aria-controls="'+$active.attr("id")+'"]'),$tab&&$tab.attr({"aria-selected":!1,tabIndex:"-1"}),$tab=$element.find('li[aria-controls="'+$next.attr("id")+'"]'),$tab&&$tab.attr({"aria-selected":!0,tabIndex:"0"})})};var $this;$.fn.carousel.Constructor.prototype.keydown=function(e){function selectTab(index){index>=$tabs.length||0>index||($carousel.carousel(index),setTimeout(function(){$tabs[index].focus()},150))}$this=$this||$(this),this instanceof Node&&($this=$(this));var index,$carousel=$(e.target).closest(".carousel"),$tabs=$carousel.find("[role=tab]"),k=e.which||e.keyCode;/(37|38|39|40)/.test(k)&&(index=$tabs.index($tabs.filter(".active")),(37==k||38==k)&&(index--,selectTab(index)),(39==k||40==k)&&(index++,selectTab(index)),e.preventDefault(),e.stopPropagation())},$(document).on("keydown.carousel.data-api","li[role=tab]",$.fn.carousel.Constructor.prototype.keydown)}(jQuery);