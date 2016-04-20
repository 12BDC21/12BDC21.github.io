$(document).ready(function(){

	$("#container-mix").mixItUp({
		animation: {
		duration: 0,
		effects: '',
		easing: 'ease'
	}
	});

	$(".sect-portfolio li").click(function(){
		$(".sect-portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup-link").magnificPopup({type:"inline", midClick: true, closeOnContentClick: true});

	$('.popup-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});


  $(".owl-carousel").owlCarousel({
  	loop:true,
    nav:true,
    items:1,
    navText:""
  });

  $(".wrap-carousel").owlCarousel({
  	loop:true,
    nav:true,
    items:1,
    navText:""
  });



  $(".toggle-mnu").click(function() {
   $(this).toggleClass("on");
   $(".top-nav").slideToggle();
	});

});

