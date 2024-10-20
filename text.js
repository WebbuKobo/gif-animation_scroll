$(window).on('load scroll',function(){
	var scr_count = $(document).scrollTop();
	
	$('ul li').each(function(i){
		let scr_li = $(this).offset().top;
		
		
		if(scr_count>$('ul').offset().top + $('ul').height()-$(window).height()*4/3){
			$('ul').find('figure').removeClass('fixed');
		}else if(scr_count>scr_li-$(window).height()*2/3 && scr_count<scr_li+$(window).height()/3){
			$(this).find('img').fadeIn('fast');
			$(this).find('figure').addClass('fixed');
		}else{
			$(this).find('img').fadeOut('fast');
		}
	});
});
