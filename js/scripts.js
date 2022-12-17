$(function(){
	var $body = $('body'),
		pageClass = $body.attr('class'),
		popup = $('.popup'),
		dark = $('.dark'),
		cssActive = '_active',
		cssHover = '_hover',
		cssDisable = '_disable',
		cssFocus = '_focus',
		cssHide = '_hide',
		cssOpen = '_open',
		cssError = '_error'
	;
	
	// Animation
	(function(){
		$('.advantages li span, .lights__plus li, .printing__plus li').addClass('hidden').viewportChecker({
			classToAdd: 'visible animated zoomIn',
			offset: 200
		});
		$('.catalog__nav li, .contact__item').addClass('hidden').viewportChecker({
			classToAdd: 'visible animated flipInX',
			offset: 200
		});
		/*$('.project__item').addClass('hidden').viewportChecker({
			classToAdd: 'visible animated fadeIn',
			offset: 200
		});*/
		$('.banner._n2 .img, .banner._n3 .img, .banner._n4 .img, .banner._n5 .img').addClass('hidden').viewportChecker({
			classToAdd: 'visible animated fadeInLeft',
			offset: 500
		});
	})();
	

	// Menu
	(function(){
		var nav = $('.head__nav'),
			lastId,
			menuItems = nav.find('a'),
			scrollItems = menuItems.map(function(){
				var item = $($(this).attr('href'));
				if (item.length) { return item; }
			});
		
		nav.on('click', 'a', function(e){
			e.preventDefault();
			var href = $(this).attr('href'),
				offsetTop = href === "#" ? 0 : $(href).offset().top-45
			;
			
			if(href == '#contacts'){
				offsetTop = offsetTop + 500;
			}
				
			$('html, body').stop().animate({
				scrollTop: offsetTop
			}, 500);
		});
		
		$(window).scroll(function(){
			var fromTop = $(this).scrollTop()+91;
			var cur = scrollItems.map(function(){
				if ($(this).offset().top < fromTop) return this;
			});
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : '';
			if (lastId !== id){
				lastId = id;
				menuItems.removeClass(cssActive).filter('[href=#'+id+']').addClass(cssActive);
			}
		});
		
		$(document).ready(function(){
			var nav = $.getUrlVar('nav'),
				id = $.getUrlVar('id'),
				cat = $('.catalog__wrap'),
				catNav = $('.catalog__nav'),
				offsetTop = nav === "#" ? 0 : $(nav).offset();
			console.log(offsetTop);
			cat.find('.catalog__hide').fadeOut(0);
			$(id).fadeIn(300);
			catNav.find('li').removeClass(cssActive);
			catNav.find('li[data-href='+id+']').addClass(cssActive);
			$('.firstActive').show();
			$('html, body').stop().animate({
				scrollTop: offsetTop
			}, 500);
			$('.firstActive').show();
		});
		
		$.extend({
			getUrlVars: function(){
				var vars = [], hash;
				var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
				for(var i = 0; i < hashes.length; i++){
					hash = hashes[i].split('=');
					vars.push(hash[0]);
					vars[hash[0]] = hash[1];
				}
				return vars;
			},
			getUrlVar: function(name){
				return $.getUrlVars()[name];
			}
		});
	})();
	
	// Form + popup

$(document).ready(function(){
				$('.feedb').on("click", function(){
					$('.js-dark').show();
					$('#call').show()
				});
				$('.js-close').on('click',function(){
					$('.js-dark').hide();
					$('#call').hide()
				});
				$('.callb').on("click", function(){
					$('.js-dark').show();
					$('#feed').show()
				});
				$('.js-close').on('click',function(){
					$('.js-dark').hide();
					$('#feed').hide()
				});

				$('.catalogs').on("click", function(){
					$('.js-dark').show();
					$('#que').show()
				});
				$('.js-close').on('click',function(){
					$('.js-dark').hide();
					$('#que').hide()
				});
			});

		// Tabs
	(function(){
		var oneDays = new Date().getTime() + 102400000;
		var threeDays = new Date().getTime() + 302400000;
		var fiveDays = new Date().getTime() + 452400000;
		$('#countdown1').countdown(threeDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown2').countdown(oneDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown3').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown4').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown5').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown6').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown7').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown8').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown9').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown10').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown11').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown12').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown13').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown14').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown15').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown16').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown17').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown18').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown19').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown20').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>днів</li>' + '<li><span>%H</span><br>годин</li>' + '<li><span>%M</span><br>хвилин</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});

	
	})();
	
	// Catalog
	(function(){
		var catNav = $('.catalog__nav li'),
			catDiv = $('.catalog__hide')
		;
		
		catNav.on('click', function(){
			var href = $(this).data('href');
			
			catNav.removeClass(cssActive);
			$(this).addClass(cssActive);
			catDiv.fadeOut(0);
			$(href).fadeIn(300);
		});
	})();
	
	// Calc
	(function(){
		var calc = $('.calc__wrap__cell');
		
		calc.on('keyup', 'input', function(){
			var f_area = $('.AREA').val(),
				f_angle = $('.ANGLE').val(),
				f_lights = $('.LIGHTS').val(),
				f_summ = $('.SUMM'),
				price = calc.find('.price'),
				summ;
			
			summ = f_area !== '' && f_area !== 0 ? (f_area*120) + (f_angle*150) + (f_lights*150) : 0;
			f_summ.val(summ);
			price.find('span').html(summ);
		});
	})();
	
	// Reviews
	(function(){
	
		$('.slider-item').owlCarousel({
			center: false,
			merge: false,	
			mouseDrag: false,
			touchDrag: false,
			pullDrag: false,
			autoplay: false,
			/*autoplayTimeout: 6000,*/
			autoplayTimeout: 10000,
			items: 1,
			margin: 0,
			nav: true,
			dots: false,
			navigation : true,
			pagination: false,
			loop:true,
			autoWidth:true,
		});

	})();
	
	// Portfolio
	(function(){
		
		
		$('.portfolio').mixItUp({
			animation: {
				duration: 300,
				effects: 'fade',
				easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			}
		});
		$('.filter__item').on('click', function(){
			var cls = $(this).data('filter');
			$('.portfolio').find('a').attr('rel', 'gall');
			if(cls !== 'all'){
				$('.portfolio').find('a'+cls).attr('rel', 'gallActive');
			}
		});
		$('.js-gall').on('click', function(){
			var rel = $(this).attr('rel');
			$('a[rel='+rel+']').fancybox({
				padding: 0,
				margin: 0,
				cyclic: true,
				centerOnScroll: true,
				overlayShow: true,
				transitionIn: 'fade',
				easingIn: 'swing',
				helpers: {
					overlay: {
						locked: false
					}
				}
			});
		});
	})();
	
	$(window).load(function () {
		$('#one').trigger('click');
		$('#two').trigger('click');
	});
	
	
	$('.head__nav').slicknav({
		label: ''
	});
	$('.slider.mobile').slick({
		 dots: true,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1
		  // adaptiveHeight: true
	});
	$('.slicknav_nav a').click(function(){
		$(this).parents('.slicknav_menu').find('.slicknav_btn').click()
	})

});



jQuery(function($){
   $(".PHONE_WORK").mask("(999)999-99-99");
});



const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
});


$('.project_slider').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	 responsive: [
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  arrows: false
		}
	  }]
});