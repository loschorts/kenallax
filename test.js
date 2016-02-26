document.addEventListener("scroll", function(e){
	style = window.getComputedStyle(document.getElementById("A"));
	console.log(style.top);
});