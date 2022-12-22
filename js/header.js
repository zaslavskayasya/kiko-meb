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