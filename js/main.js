jQuery(document).ready(
	function(){
		jQuery('.flexslider').flexslider({
			after: function(){
				jQuery('.news article').hide();
				var news_index = jQuery('.flexslider .flex-active-slide').data('newsId');
				var item = jQuery('.news article').get(news_index);
				jQuery(item).show();
			}
		});	

		jQuery('.flexslider-sidebar').flexslider();	
	}
);