$.fn.basicResponsiveMenu = function(options) {

  var defaults = {
    browserWidth:     768,
    animate:          true,
		slideDir:					'right',
		slideSpeed:				250
  };

	var options = $.extend({}, defaults, options);

	//var browserWidth = options.browserWidth;
	//var slideDir = options.slideDir;

  if(options.slideDir === 'left'){
  	$('.response--main-navigation').addClass('slideLeft').removeClass('slideRight');
  }else {
  	$('.response--main-navigation').addClass('slideRight').removeClass('slideLeft');
  }

	// get width of browser window
  function getWidth() {
		if (self.innerWidth) {
			return self.innerWidth;
		}
		if (document.documentElement && document.documentElement.clientWidth) {
			return document.documentElement.clientWidth;
		}
		if (document.body) {
			return document.body.clientWidth;
		}
	}

	// creates mobile navigation
	function mobileNav(){
		$('.response--main-navigation').addClass('mobile-nav');

    if(options.animate === true){
		    $('.response--main-navigation .response--site-menu').css({'transition':options.slideSpeed+'ms'});
    }

		// if buttons with a class of show-nav and hide-nav don't exist, add them
		var showNav = $('.response--main-navigation').children('a.show-nav');
		if(showNav.length === 0){
			$(".response--main-navigation").append(
        `<a href="#" class="show-nav">
					<img
                src="./assets/hamburger.svg"
                alt="Hamburger Menu for smaller screens."
              />
				</a>
				`
      );
		}
		var hideNav = $('.response--site-menu').children('a.hide-nav');
		if(hideNav.length === 0){
			$('.response--site-menu').prepend('<a class="hide-nav">Close</a>');
		}
	}

	// if browser window is smaller than 960px and no resize event has fired,
	// meaning that the browser loads in a small window
	if(getWidth() <= options.browserWidth){
		mobileNav();

		$('a.show-nav').on('click', function(){
			$('.response--main-navigation').addClass('expanded');
			$('body').css({'height':'100vh', 'overflow-y':'hidden'});
		});
		$('a.hide-nav').on('click', function(){
			$('.response--main-navigation').removeClass('expanded');
			$('body').css({'height':'auto', 'overflow-y':'visible'});
		});
	}

	// test if window has been resized
	$(window).resize(function() {

		// if browser window is smaller than 960px
		if(getWidth() <= options.browserWidth){
			mobileNav();

			$('a.show-nav').on('click', function(){
				$('.response--main-navigation').addClass('expanded');
				$('body').css({'height':'100vh', 'overflow-y':'hidden'});
			});
			$('a.hide-nav').on('click', function(){
				$('.response--main-navigation').removeClass('expanded');
				$('body').css({'height':'auto', 'overflow-y':'visible'});
			});

		}
		// if browser window is larger than 960px
		else {
			$('.response--main-navigation').removeClass('mobile-nav');
			$('.response--main-navigation').removeClass('expanded');
			$('a.show-nav').remove();
			$('a.hide-nav').remove();
		}

	}); // end of resize function

}
