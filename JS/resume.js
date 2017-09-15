$(document).ready(function() {
	$('.top a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 400);
 });
	$('.edu a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({scrollTop:$('.education').offset().top}, 300);
 });
	$('.Wex a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({scrollTop:$('.workex').offset().top}, 300);
 });
  $('.flexslider').flexslider({
    animation: "slide"
  });
});