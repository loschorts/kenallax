document.addEventListener("DOMContentLoaded", function(){
	var divs = [].slice.call(document.getElementsByTagName("div"),0);

	divs.forEach(function(div, idx){

		var scrollSpeed = parseInt(div.getAttribute("speed"));
		var parallaxElement = new Kenallax(div);
		parallaxElement.scrollRelative(function(scrollPos){

			if (!this.top) { 
				this.top = 300; 
			}

			if (!this.lastScrollPos ) {
				this.lastScrollPos = 0;
			}

			// console.log(this.lastScrollPos, scrollPos, this.top);

			var diff = this.lastScrollPos - scrollPos;
			var newTop = this.top += (diff * scrollSpeed);
			this.set('top', newTop + 'px');
			
			this.lastScrollPos = scrollPos;
		});

	});

});