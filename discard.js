Kenallax.prototype.scrollRelative = function(callback) {
	var _kenallax = this;

	window.addEventListener('scroll', function(e) {
	e.preventDefault();

  var scrollPos = window.scrollY;

	var busy = false;

  if (!busy) {
    window.requestAnimationFrame(function() {
      callback.call(_kenallax, scrollPos);
      busy = false;
    });
  }

  busy = true;

	});
};