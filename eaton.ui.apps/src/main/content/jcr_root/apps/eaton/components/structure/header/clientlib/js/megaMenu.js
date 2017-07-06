var mobileDeviceWidth=600;
var tabletDeviceWidth=992;
var signupClick=false;
var currentMenu=null;
var currentClass=null;
var isFirstTime=true;
var checkEntry=new Array();

/*Since signup has no module associated with it for now slide of main menu has been disabled, if signup get clicked*/
$('.sign-up-container').on('click', function(){
	signupClick=true;
});

$('#megaMenuOption > li').on('click', function(e){
	e.preventDefault();
  	if(signupClick)
	{	
		signupClick=false;
        return;
    }




	console.log('class'+ $(this).attr('class'));
	currentClass='.megaMenu'+'.'+$(this).attr('data-menu');

	$('.megaMenu').css('display','none');
	$('body').css('overflow','hidden');

	$(currentClass).css('display','block');
	$('.'+$(this).attr('data-menu')).css('display','block');

	$(this).closest('ul').find('li').removeClass('active');

	if($(window).width()<=tabletDeviceWidth)
	{
		$('html').css('overflow-y', 'hidden');
		$('#bs-example-navbar-collapse-1').animate({left: "-100%"}, {duration: 500});
		$('.contentLoad').animate({right: "-100%"}, {duration: 0});
		$('.contentLoad').animate({right: "0"}, {duration: 500});
		// $('.headerMain').removeClass('headerBorder').css("border-bottom","0px");

	}	
	else
	{
		$(this).addClass('active');
	}	
	
	contentArrange();
    closeSearchBar();
	});

function contentArrange(){
	
	
	if(checkEntry.indexOf(currentClass)>-1)
	{
		return;
	}
	else
	{
		checkEntry.push(currentClass);
	}	

			var html='';
			var len= document.querySelectorAll(currentClass +' '+'.productList ul > li').length;
			console.log(currentClass +' ' +'.productList ul > li' +len);
    		if(len<1)
            {
				return;
            }    
			if(len<=40)
			{
				for(var i=0; i< len; i++)
				{
					html+= document.querySelectorAll(currentClass +' '+'.productList ul > li')[i].outerHTML;
					if(((i+1)%10==0) && (i>0))
					{
						$(currentClass +' '+ ' .listCntnt > .main').append('<div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12 productList"><ul class="list-group">'+html+'</ul></div>');
						html=''
					}
					else if((i+1)== len)
					{
						$(currentClass +' '+ '.listCntnt > .main').append('<div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12 productList"><ul class="list-group">'+html+'</ul></div>');
						html='';
						break;
					}
				}
			}
			else
			{	
				var colsize= (len-len%4)/4;
				console.log(len%4 +"-----"+ (len-len%4)/4)
				for(var i=0; i< len; i++)
				{
					html+= document.querySelectorAll(currentClass +' '+'.productList ul > li')[i].outerHTML;
					if(((i+1)%colsize==0) && (i>0))
					{
						$(currentClass +' '+' .listCntnt > .main').append('<div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12 productList"><ul class="list-group">'+html+'</ul></div>');
						html=''
					}
					else if((i+1)== len)
					{
						$(currentClass +' '+' .listCntnt > .main > div:last-Child > ul').append(html);
						html='';
						break;
					}
				}
			}
			
			$(currentClass + ' '+'.initial').remove();
			

}

$('.megaMenu .alignClose').on('click', function(){
	currentMenu=$(this).closest('.megaMenu').attr('class');
	$('.'+$(this).closest('.megaMenu').attr('class').split(' ').join('.')).css('display','none');
	$('#bs-example-navbar-collapse-1 li.active').removeClass('active');
	$('body').css('overflow-y','auto');
    /*if($(window).width()<tabletDeviceWidth)
	{
    	$('.headerMain').addClass('headerBorder').css("border-bottom","4px solid #eef0f2");
    }*/    
});

$('.megaMenu .header').on('click', function(){
	console.log('toggle menu');
	if($(window).width()<=tabletDeviceWidth)
	{
		$('#bs-example-navbar-collapse-1').animate({left: "0%"}, {duration: 500});
		$('.contentLoad').animate({right: "-100%"}, {duration: 500})
	}
});



function alignMegaMenu(){
    var newHeight=null;

	if($(window).width()<=tabletDeviceWidth)
	{
		newHeight=$(window).outerHeight()-$('#header-navigation-bar').outerHeight()-$('#utility-nav-mob').outerHeight()-$('.megaMenu .header').outerHeight();
        $('.megaMenu').css('margin-top',$('#header-navigation-bar').outerHeight())
         $('.megaMenu .listCntnt').css('height',newHeight-40);
	}  
	else
    {    
        newHeight=$(window).outerHeight()-$('#header-navigation-bar').outerHeight()-$('#utility-nav').outerHeight()-$('.megaMenu .header').outerHeight();
    	$('.megaMenu .listCntnt').css('height',newHeight-50);
    }    
}

function closeSearchBar(){
    	 $('#main-search-input').css("height", "0");
		  $('.search-btn').css("display", "block");
		  $('.close-search-btn').css("display", "none");
   		 $('#main-search-bar').css({'position' : 'absolute', 'top' : '4px'});

         $('.headerBorder').css("border-bottom","4px solid #eef0f2");
         $('.search-bar').removeClass("searchFixed showSearchBar");
         $('.search-bar').addClass("hideSearchBar");
}

$( window ).resize(function() {
    alignMegaMenu();
});

alignMegaMenu();