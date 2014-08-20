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
	var menuContainer = $('#menu');
	var container = $('.js-toggleContent');
	var trigger = $('.js-toggle');
	// var closeIt = $('<button class="close" type="button">&times;</button>');

	trigger.on('click', function(){
		menuContainer.addClass('open');
		// menuContainer.prepend(closeIt);
		container.addClass('js-hide');
		trigger.removeClass('active');
		$(this).toggleClass('active').parent().find(container).toggleClass('js-hide');

	});

	$('.close').on('click', function(){
		container.addClass('js-hide');
		menuContainer.removeClass('open');
	});
}