
$(document).ready(function(){
    setTimeout(function(){
      $('.slide-pro').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        dots: false,
        asNavFor: '.slide-thumb'
      });

      $('.slide-thumb').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slide-pro',
        autoplay: false,
        dots: false,
        centerMode: true,
        infinite: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true

      });
    }, 2000);

  });

  $(document).ready(function() {

 $('.elevate-zoom').elevateZoom({
       zoomType: 'inner',
    cursor: 'crosshair'
      });

 $('.slide-pro').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var img = $(slick.$slides[nextSlide]).find("img");
      $('.zoomWindowContainer,.zoomContainer').remove();
      $(img).elevateZoom({
        zoomType: 'inner',
		zoomWindowFadeIn	: 500,
		zoomWindowFadeOut	: 500,
        cursor: 'crosshair'
      });
    }); 

    $(".slide-pro .slick-active .elevate-zoom").elevateZoom({
      zoomType: 'inner',
	  zoomWindowFadeIn	: 500,
	  zoomWindowFadeOut	: 500,
//       scrollZoom: true,
//   	  zoomLevel: 1.1,
      cursor: 'crosshair'
    });
      });
