jQuery(document).ready(function($) {

	jQuery('.breadcrumb-trail a').each(function(){
	   var stripped = jQuery(this).attr("href").replace(/\/blog/g, '');
		console.log( "before:" + stripped);
		jQuery(this).attr("href", stripped);
		console.log( "after:" + jQuery(this).attr("href"));
		if(jQuery(this).attr("href") == "http://bxvc/press-releases/"){
			jQuery(this).attr("href", "http://bxvc/press-center");
		}
	});
	
	//if (jQuery("body.left-column").length < 1){
	//jQuery('.listnodes a').each(function(){
	//var originx= jQuery(window.location).attr("origin");
	//var linkurl = jQuery(this).attr("href");
	//jQuery(this).attr("href", originx + "/member-organizations/" + linkurl);
  //});
	//}
	

		

	if(jQuery(".page-template-member-organizations").length){//test if template exists then execute code
		jQuery(".listnodes a").click(function() {
			var elem = jQuery(this).attr("href").split("#");
			elem = elem[1];
			//console.log(elem);
		    if(elem) {
		         jQuery.scrollTo('a[name="'+elem+'"]',800);
		    }
		});	
	
		function sticky_relocate() {
		  var window_top = jQuery(window).scrollTop();
		  var div_top = jQuery('#sticky-anchor').offset().top;
		  if (window_top > div_top)
		    jQuery('#sticky').addClass('stick')
		  else
		    jQuery('#sticky').removeClass('stick');
		  }
	
		jQuery(function() {
		  jQuery(window).scroll(sticky_relocate);
			sticky_relocate();
		});
	}
	

	
	
});