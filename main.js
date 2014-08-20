//main
$( function(){
	anchorLink();
	tabsControl();
	
});

function anchorLink(){
  $('.anchorlink').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top 
		}, 400);
	return false;
  });   
}
function tabsControl() {
	var menuButton = $('#menuButton');
	var contactUsButton = $('#contactButton');
	$(menuButton).click( function(){
			var menuDivs = $('div.menu-content').hide();
			var container = $("#menuPane").find('div.menu-content');
	
				$(container).slideToggle();
	});
	$(contactUsButton).click( function(){
		var menuDivs = $('div.menu-content').hide();
		var container = $("#contactPane").find('div.menu-content');
	
			$(container).slideToggle();
	});
}

