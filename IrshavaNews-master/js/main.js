$(document).ready(function(){
	$('#currency').styler();

	// =========================================================
	// PREVIOUS SLIDE
	// =========================================================
	$('.prev-slide').click(function(e){
		$(this).parent().parent().parent().find('.flexslider').flexslider('prev');		
		e.preventDefault();
	});
	// =========================================================
	// NEXT SLIDE
	// =========================================================
	$('.next-slide').click(function(e){
		$(this).parent().parent().parent().find('.flexslider').flexslider('next');
		e.preventDefault();
	});

	// =========================================================
	// TAB CLICK
	// =========================================================
	$('.blcok-tabs .links li a').click(function(e){
		var show_block = $(this).data('id');
		
		$('.blcok-tabs .links li a').each(function(){ $(this).removeClass('active') });
		$(this).addClass('active');

		$('.blcok-tabs .tabs li').each(function(){ $(this).removeClass('show') });
		$(show_block).addClass('show');

		e.preventDefault();
	});
});

$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: false,
		after: function(slider) {
			console.log(slider.currentSlide + '/' + slider.count);
			$(slider.context).parent().find('.flexslider-status').text((slider.currentSlide+1) + '/' + slider.count);
    	}
	});
});