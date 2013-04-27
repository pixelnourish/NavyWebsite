/*	------------------------------------
	Navy - Basic scripts
	------------------------------------
	Desc:		javascript
	File:		basic.js
	Version:	1.0
	Created:	April 13, 2013
	Author:		Kate Payton 
				@ www.pixelnourish.com
	------------------------------------	*/

jQuery(document).ready(function($) {
	
	// start bootstrap tabbed content
	// used on the case-studies page
	$('#case-tabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	})
	
	$('.pop-content').hide;
	
	$('a[rel=popover]')
		.popover({
			placement : 'top',
			trigger : 'click', // can also be 'hover'
			html : true, 
			content: function() {
				return $(this).next('.pop-content').html();
			}
		})
		// .addClass(newClass)
		.click(function(e) {
			e.preventDefault()
		})
	
});

jQuery(document).ready(function($) {
	
	$('.switch .switcher').click(function () {
		$(this).parent().toggleClass('off');
		$('#co_ipad-design').toggleClass('hide');
	});

});

