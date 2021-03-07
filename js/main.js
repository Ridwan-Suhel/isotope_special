$(document).ready(function(){
 
    //	isotope start
	var $grid = $('.gallery-active').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
});
	
	
	// filter items on button click
$('.button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
	

//for menu active class
$('.button-group ul li').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

	
/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
	
    
    
    
    
	
	
})