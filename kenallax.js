(function(){
	
var Kenallax =  function (DOMElement){
	this.DOMElement = DOMElement;
	this.getComputedStyle();
};

Kenallax.prototype.getComputedStyle = function(){
	var _computedStyle = window.getComputedStyle(this.DOMElement);
	for (var attr in _computedStyle) {
		this[attr] = _computedStyle[attr];
	}
};

Kenallax.prototype.set = function(attr, val) {
	this[attr] = val;
	this.DOMElement.style[attr] = val;
};

Kenallax.prototype.get = function(attr) {
	return this[attr];
};

Kenallax.trackMouse = function(mouseEvent){
	var x = mouseEvent.x;
	var y = mouseEvent.y;

};

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

Kenallax.prototype.mouseRelative = function(callback) {

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

window.Kenallax = Kenallax;

document.addEventListener("mousemove", function(e){
	Kenallax.trackMouse(e);
});



})();